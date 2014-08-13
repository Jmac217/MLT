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
$first=$_POST['customerFirst'];
$last=$_POST['customerLast'];
$receiveDate=date('Y-m-d');
$acceptedDate=$_POST['acceptedDate'];
$appraisalOrderDate=$_POST['appraisalOrderDate'];
$appraisalReceiveDate=$_POST['appraisalReceiveDate'];
$titleOrderDate=$_POST['titleOrderDate'];
$titleReceiveDate=$_POST['titleReceiveDate'];
$closeDate=$_POST['closeDate'];
$lockDate=$_POST['lockDate'];
$expirationDate=$_POST['expirationDate'];
$appraisalComment=addslashes($_POST['appraisalComment']);
$titleComment=addslashes($_POST['titleComment']);
$lockComment=addslashes($_POST['lockComment']);
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

// query -> insert values into db.loan
//$query = mysql_query("INSERT INTO loan (first,last,isGovMonitoring,wasLoanAccepted,isAdverseAction,willBeRejected,deliveredToHMDA,wasEarlyDisclosure) VALUES('$first','$last','$monitor','$loan','$adverse','$rejected','$delivered','$disclosure')") or die(mysql_error());// plus a bunch of dates
$query = mysql_query("INSERT INTO customers (first,last,receiveDate,acceptedDate,appraisalOrderDate,appraisalReceiveDate,titleOrderDate,titleReceiveDate,closeDate,lockDate,expirationDate,isGovMonitoring,wasLoanAccepted,isAdverseAction,willBeRejected,deliveredToHMDA,wasEarlyDisclosure,lockComment,titleComment,appraisalComment) VALUES('$first','$last','$receiveDate','$acceptedDate','$appraisalOrderDate','$appraisalReceiveDate','$titleOrderDate','$titleReceiveDate','$closeDate','$lockDate','$expirationDate','$monitor','$loan','$adverse','$rejected','$delivered','$disclosure','$lockComment','$titleComment','$appraisalComment')") or die('1');// plus a bunch of dates
echo '0';
?>
