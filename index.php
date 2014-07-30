<!DOCTYPE HTML>
<!--[if lt IE 7 ]> <html class="ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--> <html lang="en"> <!--<![endif]-->
<!--<html>-->
	<head>
		<title>Mortgage Loan Tracker</title>
		<link rel='stylesheet' type='text/css' href='css/index.css' />
		<link rel='shortcut icon' href='res/favicon.png' />
	</head>
	<body>
	<center>
		<div id='header'>
			<span id='headerText'>Mortgage Loans Tracker</span>
			<span id='version'>Beta 1.1</span>
		</div>
		<div id='body'>
			<div id='doc'>
			
				<table id='customer_input'><!-- Table is a placeholder, finished will be transformed into spans, with css... well eventually xD-->
					<tr><td>Today's Date:</td><td colspan='2'><center><i><?php echo Date("m-d-Y"); ?></i></center></td></tr><!-- should grab date from db -> receivedDate -->
					<tr><td>Customer Name:</td>
							<td><input id='customerFirst' type='text' value='First Name' alt='First Name'></input></td>
							<td><input id='customerLast' type='text' value='Last Name' alt='Last Name'></input></td>
					</tr><tr>
							<td></td><td></td><td><span id='customerNameCheck'></span></td>
					</tr>
				</table>
				
				<br /><br />
				
				<!-- Checkboxes -->
				
				<!-- HMDA Data / Gov Monitoring -->
				<span id='govMonitoring'>
					HMDA Data / Government Monitoring?
					<span id='govMonitoringCheckbox'>
						<input id='isGovMonitoring' type='checkbox' />
					</span>
				</span>
				<span id='govMonitoringAnswer'>
					<span id='govMonitoringAnswerYesNo'>
						Yes/No
					</span>
					<span id='govMonitoringAnswerEdit'>
						Edit
					</span>
				</span>
				
				<!-- Loan Accepted -->
				<span id='loanAccepted'>
					Has this loan been approved?
					<span id='loanAcceptedCheckbox'>
						Yes <input id='wasLoanAcceptedYes' type='radio' />
						No <input id='wasLoanAcceptedNo' type='radio' />
					</span>
				</span>
				<span id='loanAcceptedAnswer'>
					<span id='loanAcceptedAnswerYesNo'>
						Yes/No
					</span>
					<span id='loanAcceptedAnswerEdit'>
						Edit
					</span>
				</span>
				
				<!-- Turned down in 3 days -->
				<span id='beRejected'>
					Will this loan be turned down in three days?
					<span id='beRejectedCheckbox'>
						Yes <input id='willBeRejectedYes' type='radio' />
						No <input id='willBeRejectedNo' type='radio' />
					</span>
				</span>
				<span id='beRejectedAnswer'>
					<span id='beRejectedAnswerYesNo'>
						Yes/No
					</span>
					<span id='beRejectedAnswerEdit'>
						Edit
					</span>
				</span>
				
				<!-- Notice of adverse action -->
				<span id='adverseAction'>
					Notice of adverse action
					<span id='adverseActionCheckbox'>
						Yes <input id='isAdverseActionYes' type='radio' />
						No <input id='isAdverseActionNo' type='radio' />
					</span>
				</span>
				<span id='adverseActionAnswer'>
					<span id='adverseActionAnswerYesNo'>
						Yes/No
					</span>
					<span id='adverseActionAnswerEdit'>
						Edit
					</span>
				</span>
				
				<!-- was early disclosure delivered -->
				<span id='earlyDisclosure'>
					Was early disclosure delivered
					<span id='earlyDisclosureCheckbox'>
						Yes <input id='wasEarlyDisclosureYes' type='radio' />
						No <input id='wasEarlyDisclosureNo' type='radio' />
					</span>
				</span>
				<span id='earlyDisclosureAnswer'>
					<span id='earlyDisclosureAnswerYesNo'>
						Yes/No
					</span>
					<span id='earlyDisclosureAnswerEdit'>
						Edit
					</span>
				</span>
				
				<!-- delivered to HMDA officer -->
				<span id='deliveredTo'>
					Delivered to HMDA officer
					<span id='deliveredToCheckbox'>
						<input id='deliveredToHMDA' type='checkbox' />
					</span>
				</span>
				<span id='deliveredToAnswer'>
					<span id='deliveredToAnswerYesNo'>
						Yes/No
					</span>
					<span id='deliveredToAnswerEdit'>
						Edit
					</span>
				</span>
				
				<!-- DISCONNECTED -- AN OUTLINE FOR RIGHT NOW -->
				
				<!-- Conditionally Approved -->
				<span id='conditionallyApproved'>
					Conditionally Approved
					<span id='conditionallyApprovedCheckbox'>
						Yes <input id='wasconditionallyApprovedYes' type='radio' />
						No <input id='wasconditionallyApprovedNo' type='radio' />
					</span>
				</span>
				<span id='conditionallyApprovedAnswer'>
					<span id='conditionallyApprovedAnswerYesNo'>
						Yes/No
					</span>
					<span id='conditionallyApprovedAnswerEdit'>
						Edit
					</span>
				</span>

				<br /><br />
				
				<table>
					<!-- These things aren't in order -->
					<div id='acceptedDate'>
						<span id='acceptedDateTitle'>Date Approved : </span>
						<span id='acceptedDateWrapper'>
						<select id ='acceptedMonth' name="month">
							<option value="01">January
							<option value="02">February
							<option value="03">March
							<option value="04">April
							<option value="05">May
							<option value="06">June
							<option value="07">July
							<option value="08">August
							<option value="09">September
							<option value="10">October
							<option value="11">November
							<option value="12">December
						</select>
						<select id='acceptedDay' name="day">
							<option value="01">1
							<option value="02">2
							<option value="03">3
							<option value="04">4
							<option value="05">5
							<option value="06">6
							<option value="07">7
							<option value="08">8
							<option value="09">9
							<option value="10">10
							<option value="11">11
							<option value="12">12
							<option value="13">13
							<option value="14">14
							<option value="15">15
							<option value="16">16
							<option value="17">17
							<option value="18">18
							<option value="19">19
							<option value="20">20
							<option value="21">21
							<option value="22">22
							<option value="23">23
							<option value="24">24
							<option value="25">25
							<option value="26">26
							<option value="27">27
							<option value="28">28
							<option value="29">29
							<option value="30">30
							<option value="31">31
						</select>
						<select id='acceptedYear' name="year">
							<option value="2014">2014
							<option value="2015">2015
						</select>
						</span><!-- date wrapper -->
					</div>
					<span id='acceptedDateInfo'><span id='acceptedDateInfoDate'></span><a id='acceptedDateInfoLink'>Edit</a></span>
					
						
					<div id='targetCloseDate'>
						<span id='targetCloseDateTitle'>Target Closing Date : </span>
						<span id='targetCloseDateWrapper'>
						<select id ='targetCloseMonth' name="month">
							<option value="01">January
							<option value="02">February
							<option value="03">March
							<option value="04">April
							<option value="05">May
							<option value="06">June
							<option value="07">July
							<option value="08">August
							<option value="09">September
							<option value="10">October
							<option value="11">November
							<option value="12">December
						</select>
						<select id='targetCloseDay' name="day">
							<option value="01">1
							<option value="02">2
							<option value="03">3
							<option value="04">4
							<option value="05">5
							<option value="06">6
							<option value="07">7
							<option value="08">8
							<option value="09">9
							<option value="10">10
							<option value="11">11
							<option value="12">12
							<option value="13">13
							<option value="14">14
							<option value="15">15
							<option value="16">16
							<option value="17">17
							<option value="18">18
							<option value="19">19
							<option value="20">20
							<option value="21">21
							<option value="22">22
							<option value="23">23
							<option value="24">24
							<option value="25">25
							<option value="26">26
							<option value="27">27
							<option value="28">28
							<option value="29">29
							<option value="30">30
							<option value="31">31
						</select>
						<select id='targetCloseYear' name="year">
							<option value="2014">2014
							<option value="2015">2015
						</select>
						</span>
					</div>
					<span id='targetCloseDateInfo'><span id='targetCloseDateInfoDate'></span><a id='targetCloseDateInfoLink'>Edit</a></span>
						
					<div id='lockDate'>
						<span id='lockDateTitle'>Lock Date : </span>
						<span id='lockDateWrapper'>
						<select id ='lockMonth' name="month">
							<option value="01">January
							<option value="02">February
							<option value="03">March
							<option value="04">April
							<option value="05">May
							<option value="06">June
							<option value="07">July
							<option value="08">August
							<option value="09">September
							<option value="10">October
							<option value="11">November
							<option value="12">December
						</select>
						<select id='lockDay' name="day">
							<option value="01">1
							<option value="02">2
							<option value="03">3
							<option value="04">4
							<option value="05">5
							<option value="06">6
							<option value="07">7
							<option value="08">8
							<option value="09">9
							<option value="10">10
							<option value="11">11
							<option value="12">12
							<option value="13">13
							<option value="14">14
							<option value="15">15
							<option value="16">16
							<option value="17">17
							<option value="18">18
							<option value="19">19
							<option value="20">20
							<option value="21">21
							<option value="22">22
							<option value="23">23
							<option value="24">24
							<option value="25">25
							<option value="26">26
							<option value="27">27
							<option value="28">28
							<option value="29">29
							<option value="30">30
							<option value="31">31
						</select>
						<select id='lockYear' name="year">
							<option value="2014">2014
							<option value="2015">2015
						</select>
						</span><!-- wrapper -->
						<input type='input' value='Lock Comments' id='lockComment' alt='Lock Comments'></input>
						
					</div>
					<span id='lockDateInfo'><span id='lockDateInfoDate'></span><a id='lockDateInfoLink'>Edit</a></span>
						
					<div id='expirationDate'>
						<span id='expirationDateTitle'> Expiration Date : </span>
						<span id='expirationDateWrapper'>
						<select id ='expirationMonth' name="month">
							<option value="01">January
							<option value="02">February
							<option value="03">March
							<option value="04">April
							<option value="05">May
							<option value="06">June
							<option value="07">July
							<option value="08">August
							<option value="09">September
							<option value="10">October
							<option value="11">November
							<option value="12">December
						</select>
						<select id='expirationDay' name="day">
							<option value="01">1
							<option value="02">2
							<option value="03">3
							<option value="04">4
							<option value="05">5
							<option value="06">6
							<option value="07">7
							<option value="08">8
							<option value="09">9
							<option value="10">10
							<option value="11">11
							<option value="12">12
							<option value="13">13
							<option value="14">14
							<option value="15">15
							<option value="16">16
							<option value="17">17
							<option value="18">18
							<option value="19">19
							<option value="20">20
							<option value="21">21
							<option value="22">22
							<option value="23">23
							<option value="24">24
							<option value="25">25
							<option value="26">26
							<option value="27">27
							<option value="28">28
							<option value="29">29
							<option value="30">30
							<option value="31">31
						</select>
						<select id='expirationYear' name="year">
							<option value="2014">2014
							<option value="2015">2015
						</select>
						</span>
					</div>
					<span id='expirationDateInfo'><span id='expirationDateInfoDate'></span><a id='expirationDateInfoLink'>Edit</a></span>

					<!-- Appraisal Received doesn't seem to be necessary with the addition of Appraisal Ordered and Appraisal Approved -->
					<!--
					<div id='appraisalReceiveDate'>
					  <span id='appraisalReceiveDateTitle'>Appraisal Date : </span>
						<span id='appraisalReceiveDateWrapper'>
						<select id ='appraisalReceiveMonth' name="month">
							<option value="01">January
							<option value="02">February
							<option value="03">March
							<option value="04">April
							<option value="05">May
							<option value="06">June
							<option value="07">July
							<option value="08">August
							<option value="09">September
							<option value="10">October
							<option value="11">November
							<option value="12">December
						</select>
						<select id='appraisalReceiveDay' name="day">
							<option value="01">1
							<option value="02">2
							<option value="03">3
							<option value="04">4
							<option value="05">5
							<option value="06">6
							<option value="07">7
							<option value="08">8
							<option value="09">9
							<option value="10">10
							<option value="11">11
							<option value="12">12
							<option value="13">13
							<option value="14">14
							<option value="15">15
							<option value="16">16
							<option value="17">17
							<option value="18">18
							<option value="19">19
							<option value="20">20
							<option value="21">21
							<option value="22">22
							<option value="23">23
							<option value="24">24
							<option value="25">25
							<option value="26">26
							<option value="27">27
							<option value="28">28
							<option value="29">29
							<option value="30">30
							<option value="31">31
						</select>
						<select id='appraisalReceiveYear' name="year">
							<option value="2014">2014
							<option value="2015">2015
						</select>
						</span>
					</div>
					<span id='appraisalReceiveDateInfo'><span id='appraisalReceiveDateInfoDate'></span><a id='appraisalReceiveDateInfoLink'>Edit</a></span>
					-->
					
					<div id='appraisalOrderedDate'>
					  <span id='appraisalOrderedDateTitle'>Appraisal Ordered : </span>
						<span id='appraisalOrderedDateWrapper'>
						<select id ='appraisalOrderedMonth' name="month">
							<option value="01">January
							<option value="02">February
							<option value="03">March
							<option value="04">April
							<option value="05">May
							<option value="06">June
							<option value="07">July
							<option value="08">August
							<option value="09">September
							<option value="10">October
							<option value="11">November
							<option value="12">December
						</select>
						<select id='appraisalOrderedDay' name="day">
							<option value="01">1
							<option value="02">2
							<option value="03">3
							<option value="04">4
							<option value="05">5
							<option value="06">6
							<option value="07">7
							<option value="08">8
							<option value="09">9
							<option value="10">10
							<option value="11">11
							<option value="12">12
							<option value="13">13
							<option value="14">14
							<option value="15">15
							<option value="16">16
							<option value="17">17
							<option value="18">18
							<option value="19">19
							<option value="20">20
							<option value="21">21
							<option value="22">22
							<option value="23">23
							<option value="24">24
							<option value="25">25
							<option value="26">26
							<option value="27">27
							<option value="28">28
							<option value="29">29
							<option value="30">30
							<option value="31">31
						</select>
						<select id='appraisalOrderedYear' name="year">
							<option value="2014">2014
							<option value="2015">2015
						</select>
						</span>
						<input type='input' value='Appraisal Ordered Comments' id='appraisalOrderedComment' alt='Appraisal Ordered Comments'></input>
					</div>
					<span id='appraisalOrderedDateInfo'><span id='appraisalOrderedDateInfoDate'></span><a id='appraisalOrderedDateInfoLink'>Edit</a></span>
					
					<!-- appraisal approved -->
					<div id='appraisalApprovedDate'>
					  <span id='appraisalApprovedDateTitle'>Appraisal Approved : </span>
						<span id='appraisalApprovedDateWrapper'>
						<select id ='appraisalApprovedMonth' name="month">
							<option value="01">January
							<option value="02">February
							<option value="03">March
							<option value="04">April
							<option value="05">May
							<option value="06">June
							<option value="07">July
							<option value="08">August
							<option value="09">September
							<option value="10">October
							<option value="11">November
							<option value="12">December
						</select>
						<select id='appraisalApprovedDay' name="day">
							<option value="01">1
							<option value="02">2
							<option value="03">3
							<option value="04">4
							<option value="05">5
							<option value="06">6
							<option value="07">7
							<option value="08">8
							<option value="09">9
							<option value="10">10
							<option value="11">11
							<option value="12">12
							<option value="13">13
							<option value="14">14
							<option value="15">15
							<option value="16">16
							<option value="17">17
							<option value="18">18
							<option value="19">19
							<option value="20">20
							<option value="21">21
							<option value="22">22
							<option value="23">23
							<option value="24">24
							<option value="25">25
							<option value="26">26
							<option value="27">27
							<option value="28">28
							<option value="29">29
							<option value="30">30
							<option value="31">31
						</select>
						<select id='appraisalApprovedYear' name="year">
							<option value="2014">2014
							<option value="2015">2015
						</select>
						</span>
						<input type='input' value='Appraisal Approved Comments' id='appraisalApprovedComment' alt='Appraisal Approved Comments'></input>
					</div>
					<span id='appraisalApprovedDateInfo'><span id='appraisalApprovedDateInfoDate'></span><a id='appraisalApprovedDateInfoLink'>Edit</a></span>					
					
					<!-- title work ordered -->
					<!-- this form is special, it requires 3 selectors -->
					<span id='titleOrdered'>
						Title Work Ordered
						<span id='titleOrderedCheckbox'>
							No <input id='titleOrderedNo' type='radio' />
							By Bank <input id='titleOrderedBank' type='radio' />
							By Realtor <input id='titleOrderedRealtor' type='radio' />
						</span>
					</span>
					<span id='titleOrderedAnswer'>
						<span id='titleOrderedAnswerYesNo'>
							Yes/No
						</span>
						<span id='titleOrderedAnswerEdit'>
							Edit
						</span>
					</span>
					
					<!-- Title Work Approved -->
					<span id='titleApproved'>
						Title Work Approved
						<span id='titleApprovedCheckbox'>
							Yes <input id='titleApprovedYes' type='radio' />
							No <input id='titleApprovedNo' type='radio' />
						</span>
					</span>
					<span id='titleApprovedAnswer'>
						<span id='titleApprovedAnswerYesNo'>
							Yes/No
						</span>
						<span id='titleApprovedAnswerEdit'>
							Edit
						</span>
					</span>
					
					<div id='titleOrderedDate'>
						<span id='titleOrderedDateTitle'>Title Ordered Date : </span>
						<span id='titleOrderedDateWrapper'>
						<select id ='titleOrderedMonth' name="month">
							<option value="01">January
							<option value="02">February
							<option value="03">March
							<option value="04">April
							<option value="05">May
							<option value="06">June
							<option value="07">July
							<option value="08">August
							<option value="09">September
							<option value="10">October
							<option value="11">November
							<option value="12">December
						</select>
						<select id='titleOrderedDay' name="day">
							<option value="01">1
							<option value="02">2
							<option value="03">3
							<option value="04">4
							<option value="05">5
							<option value="06">6
							<option value="07">7
							<option value="08">8
							<option value="09">9
							<option value="10">10
							<option value="11">11
							<option value="12">12
							<option value="13">13
							<option value="14">14
							<option value="15">15
							<option value="16">16
							<option value="17">17
							<option value="18">18
							<option value="19">19
							<option value="20">20
							<option value="21">21
							<option value="22">22
							<option value="23">23
							<option value="24">24
							<option value="25">25
							<option value="26">26
							<option value="27">27
							<option value="28">28
							<option value="29">29
							<option value="30">30
							<option value="31">31
						</select>
						<select id='titleOrderedYear' name="year">
							<option value="2014">2014
							<option value="2015">2015
						</select>
						</span>
						<input type='input' value='Title Ordered Comments' id='titleOrderedComment' alt='Title Ordered Comments'></input>
					</div>
					<span id='titleOrderedDateInfo'><span id='titleOrderedDateInfoDate'></span><a id='titleOrderedDateInfoLink'>Edit</a></span>
					

					<div id='titleApprovedDate'>
						<span id='titleApprovedDateTitle'>Title Approved Date : </span>
						<span id='titleApprovedDateWrapper'>
						<select id ='titleApprovedMonth' name="month">
							<option value="01">January
							<option value="02">February
							<option value="03">March
							<option value="04">April
							<option value="05">May
							<option value="06">June
							<option value="07">July
							<option value="08">August
							<option value="09">September
							<option value="10">October
							<option value="11">November
							<option value="12">December
						</select>
						<select id='titleApprovedDay' name="day">
							<option value="01">1
							<option value="02">2
							<option value="03">3
							<option value="04">4
							<option value="05">5
							<option value="06">6
							<option value="07">7
							<option value="08">8
							<option value="09">9
							<option value="10">10
							<option value="11">11
							<option value="12">12
							<option value="13">13
							<option value="14">14
							<option value="15">15
							<option value="16">16
							<option value="17">17
							<option value="18">18
							<option value="19">19
							<option value="20">20
							<option value="21">21
							<option value="22">22
							<option value="23">23
							<option value="24">24
							<option value="25">25
							<option value="26">26
							<option value="27">27
							<option value="28">28
							<option value="29">29
							<option value="30">30
							<option value="31">31
						</select>
						<select id='titleApprovedYear' name="year">
							<option value="2014">2014
							<option value="2015">2015
						</select>
					</div>
					<span id='titleApprovedDateInfo'><span id='titleApprovedDateInfoDate'></span><a id='titleApprovedDateInfoLink'>Edit</a></span>					
					
					
					<!-- probably not going to use this any more for reasons explained above -->
					<!--
					<div id='titleReceiveDate'>
						<span id='titleReceiveDateTitle'>Title Received Date : </span>
						<span id='titleReceiveDateWrapper'>
						<select id ='titleReceiveMonth' name="month">
							<option value="01">January
							<option value="02">February
							<option value="03">March
							<option value="04">April
							<option value="05">May
							<option value="06">June
							<option value="07">July
							<option value="08">August
							<option value="09">September
							<option value="10">October
							<option value="11">November
							<option value="12">December
						</select>
						<select id='titleReceiveDay' name="day">
							<option value="01">1
							<option value="02">2
							<option value="03">3
							<option value="04">4
							<option value="05">5
							<option value="06">6
							<option value="07">7
							<option value="08">8
							<option value="09">9
							<option value="10">10
							<option value="11">11
							<option value="12">12
							<option value="13">13
							<option value="14">14
							<option value="15">15
							<option value="16">16
							<option value="17">17
							<option value="18">18
							<option value="19">19
							<option value="20">20
							<option value="21">21
							<option value="22">22
							<option value="23">23
							<option value="24">24
							<option value="25">25
							<option value="26">26
							<option value="27">27
							<option value="28">28
							<option value="29">29
							<option value="30">30
							<option value="31">31
						</select>
						<select id='titleReceiveYear' name="year">
							<option value="2014">2014
							<option value="2015">2015
						</select>
					</div>
					<span id='titleReceiveDateInfo'><span id='titleReceiveDateInfoDate'></span><a id='titleReceiveDateInfoLink'>Edit</a></span>
					-->
					
					<!-- This may be used some time
					<div id='receiveDate'>
						<span id='receiveDateTitle'>Date Received : </span>
						<span id='receiveDateWrapper'>
						<select id ='receiveMonth' name="month">
							<option value="01">January
							<option value="02">February
							<option value="03">March
							<option value="04">April
							<option value="05">May
							<option value="06">June
							<option value="07">July
							<option value="08">August
							<option value="09">September
							<option value="10">October
							<option value="11">November
							<option value="12">December
						</select>
						<select id='receiveDay' name="day">
							<option value="01">1
							<option value="02">2
							<option value="03">3
							<option value="04">4
							<option value="05">5
							<option value="06">6
							<option value="07">7
							<option value="08">8
							<option value="09">9
							<option value="10">10
							<option value="11">11
							<option value="12">12
							<option value="13">13
							<option value="14">14
							<option value="15">15
							<option value="16">16
							<option value="17">17
							<option value="18">18
							<option value="19">19
							<option value="20">20
							<option value="21">21
							<option value="22">22
							<option value="23">23
							<option value="24">24
							<option value="25">25
							<option value="26">26
							<option value="27">27
							<option value="28">28
							<option value="29">29
							<option value="30">30
							<option value="31">31
						</select>
						<select id='receiveYear' name="year">
							<option value="2013">2013
						</select>
						</span>
					</div>
					<span id='receiveDateInfo'><span id='receiveDateInfoDate'></span><a id='receiveDateInfoLink'>Edit</a></span>
					-->
						
				</table>
				<div id='footer'>
					<div id='requestAlert'></div>
					<input id='sendRequest' type='button' value='Add' />
					<input id='updateRequest' type='button' value='Update' />
					<input id='cancelUpdate' type='button' value='Cancel' />
					<input id='printPreview' type='button' value ='Print Preview' />
				</div>
			</div>
		</div>
		<!--<div id='box'></div>-->
		<div id='dropdownFeedback' alt='0'></div>
		<?php include 'php/dropdown.php'; ?>
		<!--<div id='footer'></div>-->
		
		<?php include 'php/bug.php'; ?>

		<script type='text/javascript' src='js/jquery.js'></script>
		<script type='text/javascript' src='js/index.js'></script>
	</center>
	</body>
</html>
