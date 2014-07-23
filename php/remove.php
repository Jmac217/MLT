<?php include 'connect.php';

$id = $_POST['id'];
mysql_query("DELETE FROM loan WHERE id='$id'")or die('1');
echo '0';

?>