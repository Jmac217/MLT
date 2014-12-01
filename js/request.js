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

	// alert(loan_status+' '+title_work_ordered);

	if($('#appraisal_comments').val()==$('#appraisal_comments').attr('default')||$('#appraisal_comments').val()==''){appraisal_comments='none';}
	if($('#loan_status_comments').val()==$('#loan_status_comments').attr('default')||$('#loan_status_comments').val()==''){loan_status_comments='none';}
	if($('#title_comments').val()==$('#title_comments').attr('default')||$('#title_comments').val()==''){title_comments='none';}
	
	// set defaults for returns.
	if(conditionally_approved_date=='2014-01-01'){conditionally_approved_date='0000-00-00';}
	if(appraisal_ordered_date=='2014-01-01'){appraisal_ordered_date='0000-00-00';}
	if(appraisal_approved_date=='2014-01-01'){appraisal_approved_date='0000-00-00';}
	if(title_work_ordered_date=='2014-01-01'){title_work_ordered_date='0000-00-00';}
	if(title_work_approved_date=='2014-01-01'){title_work_approved_date='0000-00-00';}
	if(target_closing_date=='2014-01-01'){target_closing_date='0000-00-00';}
	
	/*
	loan_status = (title_work_ordered == 'undefined') ? 'false' : 'true';
	title_work_ordered = (title_work_ordered == 'undefined') ? 'false' : 'true';
	*/

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
			// alert(title_work_ordered+' '+loan_status);
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
				// alert(data);
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
		//}else{alert('Check Name');}
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
