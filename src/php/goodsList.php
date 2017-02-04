<?php
    include 'conExc2.php';

    //global $goodsList;
    $goodsList = $_POST["goodsList"];

    //使用 ASC 或 DESC 关键字来设置查询结果是按升序或降序排列
    //SELECT * from goodslist ORDER BY price DESC limit 10,5;

    $sqlList = "SELECT * FROM goodslist limit 0,15";

    //查询返回所有商品信息
    $list = query($sqlList);
    echo $list;
?>