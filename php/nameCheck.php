<?php include 'connect.php';

// checks these two names against the db. This function is a little wonky, but it works to keep duplicate names out of the db.
$first = $_POST['first'];
$last = $_POST['last'];

// debug, set names yourself if something breaks
//$first = 'a';
//$last = 'a';

// search for existing names
$query = mysql_query("SELECT first,last FROM loan WHERE first='$first' and last='$last'");
$row = mysql_fetch_assoc($query);

// sets first and last as one, 'fullname', variable.
$fullName = $row['first'].' '.$row['last'];


// if last = ' ' accept the name, otherwise search has found the name and a '1' has been returned accordingly.
// a decline with message saying something like: 'This name already exists in the database' has been set up from jquery.
if ($fullName==' '){
	echo '0';
}else{echo '1';}
?>