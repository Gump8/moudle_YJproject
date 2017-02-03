<?php
    include 'conExc2.php';

//    global $goodsList;
    $goodsList = $_POST["goodsList"];

    $sqlList = "SELECT * FROM goodslist limit 0,15";

    //查询返回所有商品信息
    $list = query($sqlList);
    echo $list;
?>