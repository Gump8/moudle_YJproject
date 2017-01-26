
$(function () {
   /******************** 注册  注册  注册   *******/

    //获取 jQuery 对象
    var $tel = $('#tel');
    var $email = $('#email');
    var $password = $('#password');
    var $conPass = $('#conPass');

    //定义全局变量 保存表单的输入值
    var _tel, _email, _password, _conPass;

    //定义全局变量 保存是否通过验证
    var tel = false, email = false, password = false, conPass = false;

    //表单验证
    //获取 register 中的 input jquery对象（实例）
    //绑定得到焦点事件
    $('input','#register').on('focus',function () {

        //保存当前 对象
        var self = $(this);

        //绑定失去焦点事件
        self.on('blur',function () {

            //获取当前对象的 id 属性值
            var idValue = self.attr('id');

            //首先对 register 下的所有input判断是否为空
            if (self.val().trim() === '')
            {
                self.next().text('不能为空').css('color','red');
            }
            //输入不为空时再进行 下一步验证
            //根据 id 属性值进行相应的验证
            else {

                //验证输入的电话号码
                if (idValue === 'tel') {

                    _tel = $tel.val();

                    if(/^1[34578]\d{9}$/.test(_tel))
                    {
                        tel = true;
                        $tel.next().text('OK').css('color','green')
                    }
                    else
                    {
                        $tel.next().text('格式不正确').css('color','red');
                        tel = false;
                    }
                }
                //验证email
                else if (idValue === 'email')
                {
                    _email = $email.val();

                    if (/^[\w\.\-]+@[a-zA-Z0-9\-]+(\.[a-zA-Z]+){1,2}$/.test(_email))
                    {
                        email = true;
                        $email.next().text('OK').css('color','green')
                    }
                    else
                    {
                        $email.next().text('格式不正确').css('color','red');
                        email = false;
                    }
                }
                //验证密码
                else if (idValue === 'password')
                {
                    _password = $password.val();

                    if (/^\S{6,20}$/.test(_password))
                    {
                        password = true;
                        $password.next().text('OK').css('color','green')
                    }
                    else
                    {
                        $password.next().text('格式不正确').css('color','red');
                        password = false;
                    }
                }
                //验证 确认密码
                else if (idValue === 'conPass')
                {
                    _conPass = $conPass.val();

                    if (_password === _conPass)
                    {
                        conPass = true;
                        $conPass.next().text('OK').css('color','green')
                    }
                    else
                    {
                        $conPass.next().text('两次输入的密码不相等').css('color','red');
                        conPass = false;
                    }

                }
            }

        });

    });

    //点击事件  注册
    $('#reg').on('click',function () {
        //获取是否勾选  同意协议
        var $agree = $('#agree')[0].checked;
        if (!$agree) {alert('请勾选 同意协议')}

        //发送请求前先判断表单验证是否全通过
        if (tel && email && password && conPass && $agree)
        {
            $.post('../php/register.php',
            {
                //获取输入值  发送到 php
                tel: _tel,
                email: _email,
                password: _password

            },function (response)
            {
                var $res = eval('(' + response + ')');

                //注册成功后跳转到主页
                if ($res.state)
                {
                    window.location.href = 'homepage.html';
                }
                else {alert($res.message)}
            })
        }
    })


    /******************** 登录  登录   登录   登录     *******/

    var $logAcc = $('#logAcc');
    var $logPass = $('#logPass');

    var $log = $('#log');
    //随机验证码
    function authCode() {
        var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var code = '';
        for (var i = 0; i < 4; i++) {
            code += str[Math.floor(Math.random()*36)];
        }
        return code;
    }
    //点击事件 登录
    $log.on('click',function () {
        console.log(authCode());
        // $.post('../php/login.php',{
        //     account: ,
        //     logPass:
        // },function (response) {
        //     console.log(response);
        // })
    })
});

