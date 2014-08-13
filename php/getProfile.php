<?php include 'connect.php';

// getProfile will pull down everything in the database from the selected id
// once everything is retrieved and stored in variables, the strings will be concatenated into XML and passed back to jQuery for displacement.

$id = $_POST['id'];

$query = mysql_query("SELECT * FROM customers WHERE id='$id'")or die(mysql_error());
$row = mysql_fetch_assoc($query);

$first = $row['first'];
$last = $row['last'];
$conditionally_approved = $row['conditionally_approved'];
$conditionally_approved_date = $row['conditionally_approved_date'];
$appraisal_ordered = $row['appraisal_ordered'];
$appraisal_ordered_date = $row['appraisal_ordered_date'];
$appraisal_approved = $row['appraisal_approved'];
$appraisal_approved_date = $row['appraisal_approved_date'];
$appraisal_comments = $row['appraisal_comments'];
$loan_status = $row['loan_status'];
$loan_status_comments = $row['loan_status_comments'];
$title_work_ordered = $row['title_work_ordered'];
$title_work_ordered_date = $row['title_work_ordered_date'];
$title_work_approved = $row['title_work_approved'];
$title_work_approved_date = $row['title_work_approved_date'];
$title_comments = $row['title_comments'];
$target_closing_date = $row['target_closing_date'];

// This might be done away with, but for now the default date will be displayed as 'N/A' if '0000-00-00' is displayed in the database.
$default = 'N/A';
if ($conditionally_approved_date == '0000-00-00'){$conditionally_approved_date = $default;}
if ($appraisal_ordered_date == '0000-00-00'){$appraisal_ordered_date = $default;}
if ($appraisal_approved_date == '0000-00-00'){$appraisal_approved_date = $default;}
if ($title_work_ordered_date == '0000-00-00'){$title_work_ordered_date = $default;}
if ($title_work_approved_date == '0000-00-00'){$title_work_approved_date = $default;}
if ($target_closing_date == '0000-00-00'){$target_closing_date = $default;}

// start xml

echo $xml = '
	<xml>
		<first>'.$first.'</first>
		<last>'.$last.'</last>
		<conditionally_approved>'.$conditionally_approved.'</conditionally_approved>
		<conditionally_approved_date>'.$conditionally_approved_date.'</conditionally_approved_date>
		<appraisal_ordered>'.$appraisal_ordered.'</appraisal_ordered>
		<appraisal_ordered_date>'.$appraisal_ordered_date.'</appraisal_ordered_date>
		<appraisal_approved>'.$appraisal_approved.'</appraisal_approved>
		<appraisal_approved_date>'.$appraisal_approved_date.'</appraisal_approved_date>
		<appraisal_comments>'.$appraisal_comments.'</appraisal_comments>
		<loan_status>'.$loan_status.'</loan_status>
		<loan_status_comments>'.$loan_status_comments.'</loan_status_comments>
		<title_work_ordered>'.$title_work_ordered.'</title_work_ordered>
		<title_work_ordered_date>'.$title_work_ordered_date.'</title_work_ordered_date>
		<title_work_approved>'.$title_work_approved.'</title_work_approved>
		<title_work_approved_date>'.$title_work_approved_date.'</title_work_approved_date>
		<title_comments>'.$title_comments.'</title_comments>
		<target_closing_date>'.$target_closing_date.'</target_closing_date>
	</xml>
';


?>
