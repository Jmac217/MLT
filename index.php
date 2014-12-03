<?php /*session_start(); if(!isset($_SESSION['user'])){header('Location:login.php');};*/ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html>
<meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
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
	<div id='slider_column'>
		<div id='user_settings' class='drop_container shadow'>
			<div class='drop_title block'></div>
			<div class='drop_list'></div>
		</div>
		<div id='customer_selection' class='drop_container shadow'>
				<div class='drop_title block'></div>
				<input class='drop_search' type='text' placeholder='Customer Last Name Search...'/>
				<div class='drop_list'></div>
		</div>

		<!-- customer dropdown for JS -->
		<!--
		<div id='customer_container' class='shadow'>
			<input id='customer_search' type='text' placeholder='Customer Last Name Search...'/>
			<div id='customer_name' class='block'>
				<div id='customer_drop'></div>
			</div>
		</div>
		-->

		<!-- Dropdown -->
		<!--<div id='dropdown_feedback' alt='0'></div>-->
		<!--
		<div id="customer_container">
			<div id="customer" class="dropdown_box">
				<span id="customer_name">Customers</span>
				<input id="customer_search" type="text" value="Customer Last Name Search..." alt="Customer Last Name Search..."/>
			</div>
			<div id="customer_drop" class="dropdown_box">
			<?php
				/*

				include 'php/connect.php';

				$maxQuery = mysql_query("SELECT id FROM customers");
				$maxRow = mysql_fetch_assoc($maxQuery);
				$max = mysql_num_rows($maxQuery);
				$cap = 40;// well for now I have hard-coded the amount of slots available for use. There is no limit on the db so if there is ever more than 40, which there shouldn't be, this is the thing to rewrite.
				$height = 20;
				
				$i=0;
				$t=0;
									
				while($i<=$cap){ // loop through all rows

					if(isset($_POST['search'])&&$_POST['search']!==''){
						$search=addslashes($_POST['search']);
						$row = mysql_fetch_assoc(mysql_query("SELECT id,first,last FROM customers WHERE id='$i' and last='$search'"));
					}else{
						$row = mysql_fetch_assoc(mysql_query("SELECT id,first,last FROM customers WHERE id='$i'")); // select only the rows where user exists and that are unread
					}
					if(isset($row['first'])&&isset($row['last'])){
						if($row['id']==$i){
							//if($t=0){$top=0;}else{
							$top = ($t*$height);//.'px'; // this dynamically sets message top
							//}
							$id=$row['id']; // this message_id
									
									echo '
									<div class="customer_container" style="top:'.$top.'px">
										<div class="customer" id="'.$i.'">
											'.$row['first'].' '.$row['last'].'
										</div>
										<div class="options">
											<div class="remove" id="'.$i.'"><!--<img src="res/x_gray.png" />--></div>
										</div>
									</div>';

							$i++;
							$t++;
						
							// Message should start with the most recent date.
							// There should be spans on top:0px and bottom:0px for previous_message and next_message.
							// Add a link to display a send_message form 
							// 	or
							// If $_POST['id'] display a send_message form and auto-fill cc with users email.
						}
					}else{$i++;}
				} if($top=0){$dropHeight=0;}else{$dropHeight=($height*$t+10);};
				 */

				/*
				
					instead of a select.option menu, I'm going to create a set of divs with classes and dynamic tops to act as a dynamic and fuller featured list.
					psuedo
					--------
						dropdown -- container div with a set position.
							customer -- will have dynamic top set to accumulative height.
								options   -- on mouse.select customer contents populate the fields/checkboxes for editing. This means that instead of an 'upload', db contents must be 'updated'.
									remove -- on mouse.hover an x button will pop up over the name to remove from list. List then gets regenerated
				
				*/
			?>
				<div id="dropdown_extend" class="bordered"><div id="dropdown_extend_text">Extend</div></div>
					<div id="dropdown_close" class="bordered"><div id="dropdown_close_text">Close</div></div>
				</div>
		</div>
-->
	</div>
</div>

		<div id='header'>
			<span id='header_text'>Mortgage Loans Tracker</span>
			<span id='version'>Beta 1.6</span>
		</div>
		<div id='body'>
			<div id='doc'>
			
				<!-- Customer Input -->
				
				<table id='customer_input'>
					<tr><td>Today's Date:</td><td colspan='2'><center><i><?php echo Date("m-d-Y"); ?></i></center></td></tr>
					<tr><td>Customer Name:</td>
							<td><input id='first' type='text' placeholder='First Name' alt='First Name' /></td>
							<td><input id='last' type='text' placeholder='Last Name' alt='Last Name' /></td>
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
							<textarea id='appraisal_comments' placeholder='Appraisal Comments' alt='Appraisal Comments'></textarea>
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
							<textarea id='loan_status_comments' placeholder='Loan Status Comments' alt='Loan Status Comments'></textarea>
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
							<textarea id='title_comments' placeholder='Title Comments' alt='Title Comments'></textarea>
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
			<div id='markdown' class='box'></div>
		</div>



		<!-- 'bug' has been hidden for now, but will need to be put back up for future bug reporting. -->
		<?php // include 'php/bug.php'; ?>

		<script type='text/javascript' src='js/jquery.js'></script>
		<script type='text/javascript' src='js/global.js'></script>
		<script type='text/javascript' src='js/functions.js'></script>
		<script type='text/javascript' src='js/index.js'></script>
		<script type='text/javascript' src='js/dropdown.js'></script>
		<script type='text/javascript' src='js/request.js'></script>
		<script type='text/javascript' src='js/showdown.js'></script>
		<script type='text/javascript' src='js/baseplate.js'></script>
		<script type='text/javascript' src='js/bug.js'></script>
		<script type='text/javascript' src='js/debug.js'></script>
		<script type='text/javascript' src='js/PIE.js'></script>
	</body>
</html>
