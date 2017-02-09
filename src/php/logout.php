<?php

//    session_start();


        $status = session_status();

        if (!($status == PHP_SESSION_ACTIVE))
        {

            //Destroy current and start new one
    //        session_destroy();
            session_start();
        }

    	if(isset($_SESSION['logged']))
    	{
    	    //退出登录
    		unset($_SESSION['logged']);

            //判断是否退出成功
            if(!isset($_SESSION['logged']))
            {
                echo "{state: true, message: '退出成功'}";
            }
            else
            {
                echo "{state: false, message: '退出失败'}";
            }
    	}
?>