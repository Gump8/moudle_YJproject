<?php
    include 'conExc2.php';


    global $goodsList;
    $goodsList = $_POST["goodsList"];

    $sqlList = "SELECT * FROM goodslist limit 1,15";

    query($sqlList);

?>