<?php
//    session_start();

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