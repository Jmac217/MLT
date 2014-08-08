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
			
				<!-- Customer Input -->
				
				<table id='customer_input'><!-- Table is a placeholder, finished will be transformed into spans, with css... well eventually xD-->
					<tr><td>Today's Date:</td><td colspan='2'><center><i><?php echo Date("m-d-Y"); ?></i></center></td></tr><!-- should grab date from db -> receivedDate -->
					<tr><td>Customer Name:</td>
							<td><input id='customerFirst' type='text' value='First Name' alt='First Name'></input></td>
							<td><input id='customerLast' type='text' value='Last Name' alt='Last Name'></input></td>
					</tr><tr>
							<td colspan='3'><span id='customerNameCheck'>&nbsp;</span></td>
					</tr>
				
					<!-- Checkboxes -->
					
					<!-- Conditionally Approved -->
					<tr id='conditionallyApproved'>
						<td>
							<span id='conditionallyApprovedTitle' class='title'>
								Conditionally Approved
							</span>
						</td>
						<td id='conditionallyApprovedInput' colspan='2'  class='input'>
							<div class='table_wrapper'>
								<span id='conditionallyApprovedCheckbox'  class='checkbox'>
									<input id='wasConditionallyApproved' type='checkbox' />
								</span>
								<span id='conditionallyApprovedFeedback'  class='feedback'>
									Yes/No
								</span>
								<a id='conditionallyApprovedEdit'  class='field_edit'>
									Edit
								</a>
								<span id='conditionallyApprovedDate'>
									<span id='conditionallyApprovedDateWrapper'  class='date_wrapper'>
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
									<span id='conditionallyApprovedDateInfo'  class='date_info'>
										<span id='conditionallyApprovedDateInfoDate'  class='date_return'></span>
										<a id='conditionallyApprovedDateInfoLink'  class='date_edit'>Edit</a>
									</span>
								</span>
							</div>
						</td>
					</tr>
					
					<!-- Appraisal Ordered -->
					<tr id='appraisalOrdered'>
						<td>
							<span id='appraisalOrderedTitle' class='title'>
								Appraisal Ordered
							</span>
						</td>
						<td id='appraisalOrderedInput' colspan='2' class='input'>
							<div class='table_wrapper'>
								<span id='appraisalOrderedCheckbox' class='checkbox'>
									<input id='wasAppraisalOrdered' type='checkbox' />
								</span>
								<span id='appraisalOrderedFeedback' class='feedback'>
									Yes/No
								</span>
								<a id='appraisalOrderedEdit' class='field_edit'>
									Edit
								</a>
								<span id='appraisalOrderedDate'>
									<span id='appraisalOrderedDateWrapper' class='date_wrapper'>
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
								</span>
								<span id='appraisalOrderedDateInfo' class='date_info'>
									<span id='appraisalOrderedDateInfoDate' class='date_return'></span>
									<a id='appraisalOrderedDateInfoLink' class='date_edit'>Edit</a>
								</span>
							</div>
						</td>
					</tr>
					
					<!-- Appraisal Ordered -->
					<tr id='appraisalApproved'>
						<td>
							<span id='appraisalApprovedTitle' class='title'>
								Appraisal Approved
							</span>
						</td>
						<td id='appraisalApprovedInput' colspan='2'>
								<div class='table_wrapper'>
								<span id='appraisalApprovedCheckbox' class='checkbox'>
									<input id='wasAppraisalApproved' type='checkbox' />
								</span>
								<span id='appraisalApprovedFeedback' class='feedback'>
									Yes/No
								</span>
								<a id='appraisalApprovedEdit' class='field_edit'>
									Edit
								</a>
								<span id='appraisalApprovedDate'>
									<span id='appraisalApprovedDateWrapper'  class='date_wrapper'>
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
								</span>
								<span id='appraisalApprovedDateInfo' class='date_info'>
									<span id='appraisalApprovedDateInfoDate'  class='date_return'></span>
									<a id='appraisalApprovedDateInfoLink'  class='date_edit'>Edit</a>
								</span>
							</div>
						</td>
					</tr>
					<!-- Appraisal Comment -->
					<tr>
						<td colspan='3'>
							<!--<input type='input' value='Appraisal Comments' id='appraisalComment' alt='Appraisal Comments' style='width:100%;' />-->
							<textarea id='appraisalComment' alt='Appraisal Comments'>Appraisal Comments</textarea>
						</td>
					</tr>

					<!-- Loan Status -->
					<!-- Three Checkboxes -->
					<tr id='loanStatus'>
						<td>
							<span id='loanStatusTitle' class='title'>
								Loan Status
							</span>
						</td>
						<td id='loanStatusInput' colspan='2'>
							<span id='loanStatusCheckbox'>
								<span class='radio'>Processing/Underwriting <input id='loanStatusProcessing' type='radio' /></span><br />
								<span class='radio'>Awaiting Response <input id='loanStatusApproved' type='radio' /></span><br />
								<span class='radio'>Closing Prep <input id='loanStatusClosing' type='radio' /></span><br />
							</span>
							<span id='loanStatusFeedback' class='feedback'>
								Yes/No
							</span>
							<a id='loanStatusEdit' class='field_edit'>
								Edit
							</a>
							<span id='loanStatusDate'>
								<span id='loanStatusDateWrapper' class='date_wrapper'>
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
							</span>
							<span id='loanStatusDateInfo'>
								<span id='loanStatusDateInfoDate' class='date_return'></span>
								<a id='loanStatusDateInfoLink' class='date_edit'>Edit</a>
							</span>
						</td>
					</tr>
					<!-- Loan Status Comment -->
					<tr>
						<td colspan='3'>
							<!--<input type='input' value='Loan Status Comments' id='loanStatusComment' alt='Loan Status Comments'  style='width:100%;' />-->
							<textarea id='loanStatusComment' alt='Loan Status Comments'>Loan Status Comments</textarea>
						</td>
					</tr>

					<!-- Title Work Ordered -->
					<!-- Three Checkboxes -->
					<tr id='titleOrdered'>
						<td>
							<span id='titleOrderedTitle' class='title'>
								Title Work Ordered
							</span>
						</td>
						<td id='titleOrderedInput' colspan='2' class='input'>
							<span id='titleOrderedCheckbox'>
								<span class='radio'>No <input id='titleOrderedNo' type='radio' /></span><br />
								<span class='radio'>By Bank <input id='titleOrderedBank' type='radio' /></span><br />
								<span class='radio'>By Realtor <input id='titleOrderedRealtor' type='radio' /></span><br />
							</span>
							<span id='titleOrderedFeedback' class='feedback'>
								Yes/No
							</span>
							<a id='titleOrderedEdit' class='field_edit'>
								Edit
							</a>
							<span id='titleOrderedDate'>
								<span id='titleOrderedDateWrapper' class='date_wrapper'>
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
							</span>
						<span id='titleOrderedDateInfo'>
							<span id='titleOrderedDateInfoDate' class='date_return'></span>
							<a id='titleOrderedDateInfoLink' class='date_edit'>Edit</a>
						</span>
					</tr>
					<!-- Title Comment -->
					<tr>
						<td colspan='3'>
							<!--<input type='input' value='Title Comments' id='titleComment' alt='Title Comments' style='width:100%;' />-->
							<textarea id='titleComment' alt='Title Comments'>Title Comments</textarea>
						</td>
					</tr>
					
					<!-- Title Work Approved -->
					<tr id='titleApproved'>
						<td>
							<span id='titleApprovedTitle' class='title'>
								Title Work Approved
							</span>
						</td>
						<td id='titleApprovedInput' colspan='2'>
							<div class='table_wrapper'>
								<span id='titleApprovedCheckbox' class='checkbox'>
									<input id='wasTitleApproved' type='checkbox' />
								</span>
								<span id='titleApprovedFeedback' class='feedback'>
									Yes/No
								</span>
								<a id='titleApprovedEdit' class='field_edit'>
									Edit
								</a>
								<span id='titleApprovedDate'>
									<span id='titleApprovedDateWrapper' class='date_wrapper'>
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
									</span>
								</span>
								<span id='titleApprovedDateInfo'>
									<span id='titleApprovedDateInfoDate' class='date_info'></span>
									<a id='titleApprovedDateInfoLink' class='date_edit'>Edit</a>
								</span>
							</div>
						</td>
					</tr>					

					<!-- Target Closing Date -->
					<!-- only a date -->
					<tr id='targetCloseDate'>
						<td>
							<span id='targetCloseDateTitle' class='title'>
								Target Closing Date
							</span>
						</td>
						<td id='targetCloseDateInput' colspan='2'>
							<div class='table_wrapper'>
								<span id='targetCloseDateWrapper' class='date_wrapper'>
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
								<span id='targetCloseDateInfo'>
									<span id='targetCloseDateInfoDate' class='date_info'></span>
									<a id='targetCloseDateInfoLink' class='date_edit'>Edit</a>
								</span>
							</div>
						</td>
					</tr>
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
