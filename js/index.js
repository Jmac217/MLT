$(document).ready(function(){

	$('#header_text').click(function(){
		window.location.reload('true');
	});

	// hack together the date in PHP/SQL format... jeez
	var today = new Date();
	if(today.getDate()+1<10){
		var day = today.getDate();
		day = '0'+day;
	}
	if(today.getMonth()+1<10){
		var month = today.getMonth()+1;
		month = '0'+month;
	}else{
		var month = today.getMonth()+1;
	}
	var year = today.getFullYear();
	var todays_date = year+'-'+month+'-'+day;

	// set default dates for selectors
	$('#target_closing_month').val(month);
	$('#target_closing_day').val(day);
	$('#target_closing_year').val(year);
	$('#conditionally_approved_month').val(month);
	$('#conditionally_approved_day').val(day);
	$('#conditionally_approved_year').val(year);
	$('#appraisal_ordered_month').val(month);
	$('#appraisal_ordered_day').val(day);
	$('#appraisal_ordered_year').val(year);
	$('#appraisal_approved_month').val(month);
	$('#appraisal_approved_day').val(day);
	$('#appraisal_approved_year').val(year);
	$('#title_work_approved_month').val(month);
	$('#title_work_approved_day').val(day);
	$('#title_work_approved_year').val(year);

	
	/*
	function date_selection(id, title){
		// this should take a json template!
		// in 'id=this.id+"*"', "*" should be removed as part of the ID and associated as a relative class
		// divs should be appended into a table; call this table "customer_questionaire_dates" or something similar
		$('#doc').append(+
			"<div id='"+id+"'>" +
				"<span id='"+id+"Title'>"+title+" : </span>" +
				"<span id='"+id+"Wrapper'>" +
					"<select id ='"+id+"Month' name='month'>" +
						"<option value='01'>January" +
						"<option value='02'>February" +
						"<option value='03'>March" +
						"<option value='04'>April" +
						"<option value='05'>May" +
						"<option value='06'>June" +
						"<option value='07'>July" +
						"<option value='08'>August" +
						"<option value='09'>September" +
						"<option value='10'>October" +
						"<option value='11'>November" +
						"<option value='12'>December" +
					"</select>" +
					"<select id='"+id+"Day' name='day'>" +
						"<option value='01'>1" +
						"<option value='02'>2" +
						"<option value='03'>3" +
						"<option value='04'>4" +
						"<option value='05'>5" +
						"<option value='06'>6" +
						"<option value='07'>7" +
						"<option value='08'>8" +
						"<option value='09'>9" +
						"<option value='10'>10" +
						"<option value='11'>11" +
						"<option value='12'>12" +
						"<option value='13'>13" +
						"<option value='14'>14" +
						"<option value='15'>15" +
						"<option value='16'>16" +
						"<option value='17'>17" +
						"<option value='18'>18" +
						"<option value='19'>19" +
						"<option value='20'>20" +
						"<option value='21'>21" +
						"<option value='22'>22" +
						"<option value='23'>23" +
						"<option value='24'>24" +
						"<option value='25'>25" +
						"<option value='26'>26" +
						"<option value='27'>27" +
						"<option value='28'>28" +
						"<option value='29'>29" +
						"<option value='30'>30" +
						"<option value='31'>31" +
					"</select>" +
					"<select id='"+id+"Year' name='year'>" +
						"<option value='2014'>2014" +
						"<option value='2015'>2015" +
					"</select>" +
				"</span>" +
				"<!-- date wrapper -->" +
			"</div>" +
			"<span id='"+id+"Info'>" +
				"<span id='"+id+"InfoDate'></span>" +
				"<a id='"+id+"InfoLink'>Edit</a>" +
			"</span>");					
	} // date_selection("approvedDate", "Date Approved");
	*/
	/*
	$('#user').click(function(){
		$.post('php/logout.php',function(){
			window.location.reload('true');
		});	
	});
	*/

	/*** This shouldn't be necessary ***/
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
});
