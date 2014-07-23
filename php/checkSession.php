<?php include 'connect.php';

// this is just a debug script to check the session id number
// I'll probably leave this here in case something breaks

session_start();

echo $_SESSION['id'];

?>