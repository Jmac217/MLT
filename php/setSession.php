<?php include 'connect.php';

// set up sessions for return
session_start();

// get customer name from form
$first = $_POST['customerFirst'];
$last = $_POST['customerLast'];

// debug, probably won't need.
//$first = 'a';
//$last = 'a';

// search db for first and last, returns an error
$query = mysql_query("SELECT id FROM customers WHERE first='$first' and last='$last'")or die(mysql_error());
$row = mysql_fetch_assoc($query);
//echo $row['id'];

// echos for now, the value that the Session id is being set to.
echo $_SESSION['id'] = $row['id'];

?>
