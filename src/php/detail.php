<?php
    include 'conExc2.php';

    $goodsId = $_POST['goodsIdx'];

    $sqlId = "SELECT * FROM goodslist where id = '$goodsId'";

     //查询返回 根据商品id的结果
     $goodsMsg = "'".query($sqlId)."'";
     echo "{'state': true, 'message': " . $goodsMsg . "}";
?>