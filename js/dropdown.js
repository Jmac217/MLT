// dropdowns

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





/*** in case async:false becomes necessary ***/
/*
$.ajax({
	dataType: 'json',
	url: 'json/users.json',
	async: false,
	success: function(users){
		var username = users.users[0].name;
		var admin = users.users[0].admin;
		alert(username+' '+admin);
		$('#user_name').html(username);
			$.ajax({
				dataType: 'json',
				url: 'json/users.json',
				async: false,
				success: function(user_settings){
					alert(user_settings);
					$.each(user_settings, function(key, value){
						alert(key+', '+value);
						if(admin == 'true'){
									
						}
					});
				}
			});
		}
});
*/

	$('.drop_container').click(function(){
		$(this)
			.animate({'height':'110px'})
			.children('.drop_title').children('.drop_list')
			.css({'visibility':'visible'})
			.mouseleave(function(){
				$(this)
					.css({'visibility':'hidden'})
					.parent().parent().animate({'height':'32px'});
			});	
	});
	
	
	
	
// Dropdown
// =======
$("#dropdown_extend").click(function(){
	$("#customer_drop").animate({"height":"540px"},400);
	$(this).css({'visibility':'hidden'});
	$('#dropdown_close').css({'visibility':'visible'});
});
$("#dropdown_close").click(function(){
	$("#customer_drop").animate({"height":"10px"},400);
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
			default:
				$('#loan_status_closing').prop('checked', false);
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
			default:
				$('#title_work_ordered_realtor').prop('checked', false);
				$('#title_work_ordered_no').prop('checked', false);
				$('#title_work_ordered_bank').prop('checked', false);
			break;
		}
		set_session($first.text(), $last.text());
	});
});
$('#customer_search').click(function(){
	$("#dropdown").animate({"height":"620px"},200);
}).bind('keypress', function(e){
	if(e.keyCode==13){
		var search = $(this).val();
		$.post('php/dropdown.php',{search:search},function(data){
			$('#dropdown_area').html(data);	
		});	
	}
}).keyup(function(){
	if($(this).val()==''){
		$.post('php/dropdown.php',function(data){
			$('#dropdown_area').html(data);	
		});	
	}
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
			// post into feedback, and remove alert
			alert('deletion was unsuccessful, please contact an administrator.');
		}
	});
});
	
	
	
	