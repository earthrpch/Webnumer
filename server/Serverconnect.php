<?php
header("Access-Control-Allow-Origin:http://localhost:3000");
  $hostname = "localhost";
  $username = "root";
  $password = "";
  $dbname = "projectnumer";

  $connect = new mysqli($hostname,$username,$password,$dbname);

  if($connect->connect_error)
  {
    die("Connect Failed : " .$connect->connect_error);
  }
  //echo "Connect Successfully !!";
 ?>
