<?php
    include 'conExc2.php';

    $ordeType =  $_POST["orderType"];
    $page =      $_POST["page"];
    $pageCount = $_POST["pageCount"];
    $orderWay =  $_POST["orderWay"];
    $priceBoolean =  $_POST["priceBoolean"];
    $priceRange =  $_POST["priceRange"];

    //使用 ASC 或 DESC 关键字来设置查询结果是按升序或降序排列
    //SELECT * from goodslist ORDER BY price DESC limit 10,5;
    //SELECT * FROM goodslist where price > 500 and price < 800;

    if ($priceBoolean === 'true')
    {
        $sqlList = "SELECT * FROM goodslist where $priceRange;";
    }
    else
    {
        $sqlList = "SELECT *FROM goodslist ORDER BY $ordeType $orderWay limit $page,$pageCount;";
    }

    //查询返回所有商品信息
    $list = query($sqlList);
    echo $list;
?>