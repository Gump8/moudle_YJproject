<?php
    //    session_start();  //  不能重复


    $status = session_status();

    if (!($status == PHP_SESSION_ACTIVE))
    {

        //Destroy current and start new one
//        session_destroy();
        session_start();
    }
/*****************     判断是否在  登录状态  *********************/


    //判断是否在  登录状态
    if (isset($_SESSION['logged'])) {

        //返回已登录的客户名
        //必须要这样拼接  eval 转换为json数据才能成功
        $res = "'".(string)$_SESSION['logged']."'";

        echo "{'state': true, 'clientName': " . $res . "}";

    } else {
        echo "{state: false}";
    }
?>