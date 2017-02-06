
//商品的操作方式 加减或删除
;var _type = "up";

$(function () {


    //让头部菜单隐藏
    setTimeout(function () {
        $('.allgoods').css('display', 'none')
    }, 800);

    //定义全局变量
    var goodsID;
    var goodsPrice;
    var goodsSale;
    var goodsDes;
    var goodsPoint;
    var goodsImg;
    var goodsImg1;
    var goodsImg2;
    var goodsImg3;
    var goodsImg4;


    //获取商品的 id
    var goodsIndex = window.location.search.split('=')[1];

    // 设为同步
    $.ajaxSetup({
        async: false
    });

    $.post('../php/detail.php', {

        //发送商品的 id
        goodsIdx: goodsIndex

    }, function (data) {

        //把返回的数据转为 json 数据
        var goodsDetail = eval('(' + data + ')');

        //把String数据类型goodsDetail.message 转为 array
        var goodsDetailMsg = eval('(' + goodsDetail.message + ')');

        //数据成功返回后 用变量保存商品的具体信息
        if (goodsDetail.state) {
            // console.log(goodsDetailMsg[0]);

            //用变量保存商品的具体信息
            goodsID = goodsDetailMsg[0].id;
            goodsPrice = goodsDetailMsg[0].price;
            goodsSale = goodsDetailMsg[0].sale;
            goodsDes = goodsDetailMsg[0].descript;
            goodsPoint = goodsDetailMsg[0].point;
            goodsImg = goodsDetailMsg[0].img;
            goodsImg1 = goodsDetailMsg[0].img1;
            goodsImg2 = goodsDetailMsg[0].img2;
            goodsImg3 = goodsDetailMsg[0].img3;
            goodsImg4 = goodsDetailMsg[0].img4;

            console.log(
                [goodsID,
                    goodsPrice,
                    goodsSale,
                    goodsDes,
                    goodsPoint,
                    goodsImg,
                    goodsImg1,
                    goodsImg2,
                    goodsImg3,
                    goodsImg4].join('\n')
            )
        }
    });


    //设置放大镜图片的路径
    $('#chuang').add($('#chuang1')).attr('src', goodsImg);
    $('#detailPa').add($('#detailPaa')).attr('src', goodsImg1);
    $('#detailPb').add($('#detailPbb')).attr('src', goodsImg2);
    $('#detailPc').add($('#detailPcc')).attr('src', goodsImg3);
    $('#detailPd').add($('#detailPdd')).attr('src', goodsImg4);

    //放大镜
    $("#etalage").zoom({
        align: "left",				// 当前展示图片的位置，则放大的图片在其相对的位置
        thumb_image_width: 332,		// 当前展示图片的宽
        thumb_image_height: 332,	// 当前展示图片的高
        source_image_width: 664,  	// 放大图片的宽
        source_image_height: 664,	// 放大图片的高
        zoom_area_width: 250, 		// 放大图片的展示区域的宽
        zoom_area_distance: 10,
        zoom_easing: false,          // 是否淡入淡出
        description_opacity: 0.9,
        small_thumbs: 5,			// 小图片展示的数量
        smallthumb_inactive_opacity: 0.9 	// 小图片处于非激活状态时的遮罩透明度
    });


    $('.p', '.twoData').text(goodsDes);
    $('span', '.pid').text(goodsID);
    $('span', '.detailPrice').text('￥' + goodsPrice);
    $('p', '.Point').text(goodsPoint);

    //加入购物车
    $('#chooseIt').add($('.buyNow')).on('click', function () {

        //判断是否登录
        $.post('../php/judgeLog.php', function (response) {

            // 转为json数据
            var resJson = eval('(' + response + ')');
            var _clientName = resJson.clientName;
            //判断是否已登录
            if (resJson.state)
            {
                $.post('../php/cart.php', {

                    //发送商品的 id
                    goodsIdx:   goodsIndex,
                    clientName: _clientName,
                    goodsImg: goodsImg,
                    goodsPrice: goodsPrice,
                    goodsDes: goodsDes,
                    type: _type

                }, function (data) {
                    console.log(data)
                });
            }
            else
            {
                alert('尊敬的客户,请先登录!')
            }

        });


    });


    //立即购买
    $('#buyIt').on('click', function () {
        window.location.href = 'cart.html'
    });


});