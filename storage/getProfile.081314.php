<?php include 'connect.php';

// getProfile will pull down everything in the database from the selected id
// once everything is retrieved and stored in variables, the strings will be concatenated into XML and passed back to jQuery for displacement.

$id = $_POST['id'];

$query = mysql_query("SELECT * FROM customers WHERE id='$id'")or die(mysql_error());
$row = mysql_fetch_assoc($query);

$first = $row['first'];
$last = $row['last'];
$acceptedDate = $row['acceptedDate'];
$appraisalOrderDate = $row['appraisalOrderDate'];
$appraisalReceiveDate = $row['appraisalReceiveDate'];
$titleOrderDate = $row['titleOrderDate'];
$titleReceiveDate = $row['titleReceiveDate'];
$closeDate = $row['closeDate'];
$lockDate = $row['lockDate'];
$expirationDate = $row['expirationDate'];
$appraisalComment = $row['appraisalComment'];
$titleComment = $row['titleComment'];
$lockComment = $row['lockComment'];
$wasLoanAccepted = $row['wasLoanAccepted'];
$isGovMonitoring = $row['isGovMonitoring'];
$willBeRejected = $row['willBeRejected'];
$isAdverseAction = $row['isAdverseAction'];
$wasEarlyDisclosure = $row['wasEarlyDisclosure'];
$deliveredToHMDA = $row['deliveredToHMDA'];

// set dates of '0000-00-00' to N/A or something like that
$default = 'N/A';
if ($acceptedDate == '0000-00-00'){$acceptedDate = $default;}
if ($appraisalOrderDate == '0000-00-00'){$appraisalOrderDate = $default;}
if ($appraisalReceiveDate == '0000-00-00'){$appraisalReceiveDate = $default;}
if ($titleOrderDate == '0000-00-00'){$titleOrderDate = $default;}
if ($titleReceiveDate == '0000-00-00'){$titleReceiveDate = $default;}
if ($closeDate == '0000-00-00'){$closeDate = $default;}
if ($lockDate == '0000-00-00'){$lockDate = $default;}
if ($expirationDate == '0000-00-00'){$expirationDate = $default;}

// start xml

echo $xml = '
	<xml>
		<first>'.$first.'</first>
		<last>'.$last.'</last>
		<acceptedDate>'.$acceptedDate.'</acceptedDate>
		<appraisalOrderDate>'.$appraisalOrderDate.'</appraisalOrderDate>
		<appraisalReceiveDate>'.$appraisalReceiveDate.'</appraisalReceiveDate>
		<titleOrderDate>'.$titleOrderDate.'</titleOrderDate>
		<titleReceiveDate>'.$titleReceiveDate.'</titleReceiveDate>
		<closeDate>'.$closeDate.'</closeDate>
		<lockDate>'.$lockDate.'</lockDate>
		<expirationDate>'.$expirationDate.'</expirationDate>
		<appraisalComment>'.$appraisalComment.'</appraisalComment>
		<titleComment>'.$titleComment.'</titleComment>
		<lockComment>'.$lockComment.'</lockComment>
		<wasLoanAccepted>'.$wasLoanAccepted.'</wasLoanAccepted>
		<isGovMonitoring>'.$isGovMonitoring.'</isGovMonitoring>
		<willBeRejected>'.$willBeRejected.'</willBeRejected>
		<isAdverseAction>'.$isAdverseAction.'</isAdverseAction>
		<wasEarlyDisclosure>'.$wasEarlyDisclosure.'</wasEarlyDisclosure>
		<deliveredToHMDA>'.$deliveredToHMDA.'</deliveredToHMDA>
	</xml>
';


?>
