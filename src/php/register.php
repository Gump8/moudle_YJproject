<?php

    //获取连接,查询,执行  的脚本
    include 'conExc.php';

    //获取html页面的输入数据
    $tel = $_POST["tel"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    //查询脚本
    $sqlCheck = "select * from yj
                where tel = '$tel' or email = '$email'";
    //查询结果
    $sqlCheckResult = query($sqlCheck);

    //逻辑脚本
    $sqlReg = "insert into yj(tel, email, password)
            values('$tel','$email','$password')";

    //判断tel 或 email 是否已存在
    if(count($sqlCheckResult) > 0) {

        echo "{state: false, message: 'email or tel 已被注册!!!'}";

    } else {
        //执行逻辑语句 (插入 注册)
        //返回 true Or false, 返回结果由$excResult保存
        $excResult = excute($sqlReg);

        //判断是否插入成功
        if ($excResult) {
            echo "{state: true, message: '注册成功'}";

            //注册成功后执行查询语句
            $queryResult = query($sqlCheck);

            if ($queryResult > 0) {
                  echo '已在数据库中';
                session_start();
                $_SESSION["logged"] = $queryResult[0]->tel;
            }


        } else {
            echo "{state: false, message: '注册失败'}";
        }
    }

?>