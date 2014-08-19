$(document).ready(function(){

	// debug
	// $("#dropdown").animate({"height":"620px"},200);

	// JSON-Based Dropdown Menu
	// Come back to this
	/*
	$.getJSON('json/customers.json', function(json){
		var customers = [];

		var first = json.first;
		var last = json.last;

		$('#dropdown').children('ul').html("<li>"+first+" "+last+"</li>");

		$.each(json, function(key, val){
			//customers.push("<li>"+key+":"+val+"</li>");	
			console.log(key+val);
		});
		//$('#dropdown').children('ul').append(customers);
		
	});
	*/
	// Variables are set from JSON
	// ---
	// get json object
	// for each object in json
	// 	put first, last into dropdownSelected	
	// 	append customer as a class to the list
	// ---

	function date_selection(id, title){
		// this should take a json template!
		// in 'id=this.id+"*"', "*" should be removed as part of the ID and associated as a relative class
		// divs should be appended into a table; call this table "customer_questionaire_dates" or something similar
		$('#doc').append("<div id='"+id+"'><span id='"+id+"Title'>"+title+" : </span><span id='"+id+"Wrapper'><select id ='"+id+"Month' name='month'><option value='01'>January<option value='02'>February<option value='03'>March<option value='04'>April<option value='05'>May<option value='06'>June<option value='07'>July<option value='08'>August<option value='09'>September<option value='10'>October<option value='11'>November<option value='12'>December</select><select id='"+id+"Day' name='day'><option value='01'>1<option value='02'>2<option value='03'>3<option value='04'>4<option value='05'>5<option value='06'>6<option value='07'>7<option value='08'>8<option value='09'>9<option value='10'>10<option value='11'>11<option value='12'>12<option value='13'>13<option value='14'>14<option value='15'>15<option value='16'>16<option value='17'>17<option value='18'>18<option value='19'>19<option value='20'>20<option value='21'>21<option value='22'>22<option value='23'>23<option value='24'>24<option value='25'>25<option value='26'>26<option value='27'>27<option value='28'>28<option value='29'>29<option value='30'>30<option value='31'>31</select><select id='"+id+"Year' name='year'><option value='2014'>2014<option value='2015'>2015</select></span><!-- date wrapper --></div><span id='"+id+"Info'><span id='"+id+"InfoDate'></span><a id='"+id+"InfoLink'>Edit</a></span>");					
	}
	//
	//date_selection("approvedDate", "Date Approved");

	// reload the page
	$('#header').click(function(){
		window.location.reload('true');
	});

	// Checkboxes
	$('input[type="checkbox"]').click(function(){
		if(this.checked){
			$(this).parent().siblings('.date').children('.date_wrapper').css({'visibility':'visible'})
		}else{
			$(this).parent().siblings('.date').children('.date_wrapper').css({'visibility':'hidden'})
		}
	});

	// Radio Button Sets
	// ============
	// Loan Status
	$('#loan_status_processing').click(function(){
		$('#loan_status_approved').prop('checked',false);	
		$('#loan_status_closing').prop('checked',false);	
	});
	$('#loan_status_approved').click(function(){
		$('#loan_status_processing').prop('checked',false);	
		$('#loan_status_closing').prop('checked',false);	
	});
	$('#loan_status_closing').click(function(){
		$('#loan_status_approved').prop('checked',false);	
		$('#loan_status_processing').prop('checked',false);	
	});
	// Title Work Ordered
	$('#title_work_ordered_no').click(function(){
		$('#title_work_ordered_bank').prop('checked',false);	
		$('#title_work_ordered_realtor').prop('checked',false);	
	});
	$('#title_work_ordered_bank').click(function(){
		$('#title_work_ordered_no').prop('checked',false);	
		$('#title_work_ordered_realtor').prop('checked',false);	
	});
	$('#title_work_ordered_realtor').click(function(){
		$('#title_work_ordered_no').prop('checked',false);	
		$('#title_work_ordered_bank').prop('checked',false);	
	});

function split_date(date, selection){
	var new_date = date.split("-");
	var year = new_date[0];
	var month = new_date[1];
	var day = new_date[2];
	switch(selection){
		case "year":
			return(year);
		break;
		case "month":
			return(month);
		break;
		case "day":
			return(day);
		break;
	}
}

function set_session(first,last){
	// send this first and last name to setSession.php
	$.post('php/setSession.php',{first:first,last:last},function(){
		$('#send_request').css({'left':'270px'});
		$('#print_preview').css({'visibility':'visible'});
	});
}

// alert(split_date(conditionally_approved_date, "year"));
	
	// Dropdown
	// =======
	$("#dropdown_extend").click(function(){
		$("#dropdown").animate({"height":"620px"},200);
		$(this).css({'visibility':'hidden'});
		$('#dropdown_close').css({'visibility':'visible'});
	});
	$("#dropdown_close").click(function(){
		$("#dropdown").animate({"height":"10px"},200);
		$(this).css({'visibility':'hidden'});
		$('#dropdown_extend').css({'visibility':'visible'});
	});
	$('.customer').click(function(){
		id=$(this).attr('id'); // get name from id through post
		$.post('php/getProfile.php',{id:id},function(data){
			$('#send_request').val('Update');
			//alert(data);
			var xml = data; // accept passed XML form
			xmlDoc = $.parseXML(xml); // call xmlDoc and the jQuery function 'parseXML' to parse var xml
			$xml = $(xmlDoc);	// xml documentation states the usage of the '$' operator.
			$first = $xml.find('first'); // searches for the <first></first> tag(s)
			$last = $xml.find('last');
			$conditionally_approved = $xml.find('conditionally_approved');
			$conditionally_approved_date = $xml.find('conditionally_approved_date');
			$appraisal_ordered = $xml.find('appraisal_ordered');
			$appraisal_ordered_date = $xml.find('appraisal_ordered_date');
			$appraisal_approved = $xml.find('appraisal_approved');
			$appraisal_approved_date = $xml.find('appraisal_approved_date');
			$appraisal_comments = $xml.find('appraisal_comments');
			$loan_status = $xml.find('loan_status');
			$loan_status_comments = $xml.find('loan_status_comments');
			$title_work_ordered = $xml.find('title_work_ordered');
			$title_work_ordered_date = $xml.find('title_work_ordered_date');
			$title_work_approved = $xml.find('title_work_approved');
			$title_work_approved_date = $xml.find('title_work_approved_date');
			$title_comments = $xml.find('title_comments');
			$target_closing_date = $xml.find('target_closing_date');

			// name
			$('#dropdown_title').html($first.text()+' '+$last.text()).css({'color':'#000'});// displays what's between the <first> tags
			$('#first').val($first.text()).attr('alt',$first.text());
			$('#last').val($last.text()).attr('alt',$last.text());

			// boolean comparisons | string-bool conversion method
			var conditionally_approved = $conditionally_approved.text() === 'true';
			var appraisal_ordered = $appraisal_ordered.text() === 'true';
			var appraisal_approved = $appraisal_approved.text() === 'true';
			var title_work_approved = $title_work_approved.text() === 'true';

			$('#was_conditionally_approved').prop('checked', conditionally_approved);
			$('#was_appraisal_ordered').prop('checked', appraisal_ordered);
			$('#was_appraisal_approved').prop('checked', appraisal_approved);
			$('#was_title_work_approved').prop('checked', title_work_approved);

			$('#appraisal_comments').attr('alt', $appraisal_comments.text()).html($appraisal_comments.text());
			$('#loan_status_comments').attr('alt', $loan_status_comments.text()).html($loan_status_comments.text());
			$('#title_comments').attr('alt', $title_comments.text()).html($title_comments.text());

			if(conditionally_approved){
				$('#conditionally_approved_date_wrapper').css({'visibility':'visible'});
			}else{
				$('#conditionally_approved_date_wrapper').css({'visibility':'hidden'});
			}
			if(appraisal_ordered){
				$('#appraisal_ordered_date_wrapper').css({'visibility':'visible'});
			}else{
				$('#appraisal_ordered_date_wrapper').css({'visibility':'hidden'});
			}
			if(appraisal_approved){
				$('#appraisal_approved_date_wrapper').css({'visibility':'visible'});
			}else{
				$('#appraisal_approved_date_wrapper').css({'visibility':'hidden'});
			}
			if(title_work_approved){
				$('#title_work_approved_date_wrapper').css({'visibility':'visible'});
			}else{
				$('#title_work_approved_date_wrapper').css({'visibility':'hidden'});
			}

			// date testing
			$('#target_closing_month').val(split_date($target_closing_date.text(), "month"));
			$('#target_closing_day').val(split_date($target_closing_date.text(), "day"));
			$('#target_closing_year').val(split_date($target_closing_date.text(), "year"));
			$('#conditionally_approved_month').val(split_date($conditionally_approved_date.text(), "month"));
			$('#conditionally_approved_day').val(split_date($conditionally_approved_date.text(), "day"));
			$('#conditionally_approved_year').val(split_date($conditionally_approved_date.text(), "year"));
			$('#appraisal_ordered_month').val(split_date($appraisal_ordered_date.text(), "month"));
			$('#appraisal_ordered_day').val(split_date($appraisal_ordered_date.text(), "day"));
			$('#appraisal_ordered_year').val(split_date($appraisal_ordered_date.text(), "year"));
			$('#appraisal_approved_month').val(split_date($appraisal_approved_date.text(), "month"));
			$('#appraisal_approved_day').val(split_date($appraisal_approved_date.text(), "day"));
			$('#appraisal_approved_year').val(split_date($appraisal_approved_date.text(), "year"));
			$('#title_work_approved_month').val(split_date($title_work_approved_date.text(), "month"));
			$('#title_work_approved_day').val(split_date($title_work_approved_date.text(), "day"));
			$('#title_work_approved_year').val(split_date($title_work_approved_date.text(), "year"));

			console.log($conditionally_approved.text()+', '+$appraisal_ordered.text()+', '+$appraisal_approved.text()+', '+$title_work_approved.text()+' | '+$loan_status.text()+', '+$title_work_ordered.text());

			// radio selections
			switch($loan_status.text()){
				case 'processing-underwriting':
					$('#loan_status_processing').prop('checked', true);
					$('#loan_status_approved').prop('checked', false);
				$('#loan_status_closing').prop('checked', false);
				break;
				case 'awaiting_response':
					$('#loan_status_approved').prop('checked', true);
					$('#loan_status_processing').prop('checked', false);
					$('#loan_status_closing').prop('checked', false);
				break;
				case 'closing_prep':
				$('#loan_status_closing').prop('checked', true);
				$('#loan_status_processing').prop('checked', false);
				$('#loan_status_approved').prop('checked', false);
				break;
			}
			switch($title_work_ordered.text()){
				case 'no':
					$('#title_work_ordered_no').prop('checked', true);
					$('#title_work_ordered_bank').prop('checked', false);
					$('#title_work_ordered_realtor').prop('checked', false);
				break;
				case 'bank':
					$('#title_work_ordered_bank').prop('checked', true);
					$('#title_work_ordered_no').prop('checked', false);
					$('#title_work_ordered_realtor').prop('checked', false);
				break;
				case 'realtor':
					$('#title_work_ordered_realtor').prop('checked', true);
					$('#title_work_ordered_no').prop('checked', false);
					$('#title_work_ordered_bank').prop('checked', false);
				break;
			}
			set_session($first.text(), $last.text());
		});
	});
	$('#customer_search').click(function(){
		$("#dropdown").animate({"height":"620px"},200);
	}).keyup(function(){
		var search = $(this).val();
		$.post('php/dropdown.php',{search:search},function(data){
			$('#dropdown').html(data);	
		});	
	});
	
	$(".remove").hover(function(){
			$(this).css({'background-image':'url("res/x_red.png")'});
	}).mouseout(function(){
			$(this).css({'background-image':'url("res/x_blue.png")'});
	}).click(function(){
		// call for confirmation
		// removes selected id from database
		var id = $(this).attr('id');
		//alert(id);
		$.post('php/remove.php',{id:id},function(data){ // if something is busted later it's because of the testing environment not being index.php. CHANGE THIS PATH!!! -"../"
			if(data==0){
				window.location.href='index.php';
			}else{
				alert('deletion was unsuccessful, please contact an administrator.');
			}
		});
	});
	
	// field focus functions - probably could be fixed up a little nicer.
	
	// Customer Name
	// when focused, field.value =''. Ignore the css(color) -> it was just eyecandy.
	// when blured value = field.alt (check index.php for inline alt attribute)
	$('input[type="text"]').focus(function(){
		$(this).attr('value', '').css({'color':'black'}).select();
	}).blur(function(){
		var alt = $(this).attr('alt');
		$(this).attr('value', alt);
		if($(this).val()==alt){
			$(this).css({'color':'gray'});
		}
	});

	// Comments
	$('textarea').focus(function(){
		$(this).html('').css({'color':'black','text-align':'left'}).select();
	}).blur(function(){
		var alt=$(this).attr('alt');
		$(this).html(alt);
		if($(this).val()==alt){
			$(this).css({'color':'gray','text-align':'center'});
		}
	});

	// Customer Name Check -- These should be placed near the top
	$('#first').blur(function(){
		// run first and last name against the check
		var first = $('#first').val();
		var last = $('#last').val();
		if (first != 'First Name'){
			$.post('php/nameCheck.php',{first:first,last:last},function(data){
				if (data == '1'){$('#customer_name_check').html("This name is already in database.").css({'color':'red','left':'350px'});nameCheck='false';}
				if (data == '0'){$('#customer_name_check').html("This name is okay.").css({'color':'#00FF00','left':'400px'});nameCheck='true';}
				if(first == 'First Name' || last == 'Last Name'){$('#customer_name_check').html("Please Enter A Valid Name.").css({'color':'black','left':'350px'});nameCheck='false';}
			});
		}else{$('#customer_name_check').html("Please Enter A First Name.").css({'color':'black','left':'350px'});nameCheck='false';}
	});
	/*
	^
	|-- These are the same and need to be turned into a function that accepts an #id at some point.
	v
	*/
	$('#last').keyup(function(){
		// run first and last name against the check
		var first = $('#first').val();
		var last = $('#last').val();
		if (last != 'Last Name'){
			$.post('php/nameCheck.php',{first:first,last:last},function(data){
				if (data == '1'){$('#customer_name_check').html("This name is already in database.").css({'color':'red','left':'350px'});nameCheck='false';}
				if (data == '0'){$('#customer_name_check').html("This name is okay.").css({'color':'00FF00','left':'400px'});nameCheck='true';$('#dropdown_title').html(first+' '+last).css({'color':'#000'});}
				if(first == 'First Name' || last == 'Last Name'){$('#customer_name_check').html("Please Enter A Valid Name.").css({'color':'black','left':'350px'});nameCheck='false';}
			});
		}else{$('#customer_name_check').html("Please Enter A Last Name.").css({'color':'black','left':'350px'});nameCheck='false';}
	});
	
	// Button Functions
	
	// Send
	$('#send_request').click(function(){
		var id=$(this).attr('alt');
		var request_type = $(this).val();
		// get name
		var first = $('#first').val();
		var last = $('#last').val();
		var conditionally_approved = $('#was_conditionally_approved').prop('checked');
		var conditionally_approved_date = $('#conditionally_approved_year').val()+'-'+$('#conditionally_approved_month').val()+'-'+$('#conditionally_approved_day').val();
		var appraisal_ordered = $('#was_appraisal_ordered').prop('checked');
		var appraisal_ordered_date = $('#appraisal_ordered_year').val()+'-'+$('#appraisal_ordered_month').val()+'-'+$('#appraisal_ordered_day').val();
		var appraisal_approved = $('#was_appraisal_approved').prop('checked');
		var appraisal_approved_date = $('#appraisal_approved_year').val()+'-'+$('#appraisal_approved_month').val()+'-'+$('#appraisal_approved_day').val();
		var appraisal_comments = $('#appraisal_comments').val();
		var loan_status = $('#loan_status_checkbox').children('.radio').children('input[type=radio]:checked').attr('alt');
		var loan_status_comments = $('#loan_status_comments').val();
		var title_work_ordered = $('#title_work_ordered_checkbox').children('.radio').children('input[type=radio]:checked').attr('alt');
		var title_work_ordered_date = $('#title_work_ordered_year').val()+'-'+$('#title_work_ordered_month').val()+'-'+$('#title_work_ordered_day').val();
		var title_work_approved = $('#was_title_work_approved').prop('checked');
		var title_work_approved_date = $('#title_work_approved_year').val()+'-'+$('#title_work_approved_month').val()+'-'+$('#title_work_approved_day').val();
		var title_comments = $('#title_comments').val();
		var target_closing_date = $('#target_closing_year').val()+'-'+$('#target_closing_month').val()+'-'+$('#target_closing_day').val();

		if($('#appraisal_comments').val()==$('#appraisal_comments').attr('alt')||$('#appraisal_comments').val()==''){appraisal_comments='none';}
		if($('#loan_status_comments').val()==$('#loan_status_comments').attr('alt')||$('#loan_status_comments').val()==''){loan_status_comments='none';}
		if($('#title_comments').val()==$('#title_comments').attr('alt')||$('#title_comments').val()==''){title_comments='none';}
		
		// set defaults for returns.
		if(conditionally_approved_date=='2014-01-01'){conditionally_approved_date='0000-00-00';}
		if(appraisal_ordered_date=='2014-01-01'){appraisal_ordered_date='0000-00-00';}
		if(appraisal_approved_date=='2014-01-01'){appraisal_approved_date='0000-00-00';}
		if(title_work_ordered_date=='2014-01-01'){title_work_ordered_date='0000-00-00';}
		if(title_work_approved_date=='2014-01-01'){title_work_approved_date='0000-00-00';}
		if(target_closing_date=='2014-01-01'){target_closing_date='0000-00-00';}
		
		loan_status = (title_work_ordered == 'undefined') ? 'true' : 'false';
		title_work_ordered = (title_work_ordered == 'undefined') ? 'true' : 'false';

		console.log(first+', '+last+', '+conditionally_approved+', '+conditionally_approved_date+', '+appraisal_ordered+', '+appraisal_ordered_date+', '+appraisal_approved+', '+appraisal_approved_date+', '+appraisal_comments+', '+loan_status+', '+loan_status_comments+', '+title_work_ordered+', '+title_work_ordered_date+', '+title_work_approved+', '+title_work_approved_date+', '+title_comments+', '+target_closing_date);

		// If customer doesn't enter a name, alert them to enter one. Post will not occur without a name.
		if(($('#first').val()==''||$('#first').val()=='First Name')||($('#last').val()==''||$('#last').val()=='Last Name')){
			// Name Check
			$('#request_alert').animate({'opacity':'1'},500).css({'height':'50px','visibility':'visible','color':'#FF5555','font-size':'18px'}).html('Make sure to enter a proper name. <br />This name may already exist in the database, please check the dropdown.');
			setTimeout(function(){
				$('#request_alert').animate({'opacity':'0'},500,function(){
					$(this).css({'height':'25px','visibility':'hidden'});
				});
			},3000);
		}else{
				// this should be cleaner
				// if(nameCheck=='true'){
				$.post('php/submit.php',{
					id:id,
					request_type:request_type,
					first:first,
					last:last,
					conditionally_approved:conditionally_approved,
					conditionally_approved_date:conditionally_approved_date,
					appraisal_ordered:appraisal_ordered,
					appraisal_ordered_date:appraisal_ordered_date,
					appraisal_approved:appraisal_approved,
					appraisal_approved_date:appraisal_approved_date,
					appraisal_comments:appraisal_comments,
					loan_status:loan_status,
					loan_status_comments:loan_status_comments,
					title_work_ordered:title_work_ordered,
					title_work_ordered_date:title_work_ordered_date,
					title_work_approved:title_work_approved,
					title_work_approved_date:title_work_approved_date,
					title_comments:title_comments,
					target_closing_date:target_closing_date
				},function(data){
					if(data=='0'){
						$('#request_alert').animate({'opacity':'1'},500).css({'visibility':'visible','color':'#55FF55','font-size':'18px'}).html('Your loan was entered succesfully.');
					}else{
						$('#request_alert').animate({'opacity':'1'},500).css({'height':'50px','visibility':'visible','color':'#FF5555','font-size':'18px'}).html('There was a problem processing your loan.<br /> Please contact an administrator for further assistance.');
					}
					// shut it down before someone gets confused
					setTimeout(function(){
						$('#request_alert').animate({'opacity':'0'},500,function(){
							$(this).css({'height':'25px','visibility':'hidden'});
						});
					},3000);

					set_session(first, last);

						// now that id session var is set, refresh page to printable.php printable will have the print button
						// this needs to be delayed for a while. Maybe pull '#requestAlert's function down to below here.
						//window.location.href='index.php';
				});
//			}else{alert('Check Name');}
		}
	});
	
	// Print Preview
	$('#print_preview').click(function(){
		// redirect to printable form in a new tab
		window.open('php/printable.php', '_blank').focus();
		/*
			$.getScript('js/jspdf.js');
			var pdf = new jsPDF();
			pdf.text('20','20', 'Heyo');
		*/
	});
	
	// Cancel
	$('#cancel_update').click(function(){
		// redirect to printable form
		window.location.href='index.php';
	});
	
	// Update
	// This has not even been touched yet
	$('#update_request').click(function(){
		
		// get boolean values for pass conditionals
		// psuedo -> if bool is false: var = answer as true or false; else var = checkbox.attr();
		
		// accepted
		if (loanAcceptedBool == 'false'){
			if(loanAcceptedAnswer=='Yes'){
				var loan = 'true';// not edited, Yes
			}else{
				var loan = 'false';// not editied, No
			}
		}else{
			if ($('#wasLoanAcceptedYes').prop('checked')==true){
				var loan = 'true';// edited, Yes
			}else{
				var loan = 'false';// edited, No
			}
		}
		
		// monitor
		if (govMonitoringBool == 'false'){
			if(govMonitoringAnswer=='Yes'){
				var monitor = 'true';// not edited, Yes
			}else{
				var monitor = 'false';// not editied, No
			}
		}else{
			if ($('#isGovMonitoring').prop('checked')==true){
				var monitor = 'true';// edited, Yes
			}else{
				var monitor = 'false';// edited, No
			}
		}
		
		// rejected
		if (beRejectedBool == 'false'){
			if(beRejectedAnswer=='Yes'){
				var rejected = 'true';// not edited, Yes
			}else{
				var rejected = 'false';// not editied, No
			}
		}else{
			if ($('#willBeRejectedYes').prop('checked')==true){
				var rejected = 'true';// edited, Yes
			}else{
				var rejected = 'false';// edited, No
			}
		}
		
		// alert('adverse');
		if (adverseActionBool == 'false'){
			if(adverseActionAnswer=='Yes'){
				var adverse = 'true';// not edited, Yes
			}else{
				var adverse = 'false';// not editied, No
			}
		}else{
			if ($('#isAdverseActionYes').prop('checked')==true){
				var adverse = 'true';// edited, Yes
			}else{
				var adverse = 'false';// edited, No
			}
		}
		
		// delivered
		if (deliveredToBool == 'false'){
			if(deliveredToAnswer=='Yes'){
				var delivered = 'true';// not edited, Yes
			}else{
				var delivered = 'false';// not editied, No
			}
		}else{
			if ($('#deliveredToHMDA').prop('checked')==true){
				var delivered = 'true';// edited, Yes
			}else{
				var delivered = 'false';// edited, No
			}
		}

		// disclosure
		if (earlyDisclosureBool == 'false'){
			if(earlyDisclosureAnswer=='Yes'){
				var disclosure = 'true';// not edited, Yes
			}else{
				var disclosure = 'false';// not editied, No
			}
		}else{
			if ($('#wasEarlyDisclosureYes').prop('checked')==true){
				var disclosure = 'true';// edited, Yes
			}else{
				var disclosure = 'false';// edited, No
			}
		}
		// // // // 
		//alert(loan);
		// if date has been changed use the changedDate, but otherwise use the savedDate
		if (acceptedDateBool == 'false'){ var acceptedDate = acceptedDateUpdate; }else{
			var acceptedDate = $('#acceptedYear').val() +'-'+ $('#acceptedMonth').val() +'-'+ $('#acceptedDay').val();
		}
		if(lockDateBool == 'false'){ var lockDate = lockDateUpdate; }else{
			var lockDate = $('#lockYear').val() +'-'+ $('#lockMonth').val() +'-'+ $('#lockDay').val();
		}		
		if(closeDateBool == 'false'){ var closeDate = closeDateUpdate; }else{
			var closeDate = $('#closeYear').val() +'-'+ $('#closeMonth').val() +'-'+ $('#closeDay').val();
		}
		if(titleReceiveDateBool == 'false'){ var titleReceiveDate = titleReceiveDateUpdate; }else{
			var titleReceiveDate = $('#titleReceiveYear').val() +'-'+ $('#titleReceiveMonth').val() +'-'+ $('#titleReceiveDay').val();
		}
		if(titleOrderDateBool == 'false'){ var titleOrderDate = titleOrderDateUpdate; }else{
			var titleOrderDate = $('#titleOrderYear').val() +'-'+ $('#titleOrderMonth').val() +'-'+ $('#titleOrderDay').val();
		}	
		if(appraisalReceiveDateBool == 'false'){ var appraisalReceiveDate = appraisalReceiveDateUpdate; }else{
			var appraisalReceiveDate = $('#appraisalReceiveYear').val() +'-'+ $('#appraisalReceiveMonth').val() +'-'+ $('#appraisalReceiveDay').val();
		}			
		if(appraisalOrderDateBool == 'false'){ var appraisalOrderDate = appraisalOrderDateUpdate; }else{
			var appraisalOrderDate = $('#appraisalOrderYear').val() +'-'+ $('#appraisalOrderMonth').val() +'-'+ $('#appraisalOrderDay').val();
		}					
		if(expirationDateBool == 'false'){ var expirationDate = expirationDateUpdate; }else{
			var expirationDate = $('#expirationYear').val() +'-'+ $('#expirationMonth').val() +'-'+ $('#expirationDay').val();
		}
		// set defaults for returns. -> Will be returned as N/A is set to '0000-00-00' from getProfile.php
		
		if(expirationDate=='2013-01-01'){expirationDate='0000-00-00';}
		if(lockDate=='2013-01-01'){lockDate='0000-00-00';}
		if(closeDate=='2013-01-01'){closeDate='0000-00-00';}
		if(titleReceiveDate=='2013-01-01'){titleReceiveDate='0000-00-00';}
		if(titleOrderDate=='2013-01-01'){titleOrderDate='0000-00-00';}
		if(appraisalReceiveDate=='2013-01-01'){appraisalReceiveDate='0000-00-00';}
		if(appraisalOrderDate=='2013-01-01'){appraisalOrderDate='0000-00-00';}			
		if(acceptedDate=='2013-01-01'){acceptedDate='0000-00-00';}
		//if(receiveDate=='2013-01-01'){receiveDate='0000-00-00';}
		// anomaly
		// I don't think this is necessary because received date should be picked by php when it is first submitted, maybe have it as an editing option? 
		//var receiveDate = $('#receiveYear').val() +'-'+ $('#receiveMonth').val() +'-'+ $('#receiveDay').val();
	
		// get all variables
		// these are just copies from Update
		var customerFirst = $('#customerFirst').val();
		var customerLast = $('#customerLast').val();
		var appraisalComment = $('#appraisalComment').val();
		var titleComment = $('#titleComment').val();
		var lockComment = $('#lockComment').val();
		if($('#appraisalComment').val()==$('#appraisalComment').attr('alt')||$('#appraisalComment').val()==''){appraisalComment='none';}
		if($('#titleComment').val()==$('#titleComment').attr('alt')||$('#titleComment').val()==''){titleComment='none';}
		if($('#lockComment').val()==$('#lockComment').attr('alt')||$('#lockComment').val()==''){lockComment='none';}
		
		//alert(id+customerFirst+customerLast+monitor+loan+rejected+adverse+delivered+disclosure+expirationDate+lockDate+closeDate+titleReceiveDate+titleOrderDate+appraisalReceiveDate+appraisalOrderDate+acceptedDate+appraisalComment+titleComment+lockComment);
		// acceptedDate is stil comented out in the following line. Just in case it will be used.
		// It could be beneficial to put some error messages into the return function here.
		$.post('php/updateCustomer.php',{id:id,customerFirst:customerFirst,customerLast:customerLast,monitor:monitor,loan:loan,rejected:rejected,adverse:adverse,delivered:delivered,disclosure:disclosure,expirationDate:expirationDate,lockDate:lockDate,closeDate:closeDate,titleReceiveDate:titleReceiveDate,titleOrderDate:titleOrderDate,appraisalReceiveDate:appraisalReceiveDate,appraisalOrderDate:appraisalOrderDate,acceptedDate:acceptedDate/*,receiveDate:receiveDate*/,appraisalComment:appraisalComment,titleComment:titleComment,lockComment:lockComment},function(data){
			if(data=='0'){
				$('#requestAlert').animate({'opacity':'1'},250).css({'visibility':'visible','color':'#55FF55','font-size':'18px'}).html('Your loan was updated succesfully.');
			}else if(data=='1'){
						$('#requestAlert').animate({'opacity':'1'},500).css({'height':'50px','visibility':'visible','color':'#FF5555','font-size':'18px'}).html('There was a problem updating your loan.<br /> Please contact an administrator for further assistance.');
					}
			setTimeout(function(){
				$('#requestAlert').animate({'opacity':'0'},250,function(){
					$(this).css({'height':'25px','visibility':'hidden'});
				});
			},3000);				
			
			//window.location.href = 'index.php';
		});
	});
	
	// Bug Report
	$('#bug').click(function(){
		$(this).animate({'bottom':'115px'},200);
		$('#bugTracker').css({'visibility':'visible','overflow':'visible'});
	});
	$('#submitBug').click(function(){
		var name = $('#bugTrackerName').val();
		var description = $('#bugTrackerDescription').val();
		$.post('php/submitBug.php',{name:name,description:description},function(data){
			// minified return statement
			if(data=='1'){
				$('#bugFeedback').html('Submission Failure').css({'color':'red'});
			}else{
				$('#bugFeedback').html('Submission Succesful').css({'color':'green'});
			}
		});
	});
	$('#bugTrackerName').focus(function(){
		$(this).attr('value', '').css({'color':'black'});
	}).blur(function(){
		var alt = $(this).attr('alt');
		$(this).attr('value', alt);
	});
	$('#bugTrackerDescription').focus(function(){
		$(this).html('');
	}).blur(function(){
		var alt=$(this).attr('alt');
		$(this).html(alt);
	});
});
