<!DOCTYPE HTML>
<!--[if lt IE 7 ]> <html class="ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--> <html lang="en"> <!--<![endif]-->
<!--<html>-->
	<head>
		<title>Mortgage Loan Tracker</title>
		<!--<link rel='stylesheet' type='text/css' href='css/index.css' />-->
		<link rel='stylesheet' type='text/css' href='css/minimal.css' />
		<link rel='shortcut icon' href='res/favicon.png' />
	</head>
	<body>
	<center>
		<div id='header'>
			<span id='headerText'>Mortgage Loans Tracker</span>
			<span id='version'>Beta 1.2</span>
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
				<br />
				<br />
				
				<!-- Checkboxes -->
				
				<!-- Loan Accepted is being replaced by Conditionally Approved -->
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
					<div id='conditionallyApprovedDate'>
						<span id='conditionallyApprovedDateTitle'>Conditionally Approved : </span>
						<span id='conditionallyApprovedDateWrapper'>
						<select id ='conditionallyApprovedMonth' name="month">
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
						<select id='conditionallyApprovedDay' name="day">
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
						<select id='conditionallyApprovedYear' name="year">
							<option value="2014">2014
							<option value="2015">2015
						</select>
						</span>
					</div>
					<span id='conditionallyApprovedDateInfo'><span id='conditionallyApprovedDateInfoDate'></span><a id='conditionallyApprovedDateInfoLink'>Edit</a></span>
				</span>
				
				<!-- Appraisal Ordered -->
				<span id='appraisalOrdered'>
					Appraisal Ordered
					<span id='appraisalOrderedCheckbox'>
						Yes <input id='wasAppraisalOrdered' type='checkbox' />
					</span>
				</span>
				<span id='appraisalOrderedAnswer'>
					<span id='appraisalOrderedAnswerBool'>
						Yes/No
					</span>
					<span id='appraisalOrderedAnswerEdit'>
						Edit
					</span>
					<!-- Appraisal Ordered Date -->
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
					</div>
					<span id='appraisalOrderedDateInfo'><span id='appraisalOrderedDateInfoDate'></span><a id='appraisalOrderedDateInfoLink'>Edit</a></span>
				</span>
				
				<!-- Appraisal Ordered -->
				<span id='appraisalApproved'>
					Appraisal Approved
					<span id='appraisalApprovedCheckbox'>
						Yes <input id='wasAppraisalApproved' type='checkbox' />
					</span>
				</span>
				<span id='appraisalApprovedAnswer'>
					<span id='appraisalApprovedAnswerBool'>
						Yes/No
					</span>
					<span id='appraisalApprovedAnswerEdit'>
						Edit
					</span>
					<!-- Appraisal Approved Date -->
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
						<input type='input' value='Appraisal Comments' id='appraisalComment' alt='Appraisal Comments'></input>
					</div>
					<span id='appraisalApprovedDateInfo'><span id='appraisalApprovedDateInfoDate'></span><a id='appraisalApprovedDateInfoLink'>Edit</a></span>		
				</span>

				<span id='loanStatus'>
					Loan Status : 
					<span id='loanStatusCheckbox'>
						Processing/Underwriting <input id='loanStatusProcessing' type='radio' />
						Awaiting Response <input id='loanStatusApproved' type='radio' />
						Closing Prep <input id='loanStatusClosing' type='radio' />
					</span>
				</span>
				<span id='loanStatusAnswer'>
					<span id='loanStatusAnswerYesNo'>
						Yes/No
					</span>
					<span id='loanStatusAnswerEdit'>
						Edit
					</span>
					<div id='loanStatusDate'>
						<span id='loanStatusDateTitle'>Loan Status : </span>
						<span id='loanStatusDateWrapper'>
						<select id ='loanStatusMonth' name="month">
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
						<select id='loanStatusDay' name="day">
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
						<select id='loanStatusYear' name="year">
							<option value="2014">2014
							<option value="2015">2015
						</select>
						</span>
						<input type='input' value='Loan Status Comments' id='loanStatusComment' alt='Loan Status Comments'></input>
					</div>
					<span id='loanStatusDateInfo'><span id='loanStatusDateInfoDate'></span><a id='loanStatusDateInfoLink'>Edit</a></span>
				</span>

				<!-- this form is special, it requires 3 selectors -->
				<!-- Title Work Ordered -->
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
					<div id='titleOrderedDate'>
						<span id='titleOrderedDateTitle'>Title Work Ordered : </span>
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
						<input type='input' value='Title Comments' id='titleComment' alt='Title Comments'></input>
					</div>
					<span id='titleOrderedDateInfo'><span id='titleOrderedDateInfoDate'></span><a id='titleOrderedDateInfoLink'>Edit</a></span>
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
					<div id='titleApprovedDate'>
						<span id='titleApprovedDateTitle'>Title Work Approved : </span>
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
				</span>					
				<br />
				<br />
				<table>								
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
