<?php
include 'connect.php';

if ((isset($_POST['user'])&&isset($_POST['pass']))&&($_POST['user']!=='Username')||($_POST['pass']!=='Password')){
	$user = $_POST['user'];
	$pass = $_POST['pass'];
	$sql = mysql_query("SELECT * FROM users WHERE user='$user' and pass='$pass'") or die(mysql_error()); // check database for username
	$sql = mysql_fetch_assoc($sql);
	if(!isset($sql['user'])){die("user not set");}
	if(!isset($sql['pass'])){die("pass not set");}
	session_start();
	$_SESSION['user'] = $sql['user'];
	echo '0';
}else{
	die('Please enter a Username and a Password');
}
?>