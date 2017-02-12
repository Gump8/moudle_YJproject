<?php
    include 'conExc2.php';

    $clientName = "$".$_POST['clientName'];

    $sqlclientName = "SELECT * FROM $clientName";

     //查询返回 根据商品id的结果
     $cartMsg = "'".query($sqlclientName)."'";
     echo "{'state': true, 'message': " . $cartMsg . "}";
?>