$(document).ready(function(){

	// debug
	// $("#dropdown").animate({"height":"620px"},200);

	// New Dropdown 
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
	
	// this is going to be JSON! Oh yeah!
	
	// global variables, used for upload post
	var monitor = 'false';
	var loan = 'false';
	var rejected = 'false';
	var adverse = 'false';
	var delivered = 'false';
	var disclosure = 'false';
	var nameCheck = 'false';
	
	// update globals
	var acceptedDateUpdate = '';
	var appraisalOrderDateUpdate = '';
	var appraisalReceiveUpdate = '';
	var titleOrderDateUpdate = '';
	var titleReceiveDateUpdate = '';
	var closeDateUpdate = '';
	var lockDateUpdate = '';
	var expirationDateUpdate = '';
	
	var loanAcceptedAnswer = '';
	var govMonitoringAnswer = '';
	var beRejectedAnswer = '';
	var adverseActionAnswer = '';
	var deliveredToAnswer = '';
	var earlyDisclosureAnswer ='';
	
	// date booleans
	var acceptedDateBool = 'false';
	var appraisalOrderDateBool = 'false';
	var appraisalReceiveDateBool = 'false';
	var titleOrderDateBool = 'false';
	var titleReceiveDateBool = 'false';
	var closeDateBool = 'false';
	var lockDateBool = 'false';
	var expirationDateBool = 'false';
	
	// checkbox booleans
	var loanAcceptedBool = 'false';
	var govMonitoringBool = 'false';
	var beRejectedBool = 'false';
	var adverseActionBool = 'false';
	var deliveredToBool = 'false';
	var earlyDisclosureBool ='false';
	
	var id = 0;
	
	function resetCheckboxes(){}

	// checkboxes

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
	$('#title_ordered_no').click(function(){
		$('#title_ordered_bank').prop('checked',false);	
		$('#title_ordered_realtor').prop('checked',false);	
	});
	$('#title_ordered_bank').click(function(){
		$('#title_ordered_no').prop('checked',false);	
		$('#title_ordered_realtor').prop('checked',false);	
	});
	$('#title_ordered_realtor').click(function(){
		$('#title_ordered_no').prop('checked',false);	
		$('#title_ordered_bank').prop('checked',false);	
	});
	
	// Dropdown
	// =======
	
	// this should be an if statement that changes states
	/*
	$('#dropdown_extend').click(function(){
		$(this).css({'visibility':'hidden'});
		$('#dropdown_close').css({'visibility':'visible'});
		// get num_rows from database: if 0 display, in dropdownFeedback, "No loans have been added".
		$.post('php/numRows.php', function(data){
			if (data=='0'){
				$('#dropdown_feedback').html('There are no existing loans.').fadeOut(5000);
				// fade causes the feedback to go invisible
				// dropdown needs refreshed
			};
		});
	});
	$('#dropdown_close').click(function(){
		$(this).css({'visibility':'hidden'});
		$('#dropdown_extend').css({'visibility':'visible'});
	});
	*/
	
	$('.customer').click(function(){
		id=$(this).attr('id'); // get name from id through post
		$.post('php/getProfile.php',{id:id},function(data){
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
			
			/*
			acceptedDateUpdate = $acceptedDate.text();
			appraisalOrderDateUpdate = $appraisalOrderDate.text();
			appraisalReceiveDateUpdate = $appraisalReceiveDate.text();
			titleOrderDateUpdate = $titleOrderDate.text();
			titleReceiveDateUpdate = $titleReceiveDate.text();
			closeDateUpdate = $closeDate.text();
			lockDateUpdate = $lockDate.text();
			expirationDateUpdate = $expirationDate.text();
			*/

			// name
			$('#dropdown_title').html($first.text()+' '+$last.text()).css({'color':'#000'});// displays what's between the <first> tags
			$('#first').val($first.text()).attr('alt',$first.text());
			$('#last').val($last.text()).attr('alt',$last.text());
			
			console.log($conditionally_approved.text()+', '+$appraisal_ordered.text()+', '+$appraisal_approved.text()+', '+$title_work_approved.text()+' | '+$loan_status.text()+', '+$title_work_ordered.text());

			$('#was_conditionally_approved').prop('checked', $conditionally_approved.text());
			$('#was_appraisal_ordered').prop('checked', $appraisal_ordered.text());
			$('#was_appraisal_approved').prop('checked', $appraisal_approved.text());
			$('#was_title_approved').prop('checked', $title_work_approved.text());
			
			switch($loan_status.text()){
				case 'processing-underwriting':
					$('#loan_status_processing').prop('checked', true);
				break;
				case 'awaiting_response':
					$('#loan_status_approved').prop('checked', true);
				break;
				case 'closing_prep':
				$('#loan_status_closing').prop('checked', true);
				break;
			}
			
			switch($title_work_ordered.text()){
				case 'no':
					$('#title_ordered_no').prop('checked', true);
				break;
				case 'bank':
					$('#title_ordered_bank').prop('checked', true);
				break;
				case 'realtor':
					$('#title_ordered_realtor').prop('checked', true);
				break;
			}
			
			// dates
			// will just show dates where selectors are and set a link next to them saying "Edit", that will switch out the date for the selector.
			// hide selectors
			//// as of right now the entire div is being hidden, may need to change it to just the selector. See MLT.txt for more info.
			/*
			$('#acceptedDateWrapper').css({'visibility':'hidden'});
			//$('#appraisalDateWrapper').css({'visibility':'hidden'});
			$('#appraisalOrderDateWrapper').css({'visibility':'hidden'});
			$('#appraisalReceiveDateWrapper').css({'visibility':'hidden'});
			$('#titleOrderDateWrapper').css({'visibility':'hidden'});
			$('#titleReceiveDateWrapper').css({'visibility':'hidden'});
			$('#closeDateWrapper').css({'visibility':'hidden'});
			$('#lockDateWrapper').css({'visibility':'hidden'});
			$('#expirationDateWrapper').css({'visibility':'hidden'});
			// show *DateInfo spans
			$('#acceptedDateInfo').css({'visibility':'visible'});
			$('#appraisalOrderDateInfo').css({'visibility':'visible'});
			$('#appraisalReceiveDateInfo').css({'visibility':'visible'});
			$('#titleOrderDateInfo').css({'visibility':'visible'});
			$('#titleReceiveDateInfo').css({'visibility':'visible'});
			$('#closeDateInfo').css({'visibility':'visible'});
			$('#lockDateInfo').css({'visibility':'visible'});
			$('#expirationDateInfo').css({'visibility':'visible'});
			// populate *Info with $text()
			$('#acceptedDateInfoDate').html($acceptedDate);
			$('#appraisalOrderDateInfoDate').html($appraisalOrderDate);
			$('#appraisalReceiveDateInfoDate').html($appraisalReceiveDate);
			$('#titleOrderDateInfoDate').html($titleOrderDate);
			$('#titleReceiveDateInfoDate').html($titleReceiveDate);
			$('#closeDateInfoDate').html($closeDate);
			$('#lockDateInfoDate').html($lockDate);
			$('#expirationDateInfoDate').html($expirationDate);	
			// comments
			// set *Comment values to $data
			$('#appraisalComment').attr('value', $appraisalComment.text());
			$('#titleComment').attr('value', $titleComment.text());
			$('#lockComment').attr('value', $lockComment.text());
			
			// hide selectors
			$('#loanAccepted').css({'visibility':'visible'});
			$('#wasLoanAccepted').css({'visibility':'hidden'});
			$('#wasLoanAcceptedYes').css({'visibility':'hidden'});
			$('#wasLoanAcceptedNo').css({'visibility':'hidden'});
			$('#loanAcceptedCheckbox').css({'visibility':'hidden'});
			
			$('#govMonitoring').css({'visibility':'visible'});
			$('#isGovMonitoring').css({'visibility':'hidden'});
			$('#govMonitoringCheckbox').css({'visibility':'hidden'});
			
			$('#beRejected').css({'visibility':'visible'});
			$('#willBeRejected').css({'visibility':'hidden'});
			$('#willBeRejectedYes').css({'visibility':'hidden'});
			$('#willBeRejectedNo').css({'visibility':'hidden'});
			$('#beRejectedCheckbox').css({'visibility':'hidden'});
			
			$('#adverseAction').css({'visibility':'visible'});
			$('#isAdverseAction').css({'visibility':'hidden'});
			$('#isAdverseActionYes').css({'visibility':'hidden'});
			$('#isAdverseActionNo').css({'visibility':'hidden'});
			$('#adverseActionCheckbox').css({'visibility':'hidden'});
			
			$('#deliveredTo').css({'visibility':'visible','top':'200px'});
			$('#deliveredToCheckbox').css({'visibility':'hidden'});
			$('#deliveredToHMDA').css({'visibility':'hidden'});
			
			$('#earlyDisclosure').css({'visibility':'visible'});
			$('#earlyDisclosureCheckbox').css({'visibility':'hidden'});
			
			// show answers
			if ($wasLoanAccepted.text()=='true'){
				$('#loanAcceptedAnswer').css({'visibility':'visible'});
				loanAcceptedAnswer = 'Yes';
				$('#loanAcceptedAnswerYesNo').html(loanAcceptedAnswer);
			}else if($wasLoanAccepted.text()=='false'){
				$('#loanAcceptedAnswer').css({'visibility':'visible'});
				loanAcceptedAnswer = 'No';
				$('#loanAcceptedAnswerYesNo').html(loanAcceptedAnswer);
			}else if($wasLoanAccepted.text()=='none'){
				$('#loanAcceptedAnswer').css({'visibility':'visible'});
				loanAcceptedAnswer = 'N/A';
				$('#loanAcceptedAnswerYesNo').html(loanAcceptedAnswer);
			}
			if ($isGovMonitoring.text()=='true'){
				$('#govMonitoringAnswer').css({'visibility':'visible'});
				govMonitoringAnswer = 'Yes';
				$('#govMonitoringAnswerYesNo').html(govMonitoringAnswer);
			}else if($isGovMonitoring.text()=='false'){
				$('#govMonitoringAnswer').css({'visibility':'visible'});
				govMonitoringAnswer = 'No';
				$('#govMonitoringAnswerYesNo').html(govMonitoringAnswer);
			}else if($isGovMonitoring.text()=='none'){
				$('#govMonitoringAnswer').css({'visibility':'visible'});
				govMonitoringAnswer = 'N/A';
				$('#govMonitoringAnswerYesNo').html(govMonitoringAnswer);
			}
			if ($willBeRejected.text()=='true'){
				$('#beRejectedAnswer').css({'visibility':'visible'});
				beRejectedAnswer = 'Yes';
				$('#beRejectedAnswerYesNo').html(beRejectedAnswer);
			}else if($willBeRejected.text()=='false'){
				$('#beRejectedAnswer').css({'visibility':'visible'});
				beRejectedAnswer = 'No';
				$('#beRejectedAnswerYesNo').html(beRejectedAnswer);
			}else if($willBeRejected.text()=='none'){
				$('#beRejectedAnswer').css({'visibility':'visible'});
				beRejectedAnswer = 'N/A';
				$('#govMonitoringAnswerYesNo').html(beRejectedAnswer);
			}
			if ($isAdverseAction.text()=='true'){
				$('#adverseActionAnswer').css({'visibility':'visible'});
				adverseActionAnswer = 'Yes';
				$('#adverseActionAnswerYesNo').html(adverseActionAnswer);
			}else if($isAdverseAction.text()=='false'){
				$('#adverseActionAnswer').css({'visibility':'visible'});
				adverseActionAnswer = 'No';
				$('#adverseActionAnswerYesNo').html(adverseActionAnswer);
			}else if($isAdverseAction.text()=='none'){
				$('#adverseActionAnswer').css({'visibility':'visible'});
				adverseActionAnswer = 'N/A';
				$('#govMonitoringAnswerYesNo').html(adverseActionAnswer);
			}
			if ($deliveredToHMDA.text()=='true'){
				$('#deliveredToAnswer').css({'visibility':'visible'});
				deliveredToAnswer = 'Yes';
				$('#deliveredToAnswerYesNo').html(deliveredToAnswer);
			}else if($deliveredToHMDA.text()=='false'){
				$('#deliveredToAnswer').css({'visibility':'visible'});
				deliveredToAnswer = 'No';
				$('#deliveredToAnswerYesNo').html(deliveredToAnswer);
			}else if($deliveredToHMDA.text()=='none'){
				$('#deliveredToAnswer').css({'visibility':'visible'});
				deliveredToAnswer = 'N/A';
				$('#deliveredToAnswerYesNo').html(deliveredToAnswer);
			}
			if ($wasEarlyDisclosure.text()=='true'){
				$('#earlyDisclosureAnswer').css({'visibility':'visible'});
				earlyDisclosureAnswer = 'Yes';
				$('#earlyDisclosureAnswerYesNo').html(earlyDisclosureAnswer);
			}else if($wasEarlyDisclosure.text()=='false'){
				$('#earlyDisclosureAnswer').css({'visibility':'visible'});
				earlyDisclosureAnswer = 'No';
				$('#earlyDisclosureAnswerYesNo').html(earlyDisclosureAnswer);				
			}else if($wasEarlyDisclosure.text()=='none'){
				$('#earlyDisclosureAnswer').css({'visibility':'visible'});
				earlyDisclosureAnswer = 'N/A';
				$('#earlyDisclosureAnswerYesNo').html(earlyDisclosureAnswer);
			}
			// set Update, Cancel, and Print buttons to visible and Send to hidden
			$.post('php/setSessionFromID.php',{id:id});
			$('#sendRequest').css({'visibility':'hidden'});
			$('#updateRequest').css({'visibility':'visible','left':'260px'});
			$('#cancelUpdate').css({'visibility':'visible'});
			$('#printPreview').css({'visibility':'visible', 'left':'397px'});
			*/
		});
	});
	/* end of customer click */
	
	// 'edit' checkbox click functions
	/*
	$('#loanAcceptedAnswerEdit').click(function(){
		$('#loanAcceptedAnswerYesNo').css({'visibility':'hidden'});
		$('#loanAcceptedAnswerEdit').css({'visibility':'hidden'});
		$('#wasLoanAccepted').css({'visibility':'visible'});
		$('#wasLoanAcceptedYes').css({'visibility':'visible'});
		$('#wasLoanAcceptedNo').css({'visibility':'visible'});
		$('#loanAcceptedCheckbox').css({'visibility':'visible'});
		loanAcceptedBool = 'true';
	});
	$('#govMonitoringAnswerEdit').click(function(){
		$('#govMonitoringAnswerYesNo').css({'visibility':'hidden'});
		$('#govMonitoringAnswerEdit').css({'visibility':'hidden'});
		$('#isGovMonitoring').css({'visibility':'visible'});
		$('#isGovMonitoringYes').css({'visibility':'visible'});
		$('#isGovMonitoringNo').css({'visibility':'visible'});
		$('#isGovMonitoringCheckbox').css({'visibility':'visible'});
		govMonitoringBool = 'true';
	});
	$('#beRejectedAnswerEdit').click(function(){
		$('#beRejectedAnswerYesNo').css({'visibility':'hidden'});
		$('#beRejectedAnswerEdit').css({'visibility':'hidden'});
		$('#willBeRejected').css({'visibility':'visible'});
		$('#willBeRejectedYes').css({'visibility':'visible'});
		$('#willBeRejectedNo').css({'visibility':'visible'});
		$('#beRejectedCheckbox').css({'visibility':'visible'});
		beRejectedBool = 'true';
	});
	$('#adverseActionAnswerEdit').click(function(){
		$('#adverseActionAnswerYesNo').css({'visibility':'hidden'});
		$('#adverseActionAnswerEdit').css({'visibility':'hidden'});
		$('#isAdverseAction').css({'visibility':'visible'});
		$('#isAdverseActionYes').css({'visibility':'visible'});
		$('#isAdverseActionNo').css({'visibility':'visible'});
		$('#adverseActionCheckbox').css({'visibility':'visible'});
		adverseActionBool = 'true';
	});
	$('#deliveredToAnswerEdit').click(function(){
		$('#deliveredToAnswerYesNo').css({'visibility':'hidden'});
		$('#deliveredToAnswerEdit').css({'visibility':'hidden'});
		$('#deliveredToHMDA').css({'visibility':'visible'});
		$('#deliveredToHMDAYes').css({'visibility':'visible'});
		$('#deliveredToHMDANo').css({'visibility':'visible'});
		$('#deliveredToCheckbox').css({'visibility':'visible'});
		deliveredToBool = 'true';
	});
	$('#earlyDisclosureAnswerEdit').click(function(){
		$('#earlyDisclosureAnswerYesNo').css({'visibility':'hidden'});
		$('#earlyDisclosureAnswerEdit').css({'visibility':'hidden'});
		$('#wasEarlyDisclosure').css({'visibility':'visible'});
		$('#wasEarlyDisclosureYes').css({'visibility':'visible'});
		$('#wasEarlyDisclosureNo').css({'visibility':'visible'});
		$('#earlyDisclosureCheckbox').css({'visibility':'visible'});
		earlyDisclosureBool = 'true';
	});	
	// 'edit' date click functions
	// these could really use an exit type of feature in case someone accidentally clicks edit. As of right now once they click edit there's no way to get back to the original date.
	$('#acceptedDateInfoLink').click(function(){
		$('#acceptedDateInfo').css({'visibility':'hidden'});
		$('#acceptedDateWrapper').css({'visibility':'visible'});
		acceptedDateBool = 'true';
	});
	// this may be unnecessary, but it' pretty much everywhere right now.
	*/
	/*
	$('#appraisalDateInfoLink').click(function(){
		$('#appraisalDateInfo').css({'visibility':'hidden'});
		$('#appraisalDateWrapper').css({'visibility':'visible'});
		appraisalOrderDateUpdate = 'true';
	});
	*/
	/*
	$('#appraisalOrderDateInfoLink').click(function(){
		$('#appraisalOrderDateInfo').css({'visibility':'hidden'});
		$('#appraisalOrderDateWrapper').css({'visibility':'visible'});
		appraisalOrderDateBool = 'true';
	});
	$('#appraisalReceiveDateInfoLink').click(function(){
		$('#appraisalReceiveDateInfo').css({'visibility':'hidden'});
		$('#appraisalReceiveDateWrapper').css({'visibility':'visible'});
		appraisalReceiveDateBool = 'true';
	});
	$('#titleOrderDateInfoLink').click(function(){
		$('#titleOrderDateInfo').css({'visibility':'hidden'});
		$('#titleOrderDateWrapper').css({'visibility':'visible'});
		titleOrderDateBool = 'true';
	});
	$('#titleReceiveDateInfoLink').click(function(){
		$('#titleReceiveDateInfo').css({'visibility':'hidden'});
		$('#titleReceiveDateWrapper').css({'visibility':'visible'});
		titleReceiveDateBool = 'true';
	});
	$('#closeDateInfoLink').click(function(){
		$('#closeDateInfo').css({'visibility':'hidden'});
		$('#closeDateWrapper').css({'visibility':'visible'});
		closeDateBool = 'true';
	});
	$('#lockDateInfoLink').click(function(){
		$('#lockDateInfo').css({'visibility':'hidden'});
		$('#lockDateWrapper').css({'visibility':'visible'});
		lockDateBool = 'true';
	});
	$('#expirationDateInfoLink').click(function(){
		$('#expirationDateInfo').css({'visibility':'hidden'});
		$('#expirationDateWrapper').css({'visibility':'visible'});
		expirationDateBool = 'true';
	});
	*/

	$('.customer').hover(function(){
		// display options, if hovered display x, else it's hidden.
		/*
		$(this).siblings('.options').children('.remove').css({'visibility':'visible'}).mouseout(function(){
			$(this).css({'visibility':'hidden'});	
		});
		*/
	});
	$('.options').hover(function(){/* not much */});
	
	// Mouse Over functions.. I'd like to get these working.
	
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
		
	// Checkbox Functions

	/*
		$('#isGovMonitoring').click(function(){
			// declare variable
			monitor=$('#isGovMonitoring').prop('checked');
		});
			
		// reset check boxes
		$('#wasLoanAcceptedYes').click(function(){
			// deselect opposing checkbox
			$('#wasLoanAcceptedNo').attr('checked', false);
			// display next in line
			if(loanAcceptedBool == 'false'){
				$('#beRejected').css({'visibility':'hidden'});
				$('#adverseAction').css({'visibility':'hidden'});
				$('#earlyDisclosure').css({'visibility':'hidden'});
				$('#deliveredTo').css({'visibility':'hidden'});
				// display checkboxes accordingly
				$('#beRejectedCheckbox').css({'visibility':'hidden'});
				$('#willBeRejectedYes').css({'visibility':'hidden'});
				$('#willBeRejectedNo').css({'visibility':'hidden'});
				$('#adverseActionCheckbox').css({'visibility':'hidden'});
				$('#isAdverseActionYes').css({'visibility':'hidden'});
				$('#isAdverseActionNo').css({'visibility':'hidden'});
				$('#earlyDisclosureCheckbox').css({'visibility':'hidden'});
				$('#deliveredToCheckbox').css({'visibility':'hidden'});
				$('#deliveredToHMDA').css({'visibility':'hidden'});
				// return checkboxes to original state
				//$('#isGovMonitoring').attr('checked', false);
				$('#isAdverseActionYes').attr('checked', false);
				$('#isAdverseActionNo').attr('checked', false);
				$('#willBeRejectedYes').attr('checked', false);
				$('#willBeRejectedNo').attr('checked', false);
				$('#wasEarlyDisclosureNo').attr('checked', false);
				$('#wasEarlyDisclosureYes').attr('checked', false);
				$('#deliveredToHMDA').attr('checked', false);
				// declare variable
				loan=$('#wasLoanAcceptedYes').prop('checked');
			}
		});
		
		$('#wasLoanAcceptedNo').click(function(){
			// deselect opposing checkbox
			$('#wasLoanAcceptedYes').attr('checked', false);
			// display next in line
			if(loanAcceptedBool == 'false'){
				$('#beRejected').css({'visibility':'visible'});
				$('#adverseAction').css({'visibility':'visible'});
				$('#earlyDisclosure').css({'visibility':'hidden'});
				$('#deliveredTo').css({'visibility':'hidden'});
				// display checkboxes accordingly
				$('#beRejectedCheckbox').css({'visibility':'visible'});
				$('#adverseActionCheckbox').css({'visibility':'visible'});
				$('#earlyDisclosureCheckbox').css({'visibility':'hidden'});
				$('#deliveredToCheckbox	').css({'visibility':'hidden'});
				$('#willBeRejectedYes').css({'visibility':'visible'});
				$('#willBeRejectedNo').css({'visibility':'visible'});
				$('#isAdverseActionYes').css({'visibility':'visible'});
				$('#isAdverseActionNo').css({'visibility':'visible'});
				// declare variable
				if ($('#wasLoanAcceptedNo').prop('checked')){
					loan='false';
				}
			}
		});
		
		$('#willBeRejectedYes').click(function(){
			// deselect opposing checkbox
			$('#willBeRejectedNo').attr('checked', false);
			if(beRejectedBool == 'false'){
				// declare variable
				rejected=$('#willBeRejectedYes').prop('checked');
			}
		});
		
		$('#willBeRejectedNo').click(function(){
			// deselect opposing checkbox
			$('#willBeRejectedYes').attr('checked', false);
			if(beRejectedBool == 'false'){
				// declare variable
				rejected='false';
			}
		});
		
		$('#isAdverseActionYes').click(function(){
			// deselect opposing checkbox
			$('#isAdverseActionNo').attr('checked', false);
			if(adverseActionBool == 'false'){
				// deselct opposing checkboxes next in line
				$('#wasEarlyDisclosureYes').attr('checked', false);
				$('#wasEarlyDisclosureNo').attr('checked', false);
				// display next in line
				$('#deliveredTo').css({'visibility':'visible','top':'180px'});
				$('#earlyDisclosure').css({'visibility':'hidden'});
				//display checkboxes accordingly
				$('#deliveredToHMDA').css({'visibility':'visible'});
				$('#deliveredToCheckbox').css({'visibility':'visible'});
				$('#earlyDisclosureCheckbox').css({'visibility':'hidden'});
				// declare variable
				adverse=$('#isAdverseActionYes').prop('checked');
			}
		});
		
		$('#isAdverseActionNo').click(function(){
			// deselect opposing checkbox
			$('#isAdverseActionYes').attr('checked', false);
			$('#deliveredToHMDA').attr('checked', false);
			if(adverseActionBool == 'false'){
				// display next in line
				$('#deliveredTo').css({'visibility':'hidden'});
				$('#earlyDisclosure').css({'visibility':'visible'});
				// display checkboxes accordingly
				$('#deliveredToHMDA').css({'visibility':'hidden'});
				$('#deliveredToCheckbox').css({'visibility':'hidden'});
				$('#earlyDisclosureCheckbox').css({'visibility':'visible'});
				// declare variable
				adverse='false';
			}
		});
		
		$('#deliveredToHMDA').click(function(){
		if(deliveredToBool=='false'){
				//declare variable
				delivered=$('#deliveredToHMDA').prop('checked');
			}
		});
		
		$('#wasEarlyDisclosureYes').click(function(){
			// deselect opposing checkbox
			$('#wasEarlyDisclosureNo').attr('checked', false);
			if(earlyDisclosureBool=='false'){
				// declare variable
				disclosure=$('#wasEarlyDisclosureYes').prop('checked');
			}
		});
		
		$('#wasEarlyDisclosureNo').click(function(){
			// deselect opposing checkbox
			$('#wasEarlyDisclosureYes').attr('checked', false);
			if(earlyDisclosureBool=='false'){
				// declare variable
				disclosure='false';
			}
		});

		// AJAX Post script		
		// comments from here on down are for debug.
		*/

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
			// get name
			var first = $('#first').val();
			var last = $('#last').val();
			var conditionally_approved = $('#conditionally_approved').val();
			var conditionally_approved_date = $('#conditionally_approved_year').val()+'-'+$('#conditionally_approved_month').val()+'-'+$('#conditionally_approved_day').val();
			var appraisal_ordered = $('#appraisal_ordered').val();
			var appraisal_ordered_date = $('#appraisal_ordered_year').val()+'-'+$('#appraisal_ordered_month').val()+'-'+$('#appraisal_ordered_day').val();
			var appraisal_approved = $('#appraisal_approved').val();
			var appraisal_approved_date = $('#appraisal_approved_year').val()+'+'+$('#appraisal_approved_month').val()+'-'+$('#appraisal_approved_day').val();
			var appraisal_comments = $('#appraisal_comments').val();
			var loan_status = $('#loan_status').val();
			var loan_status_comments = $('#loan_status_comments').val();
			var title_work_ordered = $('#title_work_ordered').val();
			var title_work_ordered_date = $('#title_work_ordered_year').val()+'-'+$('#title_work_ordered_month').val()+'-'+$('#title_work_ordered_day').val();
			var title_work_approved = $('#title_work_approved').val();
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

			// If customer doesn't enter a name, alert them to enter one. Post will not occur without a name.
			if(($('#first').val()==''||$('#first').val()=='First Name')||($('#last').val()==''||$('#last').val()=='Last Name')){alert('Check Name');}else{// this should be cleaner
				if(nameCheck=='true'){
					$.post('php/submit.php',{
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
							$('#requestAlert').animate({'opacity':'1'},500).css({'visibility':'visible','color':'#55FF55','font-size':'18px'}).html('Your loan was entered succesfully.');
						}else if(data=='1'){
							$('#requestAlert').animate({'opacity':'1'},500).css({'height':'50px','visibility':'visible','color':'#FF5555','font-size':'18px'}).html('There was a problem processing your loan.<br /> Please contact an administrator for further assistance.');
						}
						// shut it down before someone gets confused
						setTimeout(function(){
							$('#requestAlert').animate({'opacity':'0'},500,function(){
								$(this).css({'height':'25px','visibility':'hidden'});
							});
						},3000);
							// send this first and last name to setSession.php
							$.post('php/setSession.php',{first:first,last:last},function(){
								$('#sendRequest').css({'left':'270px'});
								$('#printPreview').css({'visibility':'visible'});
							});
							// now that id session var is set, refresh page to printable.php printable will have the print button
							// this needs to be delayed for a while. Maybe pull '#requestAlert's function down to below here.
							//window.location.href='index.php';
					});
				}else{alert('Check Name');}
			}
		});
		
		// Print Preview
		$('#print_preview').click(function(){
			// redirect to printable form
			window.location.href='php/printable.php';
		});
		
		// Cancel
		$('#cancel_update').click(function(){
			// redirect to printable form
			window.location.href='index.php';
		});
		
		// Update
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
