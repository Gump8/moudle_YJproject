//列表页
;$(function () {
    //定义全局变量

    //设为同步
    // $.ajaxSetup({
    //     async : false
    // });
    //发送请求数据库内的所有商品信息
    $.post('../php/goodsList.php', {goodsList: true}, function (response) {

        //返回的是 string
        var respon = eval('(' + response + ')');
        var res = ' ';

        //商品列表结构
        var goodsListHtml = respon.map(function (value, index, array) {
            //map 返回数组, 每index返回一次

            res = '<li '+ ' data-index='+ '"' + value.id + '"'+' >' +
                        '<img src=' + value.img + '>' +
                        '<ul>' +
                            '<li>'
                            + value.descript + '</li>' +
                            '<li>' + '￥' + value.price + '</li>' +
                            '<li>' + value.point + '</li>' +
                        '</ul>' +
                  '</li>';
            return res;
        //把map方法返回的数组转为字符串
        }).join('\n');

        //写入html页面
        var $goodsIt = $('.goodsIt');
        $goodsIt.html('<ul>' + goodsListHtml + '</ul>');

        // 获取.goodsIt的子元素的子元素 li
        var $goodsLi = $goodsIt.children().children();

        $goodsLi.on('click',function () {
            var goodsIndex = $(this).attr('data-index');

            $.post('../php/detail.php',{goodsIdx:goodsIndex},function (data) {
                var goodsDetail = eval('(' + data + ')');
                if(goodsDetail.state){
                    window.location.href = 'detail.html?id='+ goodsIndex;
                }
            });
        })
    });

});