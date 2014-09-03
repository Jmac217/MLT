<?php /*session_start(); if(!isset($_SESSION['user'])){header('Location:login.php');};*/ ?>
<!DOCTYPE HTML>
<!--[if lt IE 7 ]> <html class="ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--> <html lang="en"> <!--<![endif]-->
<!--<html>-->
<!--
	Mortgage Loan Tracker: An interactive mortgage loan form
	Copyright (C) 2014 Jordan Elder

	This program is free software; you can redistribute it and/or
	modify it under the terms of the GNU General Public License
	as published by the Free Software Foundation; either version 2
	of the License, or (at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.
	
	You should have received a copy of the GNU General Public License (see COPYING)
	along with this program; if not, write to the Free Software
	Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
-->
	<head>
		<title>Mortgage Loan Tracker</title>
		<link rel='stylesheet' type='text/css' href='css/minimal.css' /><!-- to be renamed to index.css at some point -->
		<link rel='shortcut icon' href='res/favicon.png' />
	</head>
	<body>
	<center>
		<div id='header'>
			<span id='header_text'>Mortgage Loans Tracker</span>
			<span id='version'>Beta 1.6</span>
			<span id='user'><?php /*echo $_SESSION['user'];*/ ?></span>
		</div>
		<div id='body'>
			<div id='doc'>
			
				<!-- Customer Input -->
				
				<table id='customer_input'>
					<tr><td>Today's Date:</td><td colspan='2'><center><i><?php echo Date("m-d-Y"); ?></i></center></td></tr>
					<tr><td>Customer Name:</td>
							<td><input id='first' type='text' value='First Name' alt='First Name' /></td>
							<td><input id='last' type='text' value='Last Name' alt='Last Name' /></td>
					</tr>
					<tr><td colspan='3'><span id='customer_name_check'>&nbsp;</span></td></tr>
				
					<!-- Checkboxes -->
					
					<!-- Conditionally Approved -->
					<tr id='conditionally_approved'>
						<td>
							<span id='conditionally_approved_title' class='title'>
								Conditionally Approved
							</span>
						</td>
						<td id='conditionally_approved_input' colspan='2'  class='input'>
							<div class='table_wrapper'>
								<span id='conditionally_approved_checkbox'  class='checkbox'>
									<input id='was_conditionally_approved' type='checkbox' class='checkbox'/>
								</span>
								<!-- these are unused and hidden, but still present, in every input block; to be used if necessary -->
								<span id='conditionally_approved_feedback'  class='feedback'>
									Yes/No
								</span>
								<a id='conditionally_approved_edit'  class='field_edit'>
									Edit
								</a>
								<span id='conditionally_approved_date' class='date'>
									<span id='conditionally_approved_date_wrapper'  class='date_wrapper'>
										<select id ='conditionally_approved_month' name="month">
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
										<select id='conditionally_approved_day' name="day">
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
										<select id='conditionally_approved_year' name="year">
											<option value="2014">2014
											<option value="2015">2015
										</select>
									</span>
									<span id='conditionally_approved_date_info'  class='date_info'>
										<span id='conditionally_approved_date_info_date'  class='date_return'></span>
										<a id='conditionally_approved_date_info_link'  class='date_edit'>Edit</a>
									</span>
								</span>
							</div>
						</td>
					</tr>
					
					<!-- Appraisal Ordered -->
					<tr id='appraisal_ordered'>
						<td>
							<span id='appraisal_ordered_title' class='title'>
								Appraisal Ordered
							</span>
						</td>
						<td id='appraisal_ordered_input' colspan='2' class='input'>
							<div class='table_wrapper'>
								<span id='appraisal_ordered_checkbox' class='checkbox'>
									<input id='was_appraisal_ordered' type='checkbox' />
								</span>
								<span id='appraisal_ordered_feedback' class='feedback'>
									Yes/No
								</span>
								<a id='appraisal_ordered_edit' class='field_edit'>
									Edit
								</a>
								<span id='appraisal_ordered_date' class='date'>
									<span id='appraisal_ordered_date_wrapper' class='date_wrapper'>
										<select id ='appraisal_ordered_month' name="month">
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
										<select id='appraisal_ordered_day' name="day">
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
										<select id='appraisal_ordered_year' name="year">
											<option value="2014">2014
											<option value="2015">2015
										</select>
									</span>
								</span>
								<span id='appraisal_ordered_date_info' class='date_info'>
									<span id='appraisal_ordered_date_info_date' class='date_return'></span>
									<a id='appraisal_ordered_date_info_link' class='date_edit'>Edit</a>
								</span>
							</div>
						</td>
					</tr>
					
					<!-- Appraisal Ordered -->
					<tr id='appraisal_approved'>
						<td>
							<span id='appraisal_approved_title' class='title'>
								Appraisal Approved
							</span>
						</td>
						<td id='appraisal_approved_input' colspan='2'>
								<div class='table_wrapper'>
								<span id='appraisal_approved_checkbox' class='checkbox'>
									<input id='was_appraisal_approved' type='checkbox' />
								</span>
								<span id='appraisal_approved_feedback' class='feedback'>
									Yes/No
								</span>
								<a id='appraisal_approved_edit' class='field_edit'>
									Edit
								</a>
								<span id='appraisal_approved_date' class='date'>
									<span id='appraisal_approved_date_wrapper'  class='date_wrapper'>
										<select id ='appraisal_approved_month' name="month">
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
										<select id='appraisal_approved_day' name="day">
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
										<select id='appraisal_approved_year' name="year">
											<option value="2014">2014
											<option value="2015">2015
										</select>
									</span>
								</span>
								<span id='appraisal_approved_date_info' class='date_info'>
									<span id='appraisal_approved_date_info_date'  class='date_return'></span>
									<a id='appraisal_approved_date_info_link'  class='date_edit'>Edit</a>
								</span>
							</div>
						</td>
					</tr>
					<!-- Appraisal Comment -->
					<tr>
						<td colspan='3'>
							<!--<input type='input' value='Appraisal Comments' id='appraisalComment' alt='Appraisal Comments' style='width:100%;' />-->
							<textarea id='appraisal_comments' default='Appraisal Comments' alt='Appraisal Comments'>Appraisal Comments</textarea>
						</td>
					</tr>

					<!-- Loan Status -->
					<!-- Three Checkboxes -->
					<!-- no date -->
					<tr id='loan_status'>
						<td>
							<span id='loan_status_title' class='title'>
								Loan Status
							</span>
						</td>
						<td id='loan_status_input' colspan='2'>
							<span id='loan_status_checkbox'>
								<span class='radio'>Processing/Underwriting <input id='loan_status_processing' type='radio' alt='processing-underwriting' /></span><br />
								<span class='radio'>Awaiting Response <input id='loan_status_approved' type='radio' alt='awaiting_response' /></span><br />
								<span class='radio'>Closing Prep <input id='loan_status_closing' type='radio' alt='closing_prep' /></span><br />
							</span>
							<span id='loan_status_feedback' class='feedback'>
								Yes/No
							</span>
							<a id='loan_status_edit' class='field_edit'>
								Edit
							</a>
							<span id='loan_status_date' class='date'>
								<span id='loan_status_date_wrapper' class='date_wrapper'>
									<select id ='loan_status_month' name="month">
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
									<select id='loan_status_day' name="day">
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
									<select id='loan_status_year' name="year">
										<option value="2014">2014
										<option value="2015">2015
									</select>
								</span>
							</span>
							<span id='loan_status_date_info'>
								<span id='loan_status_date_info_date' class='date_return'></span>
								<a id='loan_status_date_info_link' class='date_edit'>Edit</a>
							</span>
						</td>
					</tr>
					<!-- Loan Status Comment -->
					<tr>
						<td colspan='3'>
							<!--<input type='input' value='Loan Status Comments' id='loanStatusComment' alt='Loan Status Comments'  style='width:100%;' />-->
							<textarea id='loan_status_comments' default='Loan Status Comments' alt='Loan Status Comments'>Loan Status Comments</textarea>
						</td>
					</tr>

					<!-- Title Work Ordered -->
					<!-- Three Checkboxes -->
					<!-- has date -->
					<tr id='title_work_ordered'>
						<td>
							<span id='title_work_ordered_title' class='title'>
								Title Work Ordered
							</span>
						</td>
						<td id='title_work_ordered_input' colspan='2' class='input'>
							<span id='title_work_ordered_checkbox'>
								<span class='radio'>No <input id='title_work_ordered_no' type='radio' alt='no' /></span><br />
								<span class='radio'>By Bank <input id='title_work_ordered_bank' type='radio' alt='bank' /></span><br />
								<span class='radio'>By Realtor <input id='title_work_ordered_realtor' type='radio' alt='realtor' /></span><br />
							</span>
							<span id='title_work_ordered_feedback' class='feedback'>
								Yes/No
							</span>
							<a id='title_work_ordered_edit' class='field_edit'>
								Edit
							</a>
							<span id='title_work_ordered_date' class='date'>
								<span id='title_work_ordered_date_wrapper' class='date_wrapper'>
									<select id ='title_work_ordered_month' name="month">
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
									<select id='title_work_ordered_day' name="day">
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
									<select id='title_work_ordered_year' name="year">
										<option value="2014">2014
										<option value="2015">2015
									</select>
								</span>
							</span>
						<span id='title_work_ordered_date_info'>
							<span id='title_work_ordered_date_info_date' class='date_return'></span>
							<a id='title_work_ordered_date_info_link' class='date_edit'>Edit</a>
						</span>
					</tr>
					<!-- Title Comment -->
					<tr>
						<td colspan='3'>
							<!--<input type='input' value='Title Comments' id='titleComment' alt='Title Comments' style='width:100%;' />-->
							<textarea id='title_comments' default='Title Comments' alt='Title Comments'>Title Comments</textarea>
						</td>
					</tr>
					
					<!-- Title Work Approved -->
					<tr id='title_work_approved'>
						<td>
							<span id='title_work_approved_title' class='title'>
								Title Work Approved
							</span>
						</td>
						<td id='title_work_approved_input' colspan='2'>
							<div class='table_wrapper'>
								<span id='title_work_approved_checkbox' class='checkbox'>
									<input id='was_title_work_approved' type='checkbox' />
								</span>
								<span id='title_work_approved_feedback' class='feedback'>
									Yes/No
								</span>
								<a id='title_work_approved_edit' class='field_edit'>
									Edit
								</a>
								<span id='title_work_approved_date' class='date'>
									<span id='title_work_approved_date_wrapper' class='date_wrapper'>
										<select id ='title_work_approved_month' name="month">
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
										<select id='title_work_approved_day' name="day">
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
										<select id='title_work_approved_year' name="year">
											<option value="2014">2014
											<option value="2015">2015
										</select>
									</span>
								</span>
								<span id='title_work_approved_date_info'>
									<span id='title_work_approved_date_info_date' class='date_info'></span>
									<a id='title_work_approved_date_info_link' class='date_edit'>Edit</a>
								</span>
							</div>
						</td>
					</tr>					

					<!-- Target Closing Date -->
					<!-- only a date -->
					<tr id='target_closing_date'>
						<td>
							<span id='target_closing_date_title' class='title'>
								Target Closing Date
							</span>
						</td>
						<td id='target_closing_date_input' colspan='2'>
							<div class='table_wrapper'>
								<span id='target_closing_date_wrapper' class='date_wrapper_visible'>
									<select id ='target_closing_month' name="month">
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
									<select id='target_closing_day' name="day">
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
									<select id='target_closing_year' name="year">
										<option value="2014">2014
										<option value="2015">2015
									</select>
								</span>
								<span id='target_closing_date_info'>
									<span id='target_closing_date_info_date' class='date_info'></span>
									<a id='target_closing_date_info_link' class='date_edit'>Edit</a>
								</span>
							</div>
						</td>
					</tr>
				</table>
				
				<div id='footer'>
					<div id='request_alert'></div>
					<input id='send_request' type='button' value='Add' />
					<input id='update_request' type='button' value='Update' /><!-- #update_request has become a part of #send_request -->
					<input id='cancel_update' type='button' value='Cancel' /><!-- #cancel_request needs to be reimplemented -->
					<input id='print_preview' type='button' value ='Print Preview' />
				</div>
			</div>
		</div>

		<!-- Dropdown -->
		<div id='dropdown_feedback' alt='0'></div>
		<div id="dropdown_container">
			<div id="dropdown_selected" class="dropdown_box">
				<i id="dropdown_title">Customers</i>
				<input id="customer_search" type="text" value="Customer Last Name Search..." alt="Customer Last Name Search..."/>
			</div>
			<div id="dropdown" class="dropdown_box">
				<div id='dropdown_area'>
					<?php include 'php/dropdown.php'; ?>
				</div>
				<div id="dropdown_extend" class="bordered"><div id="dropdown_extend_text">Extend</div></div>
					<div id="dropdown_close" class="bordered"><div id="dropdown_close_text">Close</div></div>
				</div>
		</div>

		<!-- 'bug' has been hidden for now, but will need to be put back up for future bug reporting. -->
		<?php // include 'php/bug.php'; ?>

		<script type='text/javascript' src='js/jquery.js'></script>
		<script type='text/javascript' src='js/index.js'></script>
	</center>
	</body>
</html>
