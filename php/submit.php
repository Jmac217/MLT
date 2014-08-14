<?php include 'connect.php';

// die('1') has been set up as an abstraction to any problems a user may experience during their query.

// connect to db
/*
$connect = mysql_connect('localhost','root','')or die('1');
$db = mysql_select_db('mlt')or die('1');
*/

// test connection - debug
// -- go through and replace the die('1') statements with mysql_error() to diagnose problems.
/*
if ($db = 1){echo 'connected to DB';
}else{echo 'connection failed.';}
*/

// declare variables from POST
//session_start();
//$id = $_SESSION['id'];
$first=$_POST['first'];
$last=$_POST['last'];
//$receiveDate=date('Y-m-d');
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

// query -> insert values into db.loan
//$query = mysql_query("INSERT INTO loan (first,last,isGovMonitoring,wasLoanAccepted,isAdverseAction,willBeRejected,deliveredToHMDA,wasEarlyDisclosure) VALUES('$first','$last','$monitor','$loan','$adverse','$rejected','$delivered','$disclosure')") or die(mysql_error());// plus a bunch of dates
$query = mysql_query("INSERT INTO customers (first,last,receiveDate,acceptedDate,appraisalOrderDate,appraisalReceiveDate,titleOrderDate,titleReceiveDate,closeDate,lockDate,expirationDate,isGovMonitoring,wasLoanAccepted,isAdverseAction,willBeRejected,deliveredToHMDA,wasEarlyDisclosure,lockComment,titleComment,appraisalComment) VALUES('$first','$last','$receiveDate','$acceptedDate','$appraisalOrderDate','$appraisalReceiveDate','$titleOrderDate','$titleReceiveDate','$closeDate','$lockDate','$expirationDate','$monitor','$loan','$adverse','$rejected','$delivered','$disclosure','$lockComment','$titleComment','$appraisalComment')") or die('1');// plus a bunch of dates
echo '0';
?>
