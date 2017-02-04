;$(function () {

    //让头部菜单隐藏
    setTimeout(function () {
        $('.allgoods').css('display','none')
    },800);

    //获取商品的 id
    var goodsIndex = window.location.search.split('=')[1];

    //设为同步
    // $.ajaxSetup({
    //     async : false
    // });id
    $.post('../php/detail.php',{

        //发送商品的 id
        goodsIdx:goodsIndex

    },function (data) {

        //把返回的数据转为 json 数据
        var goodsDetail = eval('(' + data + ')');

        //把String数据类型goodsDetail.message 转为 array
        var goodsDetailMsg = eval('(' + goodsDetail.message + ')');

        //数据成功返回后 用变量保存商品的具体信息
        if(goodsDetail.state){
            // console.log(goodsDetailMsg[0]);

            //用变量保存商品的具体信息
            var goodsID = goodsDetailMsg[0].id;
            var goodsPrice = goodsDetailMsg[0].price;
            var goodsSale = goodsDetailMsg[0].sale;
            var goodsDes = goodsDetailMsg[0].descript;
            var goodsPoint = goodsDetailMsg[0].point;
            var goodsImg = goodsDetailMsg[0].img;
            var goodsImg1 = goodsDetailMsg[0].img1;
            var goodsImg2 = goodsDetailMsg[0].img2;
            var goodsImg3 = goodsDetailMsg[0].img3;
            var goodsImg4 = goodsDetailMsg[0].img4;

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
});