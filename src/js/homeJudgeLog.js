//判断用户是否已登录
//若已登录则显示用户信息
$(function () {
    //发送POST请求
    $.post('../php/judgeLog.php',function (response) {

        // 转为json数据
        var resJson = eval('(' + response + ')');

        //判断是否已登录
        if (resJson.state) {
            //延时以获取节点
            setTimeout(function () {
                $('#clientName').text(resJson.clientName);
                $('#inOut').text('退出');
            },1000);
        }

    })
});