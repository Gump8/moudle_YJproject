

//购物车内的 商品数量
 ;var cartNum = 0;
 var getCartNumfn;

 var cartsMsg;

$(function () {

    //点击时商品的id
    var goodsIndex;

    var _clientName = ' ';

    //插入商品结构
    var $cartGoods = $('.cartGoods');

    //插入总计价格
    var $allPrice = $('span','.allPrice');

        //设为同步
    $.ajaxSetup({
        async: false
    });

    getCartNumfn = function () {
        //根据 用户名获取数据库中购物车的数据
        _clientName = ' ';

        //设为同步
        $.ajaxSetup({
            async: false
        });

        //发送POST请求 获取 用户名
        $.post('../php/judgeLog.php', function (response) {

            // 转为json数据
            var resJson = eval('(' + response + ')');

            //判断是否已登录
            if (resJson.state) {
                //延时以获取节点
                _clientName = resJson.clientName;
            }
            else {
                alert('尊敬的用户,请登录!');
                window.location.href = 'loginReg.html'
            }

        });

        $.post('../php/cartGetdata.php', {
            clientName: _clientName
        }, function (response) {

            //把返回的数据转为 json 数据
            var carts = eval('(' + response + ')');

            //把String数据类型carts.message 转为 array
            cartsMsg = eval('(' + carts.message + ')');

            cartNum = cartsMsg.length;

        });
    };

    var allprice = 0;
    function insertCartHTML() {

        allprice = 0;
        //商品列表结构
        var cartListHtml = cartsMsg.map(function (value, index, array) {

            //map 返回数组, 每index返回一次
            allprice += value.goods_price * value.goods_num;

            res = '<div>'+
                        '<div class="pName">'+
                            '<img src=' + value.goods_img + '>' +
                            '<p>'+ value.goods_des +'</p>'+
                            '<p>默认: </p>'+
                            '<p >货号: '+ value.goods_id +'</p>'+
                        '</div>'+
                        '<div class="nPrice">'+
                            '<p>'+
                                '<span class="down" data-index='+ '"' + value.goods_id +'"' +'>\- ' + '</span><input value='+ value.goods_num +
                                ' type="text"><span class="up" data-index='+ '"' + value.goods_id +'"' +'>\+'+'</span></p>'+
                            '<p>'+ value.goods_price +'</p>'+
                            '<p class="delete" data-index= '+ '"' + value.goods_id +'"' +'>删除商品</p>'+
                        '</div>'+
                 '</div>';
            return res;

            //把map方法返回的数组转为字符串
        }).join('\n');

        //写入html页面
        $cartGoods.html(cartListHtml);
        $allPrice.html('¥'+allprice);

    }


    getCartNumfn();
    insertCartHTML();


    // $('.up').add($('.down')).add($('.delete'))

    $cartGoods.on('click',function (e) {

        e = e.target;

        _type = $(e).attr('class');

        goodsIndex = $(e).attr('data-index');

        $.post('../php/cart.php', {

            //发送商品的 id
            clientName: _clientName,
            goodsIdx:  goodsIndex,
            type: _type,
            goodsImg: "",
            goodsPrice: "",
            goodsDes: ""

        }, function (data) {

            getCartNumfn();
            insertCartHTML();
          // location.reload()
        });

    })


});