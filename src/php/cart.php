<?php
    include 'conExc2.php';

    $goodsId = $_POST['goodsIdx'];
    $clientName = "$".$_POST['clientName'];
    $goodsPrice = $_POST['goodsPrice'];
    $goodsImg = "'".$_POST['goodsImg']."'";
    $goodsDes = "'".$_POST['goodsDes']."'";

    //商品的操作方式 加减或删除
    $type = $_POST['type'];

    $goodsNum = 1;

    //查询是否已存在 脚本
    $sqlExist = "SELECT * FROM " .$clientName. " WHERE goods_id =" .$goodsId. ';';

    //插入数据语句
    $insertGoods = "INSERT INTO " .$clientName."(goods_id,goods_num,goods_price,goods_img,goods_des) ".
                    "VALUES(".$goodsId.",".$goodsNum.",".$goodsPrice.",".$goodsImg.",".$goodsDes.");";


    //执行查询语句
    $existResult = queryExist($sqlExist);

    //判断是否存在
    if(count($existResult) > 0)
    {
        //已存在书库中是执行 更新update

        //查询已存在的大于1的语句
        $sqlExist = "SELECT * FROM " .$clientName.
                    " WHERE goods_id =" .$goodsId.
                    " and goods_num >= 1;";
        $existResult = queryExist($sqlExist);

//        if ($existResult[0]->goods_num == 1 && $test != undefined)
        //更新 加1
        if ($type == 'up')
        {
            $updateNum = $existResult[0]->goods_num + 1;
        }
        else if ($type == 'down')
        {
            if ($existResult[0]->goods_num == 1)
            {
                $updateNum = 1;
            }
            else
            {
                $updateNum = $existResult[0]->goods_num - 1;
            }
        }

        //更新 脚本
        if ($type == 'delete')
        {
            $updateSql = "DELETE FROM " .$clientName.
                         " WHERE goods_id = " .$goodsId. ";";
        }
        else
        {
            $updateSql = "UPDATE " .$clientName.
                         " SET goods_num = " .$updateNum.
                         " WHERE goods_id = " .$goodsId. ";";
        }

        excute($updateSql);

        echo $updateNum;
    }
    else
    {
        //不存在数据库中时执行插入 insert
        excute($insertGoods);

        echo $insertGoods;
    }

//    echo "'".$goodsId."'"."'".$clientName."'";

//    $sqlId = "SELECT * FROM goodslist where id = '$goodsId'";
//
//     //查询返回 根据商品id的结果
//     $goodsMsg = "'".query($sqlId)."'";
//     echo "{'state': true, 'message': " . $goodsMsg . "}";
?>