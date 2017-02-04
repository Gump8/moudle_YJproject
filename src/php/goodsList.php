<?php
    include 'conExc2.php';

    //排序方式  默认为按id排序
    $ordeType = $_POST["orderType"];

    //从第几页开始加载  即分页
    $page = $_POST["page"];

    //每页的商品数;
    $pageCount = $_POST["pageCount"];

    //使用 ASC 或 DESC 关键字来设置查询结果是按升序或降序排列
    //默认升序 ASC
    $orderWay = $_POST["orderWay"];

    //是否按价格区间获取内容;
    $priceBoolean = $_POST["priceBoolean"];
    $priceRange = $_POST["priceRange"];

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