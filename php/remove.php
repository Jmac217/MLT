<?php include 'connect.php';
// takes .customer id and removes it from the table
$id = $_POST['id'];
mysql_query("DELETE FROM customers WHERE id='$id'")or die(mysql_error());
echo '0';
?>
