//列表页
;$(function () {
    //发送请求数据库内的所有商品信息
    $.post('../php/goodsList.php', {goodsList: true}, function (response) {

        //返回的是 string
        var respon = eval('(' + response + ')');
        var res = '';

        //商品列表结构
        var goodsListHtml = respon.map(function (value, index, array) {
            //map 返回数组, 每index返回一次

            res = '<li>' + '<img src=' + value.img + '>' +
                        '<ul>' +
                            '<li>' + value.descript + '</li>' +
                            '<li>' + '￥' + value.price + '</li>' +
                            '<li>' + value.point + '</li>' +
                        '</ul>' +
                  '</li>';
            return res;
        //把map方法返回的数组转为字符串
        }).join('\n');

        //写入html页面
        $('.goodsIt').html('<ul>' + goodsListHtml + '</ul>');

    });
});