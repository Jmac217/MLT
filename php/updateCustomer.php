<?php include 'connect.php';

// this should look very similar to the submit page, but only with an update query instead of an insert.

//echo 'nothing here yet';

// declare name variables from POST

$id = $_POST['id'];

$first = $_POST['customerFirst'];
$last = $_POST['customerLast'];

// all dates get posted
$acceptedDate = $_POST['acceptedDate'];
$appraisalOrderDate = $_POST['appraisalOrderDate'];
$appraisalReceiveDate = $_POST['appraisalReceiveDate'];
$titleOrderDate = $_POST['titleOrderDate'];
$titleReceiveDate = $_POST['titleReceiveDate'];
$closeDate = $_POST['closeDate'];
$lockDate = $_POST['lockDate'];
$expirationDate = $_POST['expirationDate'];

// comments
$appraisalComment = addslashes($_POST['appraisalComment']);
$titleComment = addslashes($_POST['titleComment']);
$lockComment = addslashes($_POST['lockComment']);

// checkboxes
$monitor = $_POST['monitor'];
$loan = $_POST['loan'];
$adverse = $_POST['adverse'];
$rejected = $_POST['rejected'];
$delivered = $_POST['delivered'];
$disclosure = $_POST['disclosure'];


/*
 *
 * Since I hurried through the variable names I'll translate them here...
 * 	 (It would be best to go back through and rename everything...)
 *
 *	monitor 	 ->  isGovMonitoring
 *	loan 			 ->  wasLoanAccepted
 *	adverse    ->  isAdverseAction
 *	rejected	 ->  willBeRejected
 *	delivered  ->  deliveredToHMDA
 *	disclosure ->  wasEarlyDisclosure
 *
 */
 
 /* IMPORTANT */
 // before any of the dates can be stored, they must be conditionaly met with: if true update, else skip them.
 // for now, until I find a better way, I'm going to send everything but the dates to the db.
 // -- after that conditionals will be given to each date and it will decide whether, or not, to update the date.
 // ** This is slow and inefficient, but time matters. This is a definitely poorly written function. This would be a good spot to come back to.

// query -> insert values into db.loan
//$query = mysql_query("INSERT INTO loan (first,last,isGovMonitoring,wasLoanAccepted,isAdverseAction,willBeRejected,deliveredToHMDA,wasEarlyDisclosure) VALUES('$first','$last','$monitor','$loan','$adverse','$rejected','$delivered','$disclosure')") or die(mysql_error());// plus a bunch of dates
//$query = mysql_query("INSERT INTO loan (first,last,acceptedDate,appraisalOrderDate,appraisalReceiveDate,titleOrderDate,titleReceiveDate,closeDate,lockDate,expirationDate,isGovMonitoring,wasLoanAccepted,isAdverseAction,willBeRejected,deliveredToHMDA,wasEarlyDisclosure,lockComment,titleComment,appraisalComment) VALUES('$first','$last','$acceptedDate','$appraisalOrderDate','$appraisalReceiveDate','$titleOrderDate','$titleReceiveDate','$closeDate','$lockDate','$expirationDate','$monitor','$loan','$adverse','$rejected','$delivered','$disclosure','$lockComment','$titleComment','$appraisalComment')") or die('1');// plus a bunch of dates
$query = mysql_query("UPDATE loan SET first='$first',last='$last',isGovMonitoring='$monitor',wasLoanAccepted='$loan',isAdverseAction='$adverse',willBeRejected='$rejected',deliveredToHMDA='$delivered',wasEarlyDisclosure='$disclosure',acceptedDate='$acceptedDate',appraisalOrderDate='$appraisalOrderDate',appraisalReceiveDate='$appraisalReceiveDate',titleOrderDate='$titleOrderDate',titleReceiveDate='$titleReceiveDate',closeDate='$closeDate',lockDate='$lockDate',expirationDate='$expirationDate',lockComment='$lockComment',titleComment='$titleComment',appraisalComment='$appraisalComment' WHERE id='$id'")or die(mysql_error());
echo '0';

?>