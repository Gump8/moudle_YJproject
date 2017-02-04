//列表页
;$(function () {

    //定义全局变量
    var $goodsIt = $('.goodsIt');

    //排序方式  默认为按id排序
    var _orderType = 'id';

    //从第几页开始加载  即分页
    var _page = 0;

    //每页的商品数;
    var _pageCount = 15;

    //使用 ASC 或 DESC 关键字来设置查询结果是按升序或降序排列
    //默认升序 ASC
    var _orderWay = 'ASC';

    //是否按价格区间获取内容;
    var _priceBoolean = 'false';
    var _priceRange = '';



/********  点击排序  ******  点击排序   ********  点击排序   ************/

    $('#order').on('click', 'li', function () {
        if ($(this).index() == 1) {

            //第二次点击改变排序方式
            if (_orderWay === 'ASC')
            {
                _orderWay = 'DESC';
            }
            else
            {
                _orderWay = 'ASC';
            }

            //按价格排序
            _orderType = 'price';
            goodsPost();
            console.log(1)
        }
        else if ($(this).index() == 2) {

            //第二次点击改变排序方式
            if (_orderWay === 'ASC')
            {
                _orderWay = 'DESC';
            }
            else
            {
                _orderWay = 'ASC';
            }

            // 按销量排序
            _orderType = 'sale';
            goodsPost();
            console.log(1)
        }
    });

    //按 价格 或 销量 排序后分页
/********  点击分页  ******  点击分页   ********  点击分页   ************/

    //按价格 或销量 排序后分页
    $('.btn-group').on('click','button',function () {
        _page = _pageCount * ($(this).text() - 1);
        goodsPost();
    });



    /*****  点击下一页  ****  点击下一页  *****/

    $('#nextPage').on('click',function () {
        _page += _pageCount;
        if (_page >= 45)
        {
            _page = 0;
        }
        goodsPost();
    });



    /*****  按价格区间获取内容  ****  按价格区间获取内容  *****/
    $('#pricerange').on('click','li',function () {

        var index = $(this).index();
        _priceBoolean = 'true';
        _priceRange = 'price >= '+ (1 + 500 * (index - 2)) +
                       ' and ' + 'price <= ' + 500 * (index - 1);
        goodsPost();

        _priceBoolean = 'false';
    });



/***************      发送请求数据库内的所有商品信息     *************/
    //设为同步
    // $.ajaxSetup({
    //     async : false
    // });

    // 封装向数据库请求商品信息的函数
    function goodsPost() {

        $.post('../php/goodsList.php', {

            orderType:    _orderType,
            page:         _page,
            pageCount:    _pageCount,
            orderWay:     _orderWay,
            priceBoolean: _priceBoolean,
            priceRange:   _priceRange

        }, function (response) {
            //返回的是 string
            var respon = eval('(' + response + ')');
            var res = ' ';

            //商品列表结构
            var goodsListHtml = respon.map(function (value, index, array) {
                //map 返回数组, 每index返回一次

                res = '<li ' + ' data-index=' + '"' + value.id + '"' + ' >' +
                        '<img src=' + value.img + '>' +
                        '<ul>' +
                            '<li>'+ value.descript + '</li>' +
                            '<li>' + '￥' + value.price + '</li>' +
                            '<li>' + value.point + '</li>' +
                            '<li>' + '已售: ' + value.sale + '</li>' +
                        '</ul>' +
                    '</li>';
                return res;
                //把map方法返回的数组转为字符串
            }).join('\n');

            //写入html页面
            $goodsIt.html('<ul>' + goodsListHtml + '</ul>');


    /*******      点击跳转至详情页   *****    点击跳转至详情页    ****************/

                // 获取.goodsIt的子元素的子元素 li
            var $goodsLi = $goodsIt.children().children();

            $goodsLi.on('click', function () {

                //获取属性值 (商品id)
                var goodsIndex = $(this).attr('data-index');

                //是否能获取到商品的信息  若能,则跳转到该商品的详情页
                $.post('../php/detail.php', {goodsIdx: goodsIndex}, function (data) {
                    var goodsDetail = eval('(' + data + ')');
                    if (goodsDetail.state) {
                        window.location.href = 'detail.html?id=' + goodsIndex;
                    }
                });
            })
        });

    };

    goodsPost();


});