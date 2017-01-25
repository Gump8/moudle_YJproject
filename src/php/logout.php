<?php
    if(isset($_SESSION['logged'])){

        unset($_SESSION['logged']);
        echo "{unset: true}";
//        header("Location: login.html");
    }
?>