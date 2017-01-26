<?php
    //    session_start();  //  不能重复
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