<?php
    include 'conExc.php';

    $account = $_POST['account'];
    $logPass = $_POST{'logPass'];
//select * from yj where tel = '13333333333' or email = '234235@234.com' and password = '333333'
    $querySql = "select * from yj where
        tel = '$account' or email = '$account' and password = '$logPass'";
?>