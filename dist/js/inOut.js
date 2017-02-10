//判断用户是否已登录
//若已登录则退出,若未登录则跳转至 登陆注册 页面

$(function () {

    //获取点击 的jQuery对象
    var $inOut;

    //延时以获取 jQuery 对象
    setTimeout(function () {
        $inOut = $('#inOut');

        //绑定 登陆注册或退出的 点击事件
        $inOut.on('click', function () {

            //发送POST请求  判断是否已登录
            $.post('../php/judgeLog.php', function (response) {

                // 转为json数据
                var resJson = eval('(' + response + ')');

                //判断是否已登录
                if (resJson.state) {

                    //发送退出请求
                    $.post('../php/logout.php', function (respon) {
                        var res = eval('(' + respon + ')');

                        //退出成功 则 刷新页面
                        if (res.state) {
                            location.reload();
                        }
                    })
                }

                //未登录  则跳转至登录注册页面
                else {
                    window.location.href = 'loginReg.html';
                }
            });

        });
    }, 1000);

});