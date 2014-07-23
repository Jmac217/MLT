<?php include 'connect.php';

// get session variable as id passed from setSession.php
session_start();
$id = $_SESSION['id'];

// select everything from row where id = session id
$query = mysql_query("SELECT * FROM loan WHERE id='$id'")or die(mysql_error());
$row = mysql_fetch_assoc($query);

// assign variables from $row
// name
$name = $row['first'].' '.$row['last'];

// dates
$acceptedDate = $row['acceptedDate'];
$appraisalOrderDate = $row['appraisalOrderDate'];
$appraisalReceiveDate = $row['appraisalReceiveDate'];
$titleOrderDate = $row['titleOrderDate'];
$titleReceiveDate = $row['titleReceiveDate'];
$closeDate = $row['closeDate'];
$lockDate = $row['lockDate'];
$expirationDate = $row['expirationDate'];

// comments
$appraisalComment = $row['appraisalComment'];
$titleComment = $row['titleComment'];
$lockComment = $row['lockComment'];

// booleans
$wasLoanAccepted = $row['wasLoanAccepted'];
$isGovMonitoring = $row['isGovMonitoring'];
$willBeRejected = $row['willBeRejected'];
$isAdverseAction = $row['isAdverseAction'];
$wasEarlyDisclosure = $row['wasEarlyDisclosure'];
$deliveredToHMDA = $row['deliveredToHMDA'];

// transform boolean answers to 'Yes' or 'No'

if ($wasLoanAccepted == 'true'){$wasLoanAccepted = 'Yes';}else{$wasLoanAccepted = 'No';}
if ($isGovMonitoring == 'true'){$isGovMonitoring = 'Yes';}else{$isGovMonitoring = 'No';}
if ($willBeRejected == 'true'){$willBeRejected = 'Yes';}else{$willBeRejected = 'No';}
if ($isAdverseAction == 'true'){$isAdverseAction = 'Yes';}else{$isAdverseAction = 'No';}
if ($wasEarlyDisclosure == 'true'){$wasEarlyDisclosure = 'Yes';}else{$wasEarlyDisclosure = 'No';}
if ($deliveredToHMDA == 'true'){$deliveredToHMDA = 'Yes';}else{$deliveredToHMDA = 'No';}

// don't think I need this debug thing.
//echo $name;

// HTML Skeleton
echo '
	<html>
		<head>
			<title>MLT Printable</title>
			<link rel="stylesheet" type="text/css" href="../css/printable.css"/>
		</head>
		<body>
		<span id="print">Click to Print</span>
			<div id="doc">
				<div id="header">
					<div id="info_acceptedDate">Approved: '.$acceptedDate.'</div>
					<div id="info_name">'.$name.'</div>
				</div>
				<div id="body">
					<div id="form">
						<div id="form_dates">
							<div id="form_acceptedDate">Approved: </div>
							<div id="form_appraisalOrderDate">Appraisal Ordered: </div>
							<div id="form_appraisalReceiveDate">Appraisal Received: </div>
							<div id="form_titleOrderDate">Title Ordered: </div>
							<div id="form_titleReceiveDate">Title Received: </div>
							<div id="form_closeDate">Closed: </div>
							<div id="form_lockDate">Locked: </div>
							<div id="form_expirationDate">Expiration Date: </div>
						</div>
						<div id="form_comments">
							<div id="form_appraisalComment">Appraisal Comments: </div>
							<div id="form_titleComment">Title Comments: </div>
							<div id="form_lockComment">Lock Comments: </div>
						</div>
						<div id="form_booleans">
							<div id="form_wasLoanAccepted">Was this loan approved?</div>
							<div id="form_isGovMonitoring">Is there HMDA Data / Government Monitoring? </div>
							<div id="form_willBeRejected">Will this loan be rejected in three days? </div>
							<div id="form_isAdverseAction">Is there any notice of adverse action? </div>
							<div id="form_wasEarlyDisclosure">Was early disclosure delivered? </div>
							<div id="form_deliveredToHMDA">Delivered to HMDA officer?</div>
						</div>
					</div>
					<div id="info">
						<div id="info_dates">
							<!--<div id="info_acceptedDate">'.$acceptedDate.'</div>-->
							<div id="info_appraisalOrderDate">'.$appraisalOrderDate.'</div>
							<div id="info_appraisalReceiveDate">'.$appraisalReceiveDate.'</div>
							<div id="info_titleOrderDate">'.$titleOrderDate.'</div>
							<div id="info_titleReceiveDate">'.$titleReceiveDate.'</div>
							<div id="info_closeDate">'.$closeDate.'</div>
							<div id="info_lockDate">'.$lockDate.'</div>
							<div id="info_expirationDate">'.$expirationDate.'</div>
						</div>
						<div id="info_comments">
							<div id="info_appraisalComment">'.$appraisalComment.'</div>
							<div id="info_titleComment">'.$titleComment.'</div>
							<div id="info_lockComment">'.$lockComment.'</div>
						</div>
						<div id="info_booleans">
							<div id="info_wasLoanAccepted">'.$wasLoanAccepted.'</div>
							<div id="info_isGovMonitoring">'.$isGovMonitoring.'</div>
							<div id="info_willBeRejected">'.$willBeRejected.'</div>
							<div id="info_isAdverseAction">'.$isAdverseAction.'</div>
							<div id="info_wasEarlyDisclosure">'.$wasEarlyDisclosure.'</div>
							<div id="info_deliveredToHMDA">'.$deliveredToHMDA.'</div>
						</div>
				</div>
				<div id="footer"></div>
			</div>
		</body>
		<script type="text/javascript" src="../js/jquery.js"></script>
		<script type="text/javascript" src="../js/print.js"></script>
	</html>
';
?>