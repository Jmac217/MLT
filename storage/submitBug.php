<?php include 'bugConnect.php';
$app = 'MLT';
$name = $_POST['name'];
$description = $_POST['description'];
mysql_query("INSERT INTO bug (app,name,description) VALUES('$app','$name','$description')")or die('1');
echo '0';
?>