<?php include 'connect.php';
echo mysql_num_rows(mysql_query("SELECT id FROM customers"));
?>
