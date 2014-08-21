<?php include 'connect.php';

// id is provided by the session. $_SESSION['id'] is set when #send_request or .customer is selected
session_start();
$id = $_SESSION['id'];

// declare variables from POST
$request_type=$_POST['request_type'];
$first=$_POST['first'];
$last=$_POST['last'];
$conditionally_approved=$_POST['conditionally_approved'];
$conditionally_approved_date=$_POST['conditionally_approved_date'];
$appraisal_ordered=$_POST['appraisal_ordered'];
$appraisal_ordered_date=$_POST['appraisal_ordered_date'];
$appraisal_approved=$_POST['appraisal_approved'];
$appraisal_approved_date=$_POST['appraisal_approved_date'];
$appraisal_comments=$_POST['appraisal_comments'];
$loan_status=$_POST['loan_status'];
$loan_status_comments=addslashes($_POST['loan_status_comments']);
$title_work_ordered=addslashes($_POST['title_work_ordered']);
$title_work_ordered_date=addslashes($_POST['title_work_ordered_date']);
$title_work_approved = $_POST['title_work_approved'];
$title_work_approved_date = $_POST['title_work_approved_date'];
$title_comments = $_POST['title_comments'];
$target_closing_date = $_POST['target_closing_date'];

echo $title_work_ordered.' '.$loan_status;

// The difference between Add and Update are switched here via $_POST; probably not the best way to handle things, especially looking at the post request from index.js, but it works for now.
if($request_type=='Add'){
	// insert
	$query = mysql_query("INSERT INTO customers (first,last,conditionally_approved,conditionally_approved_date,appraisal_ordered,appraisal_ordered_date,appraisal_approved,appraisal_approved_date,appraisal_comments,loan_status,loan_status_comments,title_work_ordered,title_work_ordered_date,title_work_approved,title_work_approved_date,title_comments,target_closing_date) VALUES('$first','$last','$conditionally_approved','$conditionally_approved_date','$appraisal_ordered','$appraisal_ordered_date','$appraisal_approved','$appraisal_approved_date','$appraisal_comments','$loan_status','$loan_status_comments','$title_work_ordered','$title_work_ordered_date','$title_work_approved','$title_work_approved_date','$title_comments','$target_closing_date')") or die(mysql_error());// plus a bunch of dates
	echo '0';
}else if($request_type=='Update'){
	// update
	$query = mysql_query("UPDATE customers SET first='$first',last='$last',conditionally_approved='$conditionally_approved',conditionally_approved_date='$conditionally_approved_date',appraisal_ordered='$appraisal_ordered',appraisal_ordered_date='$appraisal_ordered_date',appraisal_approved='$appraisal_approved',appraisal_approved_date='$appraisal_approved_date',appraisal_comments='$appraisal_comments',loan_status='$loan_status',loan_status_comments='$loan_status_comments',title_work_ordered='$title_work_ordered',title_work_ordered_date='$title_work_ordered_date',title_work_approved='$title_work_approved',title_work_approved_date='$title_work_approved_date',title_comments='$title_comments',target_closing_date='$target_closing_date' WHERE id='$id'") or die(mysql_error());// plus a bunch of dates
	echo '0';
}else{
	die('Request Error');
}
?>
