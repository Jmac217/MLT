<?php include 'connect.php';

$id = $_POST['id'];
mysql_query("DELETE FROM customers WHERE id='$id'")or die('1');
echo '0';

?>
