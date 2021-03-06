<html>
<head>
<link rel="stylesheet" type="text/css" href="css/printable.css"/>
<script type='text/javascript' src='js/jquery.js'></script>
<script type='text/javascript' src='js/jspdf.js'></script>
<script type='text/javascript' src='js/jspdf.plugin.standard_fonts_metrics.js'></script>
<script type='text/javascript' src='js/jspdf.plugin.split_text_to_size.js'></script>
<script type='text/javascript' src='js/jspdf.plugin.from_html.js'></script>
<script type="text/javascript" src="js/print.js"></script>
<script type='text/javascript'>
function demoFromHTML() {
         var doc = new jsPDF('p', 'in', 'letter');
         var source = $('#testcase').first();
         var specialElementHandlers = {
             '#bypassme': function(element, renderer) {
                 return true;
             }
         };

         doc.fromHTML(
            $('#testcase').get(0), // [Refer Exact code tutorial][2]HTML string or DOM elem ref.
             0.5,    // x coord
             0.5,    // y coord
             {
                 'width': 7.5, // max width of content on PDF
                 'elementHandlers': specialElementHandlers
             });

         doc.output('dataurl');
    }
</script>
</head>
<body>
<a href="javascript:demoFromHTML()" class="button">Run Code</a>
<div id="testcase">
<?php
include 'php/connect.php';
// get session variable as id passed from setSession.php
session_start();
//$id = $_SESSION['id'];
$id = '1';

// select everything from row where id = session id
$query = mysql_query("SELECT * FROM customers WHERE id='$id'")or die(mysql_error());
$row = mysql_fetch_assoc($query);

// name
$full_name = $row['first'].' '.$row['last'];

// booleans
$conditionally_approved = $row['conditionally_approved'];
$appraisal_ordered = $row['appraisal_ordered'];
$appraisal_approved = $row['appraisal_approved'];
$loan_status = $row['loan_status'];
$title_work_ordered = $row['title_work_ordered'];
$title_work_approved = $row['title_work_approved'];

$conditionally_approved = ($conditionally_approved == "true") ? "yes": "no";
$appraisal_ordered = ($appraisal_ordered == "true") ? "yes": "no";
$appraisal_approved = ($appraisal_approved == "true") ? "yes": "no";
$loan_status = ($loan_status == "true") ? "yes": "no";
$title_work_ordered = ($title_work_ordered == "true") ? "yes": "no";
$title_work_approved = ($title_work_approved == "true") ? "yes": "no";

// comments
$appraisal_comments = $row['appraisal_comments'];
$loan_status_comments = $row['loan_status_comments'];
$title_comments = $row['title_comments'];

// dates
$conditionally_approved_date = $row['conditionally_approved_date'];
$appraisal_ordered_date = $row['appraisal_ordered_date'];
$appraisal_approved_date = $row['appraisal_approved_date'];
$title_work_ordered_date = $row['title_work_ordered_date'];
$title_work_approved_date = $row['title_work_approved_date'];
$target_closing_date = $row['target_closing_date'];
echo '
	<table>
		<tr>
			<td class="title">Customer Name: </td>
			<td colspan="2">'.$full_name.'</td>
		</tr>
		<tr>
			<td class="title">Conditionally Approved: </td>
			<td class="boolean">'.$conditionally_approved.'</td>
			<td>'.$conditionally_approved_date.'</td>
		</tr>
		<tr>
			<td class="title">Appraisal Ordered: </td>
			<td class="boolean">'.$appraisal_ordered.'</td>
			<td>'.$appraisal_ordered_date.'</td>
		</tr>
		<tr>
			<td class="title">Appraisal Approved: </td>
			<td class="boolean">'.$appraisal_approved.'</td>
			<td>'.$appraisal_approved_date.'</td>
		</tr>
		<tr>
			<td class="header">Appraisal Comments: </td>
		</tr>
		<tr>
			<td colspan="3" class="comment">'.$appraisal_comments.'</td>
		</tr>
		<tr>
			<td class="title">Loan Status: </td>
			<td colspan="2">'.$loan_status.'</td>
		</tr>
		<tr>
			<td class="header">Loan Comments: </td>
		</tr>
		<tr>
			<td colspan="3" class="comment">'.$loan_status_comments.'</td>
		</tr>
		<tr>
			<td class="title">Title Work Ordered: </td>
			<td class="boolean">'.$title_work_ordered.'</td>
			<td>'.$title_work_ordered_date.'</td>
		</tr>
		<tr>
			<td class="title">Title Work Approved: </td>
			<td class="boolean">'.$title_work_approved.'</td>
			<td>'.$title_work_approved_date.'</td>
		</tr>
		<tr>
			<td class="header">Title Comments: </td>
		</tr>
		<tr>
			<td colspan="3" class="comment">'.$title_comments.'</td>
		</tr>
		<tr>
			<td class="title">Target Closing Date: </td>
			<td>&nbsp;</td>
			<td>'.$target_closing_date.'</td>
		</tr>
	</table>
';
?>
</div>
</body>
</html>