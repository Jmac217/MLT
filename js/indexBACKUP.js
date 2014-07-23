$(document).ready(function(){
	// global variables, used for upload post
	
	/*** This File Could Use Some Cleaning Up ***/
	
	//alert($('#dropdownFeedback').attr('alt'));
	
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
	
			function resetCheckboxes(){
			$('#wasLoanAcceptedYes').attr('checked', false);
			$('#wasLoanAcceptedNo').attr('checked', false);
			$('#isAdverseActionYes').attr('checked', false);
			$('#isAdverseActionNo').attr('checked', false);
			$('#willBeRejectedYes').attr('checked', false);
			$('#willBeRejectedNo').attr('checked', false);
			$('#wasEarlyDisclosureNo').attr('checked', false);
			$('#wasEarlyDisclosureYes').attr('checked', false);
			$('#deliveredToHMDA').attr('checked', false);
			}
	
	//$('#box').load('php/dropdown.php');
	
	// dropdown functionality
	$('#dropdownExtend').hover(function(){$(this).css({'background-color':'#777777','border':'1px solid','cursor':'pointer'});}).mouseleave(function(){$(this).css({'background-color':'#555555','border':'none'});});
	$('#dropdownExtend').click(function(){
		$(this).css({'visibility':'hidden'});
		$('#dropdownClose').css({'visibility':'visible'});
		// get num_rows from database: if 0 display, in dropdownFeedback, "No loans have been added".
		$.post('php/numRows.php', function(data){
			if (data=='0'){$('#dropdownFeedback').html('There are no existing loans.').fadeOut(5000);};
			//alert(data);
		});
		// resize to $height... This block may need to be set in dropdown.php for variable scope.
		// display customers - set visibility
		//$('#dropdown').animate({'animate':'200px'});
	});
	$('#dropdownClose').hover(function(){$(this).css({'background-color':'#777777','border':'1px solid','cursor':'pointer'});}).mouseleave(function(){$(this).css({'background-color':'#555555','border':'none'});});
	$('#dropdownClose').click(function(){
		$(this).css({'visibility':'hidden'});
		$('#dropdownExtend').css({'visibility':'visible'});
		// resize to $height... This block may need to be set in dropdown.php for variable scope.
		// display customers - set visibility
		//$('#dropdown').animate({'animate':'200px'});
	});
	$('.customer').click(function(){
		// deselect all checkboxes first DOESN'T WORK CORRECTLY
		/*
			$('#isGovMonitoring').attr('checked', false);
			$('#isAdverseActionYes').attr('checked', false);
			$('#isAdverseActionNo').attr('checked', false);
			$('#willBeRejectedYes').attr('checked', false);
			$('#willBeRejectedNo').attr('checked', false);
			$('#wasEarlyDisclosureNo').attr('checked', false);
			$('#wasEarlyDisclosureYes').attr('checked', false);
			$('#deliveredToHMDA').attr('checked', false);
			*/
		// make all checkboxes visible
		id=$(this).attr('id');
		//alert(id);
		// get name from id through post
		//resetCheckboxes();
		$.post('php/getProfile.php',{id:id},function(data){
		//alert(data);
		

		
			//$('#dropdownSelected').html(data);
			var xml = data; // well this is the passed xml form
			//alert(xml); // a full xml script alert, debug
			xmlDoc = $.parseXML(xml); // call xmlDoc and the jQuery function 'parseXML' to parse var xml
			$xml = $(xmlDoc); // I'm not sure why I needed to use `$` here, but it worked..... I gotta figure that out.		
			// name
			$first = $xml.find('first'); // searches for the <first></first> tag(s)
			$last = $xml.find('last');
			// dates
			$acceptedDate = $xml.find('acceptedDate');
			$appraisalOrderDate = $xml.find('appraisalOrderDate');
			$appraisalReceiveDate = $xml.find('appraisalReceiveDate');
			$titleOrderDate = $xml.find('titleOrderDate');
			$titleReceiveDate = $xml.find('titleReceiveDate');
			$closeDate = $xml.find('closeDate');
			$lockDate = $xml.find('lockDate');
			$expirationDate = $xml.find('expirationDate');
			// comments
			$appraisalComment = $xml.find('appraisalComment');
			$titleComment = $xml.find('titleComment');
			$lockComment = $xml.find('lockComment');
			// booleans
			$wasLoanAccepted = $xml.find('wasLoanAccepted');
			$isGovMonitoring = $xml.find('isGovMonitoring');
			$willBeRejected = $xml.find('willBeRejected');
			$isAdverseAction = $xml.find('isAdverseAction');
			$wasEarlyDisclosure = $xml.find('wasEarlyDisclosure');
			$deliveredToHMDA = $xml.find('deliveredToHMDA');
			
			acceptedDateUpdate = $acceptedDate.text();
			appraisalOrderDateUpdate = $appraisalOrderDate.text();
			appraisalReceiveDateUpdate = $appraisalReceiveDate.text();
			titleOrderDateUpdate = $titleOrderDate.text();
			titleReceiveDateUpdate = $titleReceiveDate.text();
			closeDateUpdate = $closeDate.text();
			lockDateUpdate = $lockDate.text();
			expirationDateUpdate = $expirationDate.text();
			//DEBUG
			//alert('lock date - '+$lockDate.text());
			//alert('appraisalReceive date - '+$appraisalReceiveDate.text());
			//alert('lock date - '+lockDateUpdate);
			//alert('appraisalReceive date - '+appraisalReceiveDateUpdate);

			// name
			$('#dropdownSelected').html($first.text()+' '+$last.text());// displays what's between the <first> tags
			$('#customerFirst').attr('value', $first.text());
			$('#customerLast').attr('value', $last.text());
			// dates
			// will just show dates where selectors are and set a link next to them saying "Edit", that will switch out the date for the selector.
			// hide selectors
			//// as of right now the entire div is being hidden, may need to change it to just the selector. See MLT.txt for more info.
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
			
			//alert($acceptedDate.text());
			// comments
			// set *Comment values to $data
			$('#appraisalComment').attr('value', $appraisalComment.text());
			$('#titleComment').attr('value', $titleComment.text());
			$('#lockComment').attr('value', $lockComment.text());
			// booleans
			// a set of if statement asking "if true select this else select that", not the most efficient, but it will work for now. I'm just trying to finish this.
			// set all checkfields to visible and also since the last 'box' is at the same top as the last radio, move that box down a line.
			/* makes all checkboxes visible
			$('#loanAccepted').css({'visibility':'visible'});
			$('#wasLoanAccepted').css({'visibility':'visible'});
			$('#wasLoanAcceptedYes').css({'visibility':'visible'});
			$('#wasLoanAcceptedNo').css({'visibility':'visible'});
			$('#loanAcceptedCheckbox').css({'visibility':'visible'});
			
			$('#govMonitoring').css({'visibility':'visible'});
			$('#isGovMonitoring').css({'visibility':'visible'});
			$('#govMonitoringCheckbox').css({'visibility':'visible'});
			
			$('#beRejected').css({'visibility':'visible'});
			$('#willBeRejected').css({'visibility':'visible'});
			$('#willBeRejectedYes').css({'visibility':'visible'});
			$('#willBeRejectedNo').css({'visibility':'visible'});
			$('#beRejectedCheckbox').css({'visibility':'visible'});
			
			$('#adverseAction').css({'visibility':'visible'});
			$('#isAdverseAction').css({'visibility':'visible'});
			$('#isAdverseActionYes').css({'visibility':'visible'});
			$('#isAdverseActionNo').css({'visibility':'visible'});
			$('#adverseActionCheckbox').css({'visibility':'visible'});
			
			$('#deliveredTo').css({'visibility':'visible','top':'200px'});
			$('#deliveredToCheckbox').css({'visibility':'visible'});
			$('#deliveredToHMDA').css({'visibility':'visible'});
			
			$('#earlyDisclosure').css({'visibility':'visible'});
			$('#earlyDisclosureCheckbox').css({'visibility':'visible'});
			*/
			/*
			$('#earlyDisclosure').css({'visibiliity':'visible'});
			$('#wasEarlyDisclosure').css({'visibiliity':'visible'});
			$('#wasEarlyDisclosureYes').css({'visibility':'visible'});
			$('#wasEarlyDisclosureNo').css({'visibility':'visible'});
			$('#earlyDisclosureCheckbox').css({'visibiliity':'visible'});
			*/

			// hide selectors, they're broken anyway
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
			
			/*
			old broken way
			if ($wasLoanAccepted.text()=='true'){
			//alert('loanAccepted true');
				// #wasLoanAcceptedYes attr checked set to true
				// #wasLoanAcceptedNo attr checked set to false
				$('#wasLoanAcceptedNo').attr('checked', false);
				$('#wasLoanAcceptedYes').attr('checked', true);
			}else if($wasLoanAccepted.text()=='false'){
			//alert('loanAccepted false');
				// #wasLoanAcceptedNo attr checked set to true
				// #wasLoanAcceptedYes attr checked set to false
				$('#wasLoanAcceptedYes').attr('checked', false);
				$('#wasLoanAcceptedNo').attr('checked', true);
			}else if($wasLoanAccepted.text()=='none'){
				$('#wasLoanAcceptedNo').attr('checked', false);
				$('#wasLoanAcceptedYes').attr('checked', false);
			}
			if ($isGovMonitoring.text()=='true'){
			//alert('govMonitoring true');
				// #wasLoanAccepted attr checked set to true
				$('#isGovMonitoring').attr('checked', true);
			}else if($isGovMonitoring.text()=='false'){
			//alert('govMonitoring false');
				// #wasLoanAccepted attr checked set to false				
				$('#isGovMonitoring').attr('checked', false);
			}else if($isGovMonitoring.text()=='none'){
				$('#isGovMonitoringNo').attr('checked', false);
				$('#isGovMonitoringYes').attr('checked', false);
			}
			if ($willBeRejected.text()=='true'){
			//alert('beRejected true');
				// #wasLoanAcceptedYes attr checked set to true
				// #wasLoanAcceptedNo attr checked set to false
				$('#willBeRejectedNo').attr('checked', false);
				$('#willBeRejectedYes').attr('checked', true);
			}else if($willBeRejected.text()=='false'){
			//alert('beRejected false');
				// #wasLoanAcceptedNo attr checked set to true
				// #wasLoanAcceptedYes attr checked set to false
				$('#willBeRejectedYes').attr('checked', false);
				$('#willBeRejectedNo').attr('checked', true);
			}else if($willBeRejected.text()=='none'){
				$('#willBeRejectedNo').attr('checked', false);
				$('#willBeRejectedYes').attr('checked', false);
			}
			if ($isAdverseAction.text()=='true'){
			//alert('advserseAction true');
				// #wasLoanAcceptedYes attr checked set to true
				// #wasLoanAcceptedNo attr checked set to false
				$('#isAdverseActionNo').attr('checked', false);
				$('#isAdverseActionYes').attr('checked', true);
			}else if($isAdverseAction.text()=='false'){
			//alert('advserseAction false');
				// #wasLoanAcceptedNo attr checked set to true
				// #wasLoanAcceptedYes attr checked set to false
				$('#isAdverseActionYes').attr('checked', false);
				$('#isAdverseActionNo').attr('checked', true);
			}else if($isAdverseAction.text()=='none'){
				$('#isAdverseActionNo').attr('checked', false);
				$('#isAdverseActionYes').attr('checked', false);
			}
			if ($deliveredToHMDA.text()=='true'){
			//alert('delivered true');
				// #wasLoanAcceptedYes attr checked set to true
				// #wasLoanAcceptedNo attr checked set to false
				$('#deliveredToHMDA').attr('checked', true);
			}else if($deliveredToHMDA.text()=='false'){
			//alert('delivered false');
				// #wasLoanAcceptedNo attr checked set to true
				// #wasLoanAcceptedYes attr checked set to false
				$('#deliveredToHMDA').attr('checked', false);
			}else if($deliveredToHMDA.text()=='none'){
				$('#deliveredToHMDA').attr('checked', false);
			}
			if ($wasEarlyDisclosure.text()=='true'){
			//alert('earlyDisclosure true');
			$('#wasEarlyDisclosureNo').attr('checked', false);
				$('#wasEarlyDisclosureYes').attr('checked', true);
			}else if($wasEarlyDisclosure.text()=='false'){
			//alert('earlyDisclosure false');
			$('#wasEarlyDisclosureYes').attr('checked', false);
				$('#wasEarlyDisclosureNo').attr('checked', true);
			}else if($wasEarlyDisclosure.text()=='none'){
				$('#wasEarlyDisclosureNo').attr('checked', false);
				$('#wasEarlyDisclosureYes').attr('checked', false);
			}
			*/
			
			/* $('#').attr('checked', true or false); */
			// this should be straight forward, but this is a crappy way of doing things...
			
			// set Update button to visible and Send to hidden
			$.post('php/setSessionFromID.php',{id:id});
			$('#sendRequest').css({'visibility':'hidden'});
			$('#updateRequest').css({'visibility':'visible','left':'260px'});
			$('#cancelUpdate').css({'visibility':'visible'});
			$('#printPreview').css({'visibility':'visible', 'left':'397px'});
			// this is just a big hack........
			//$('#dropdown').animate({'height':'10px'},function(){
				//$('#dropdownCloseText').html('Extend');
				//$('#dropdownClose').click(function(){
					//$('#dropdownFeedback').attr('alt','1');
					//alert($('#dropdownFeedback').attr('alt'));
					//window.location.href='index.php';
				//});
			//});
			// this is where the cancel button will go
			
			/*************************/
			/** TERRIBLE FIX **********/
			/************************/
			/*
			$('.customer').click(function(){
				window.location.href='index.php';
			});
			*/
			
		});
	});
	/* end of customer click */
	
	// 'edit' checkbox click functions
		
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
	/*
	$('#appraisalDateInfoLink').click(function(){
		$('#appraisalDateInfo').css({'visibility':'hidden'});
		$('#appraisalDateWrapper').css({'visibility':'visible'});
		appraisalOrderDateUpdate = 'true';
	});
	*/
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
	
	$('.customer').hover(function(){
		// display options, if hovered display x, else it's hidden.
		$(this).css({'background-color':'#666666','cursor':'pointer'});
		$('.remove').css({'visibility':'visible'});
	}).mouseout(function(){
		$(this).css({'background-color':'#222222','cursor':'default'});
	});
	$('.options').hover(function(){/* not much */});
	
	// Mouse Over functions.. I'd like to get these working.
	
	$(".remove").hover(function(){
			$(this).css({'background-image':'url("res/x_red.png")'});
	}).mouseout(function(){
			$(this).css({'background-image':'url("res/x_blue.png")'});
	});
	
	$('.remove').click(function(){
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
	
	// field focus functions - needs more comments, and probably fixed up a little nicer
	// Customer Name
	$('#customerFirst').focus(function(){
		$(this).attr('value', '').css({'color':'black'});
	}).blur(function(){
		var alt = $(this).attr('alt');
		$(this).attr('value', alt);
		/*
		if ($(this).attr('value')==alt){
		$(this).css({'color':'#777777'});
		}else{$(this).css({'color':'black'});}
		*/
	});
	
		$('#customerLast').focus(function(){
		$(this).attr('value', '').css({'color':'black'});
	}).blur(function(){
		var alt=$(this).attr('alt');
		$(this).attr('value', alt);//.css({'color':'#777777'});
	});

	// Comments
		$('#lockComment').focus(function(){
			$(this).attr('value','');
		}).blur(function(){
			var alt=$(this).attr('alt');
			$(this).attr('value', alt);
		});
		
		$('#appraisalComment').focus(function(){
			$(this).attr('value','');
		}).blur(function(){
			var alt=$(this).attr('alt');
			$(this).attr('value', alt);
		});
	
		$('#titleComment').focus(function(){
			$(this).attr('value', '');
		}).blur(function(){
			var alt=$(this).attr('alt');
			$(this).attr('value', alt);
		});
		
	// Checkbox Functions

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

		// Customer Name Check -- These should be placed near the top
		$('#customerFirst').blur(function(){
			// check first and last name against the check
			var first = $('#customerFirst').val();
			var last = $('#customerLast').val();
			if (first != 'First Name'){
				$.post('php/nameCheck.php',{first:first,last:last},function(data){
					if (data == '1'){$('#customerNameCheck').html("This name is already in database.").css({'color':'red','left':'350px'});nameCheck='false';}
					if (data == '0'){$('#customerNameCheck').html("This name is okay.").css({'color':'#00FF00','left':'400px'});nameCheck='true';}
					if(first == 'First Name' || last == 'Last Name'){$('#customerNameCheck').html("Please Enter A Valid Name.").css({'color':'black','left':'350px'});nameCheck='false';}
					//$('#customerNameCheck').html(data);
				});
			}else{$('#customerNameCheck').html("Please Enter A First Name.").css({'color':'black','left':'350px'});nameCheck='false';}
		});
		/*
		^
		|-- These are the same and need to be turned into a function that accepts an #id
		v
		*/
		$('#customerLast').keyup(function(){
			// check first and last name against the check
			var first = $('#customerFirst').val();
			var last = $('#customerLast').val();
			if (last != 'Last Name'){
				$.post('php/nameCheck.php',{first:first,last:last},function(data){
					if (data == '1'){$('#customerNameCheck').html("This name is already in database.").css({'color':'red','left':'350px'});nameCheck='false';}
					if (data == '0'){$('#customerNameCheck').html("This name is okay.").css({'color':'00FF00','left':'400px'});nameCheck='true';$('#dropdownSelected').html(first+' '+last);}
					if(first == 'First Name' || last == 'Last Name'){$('#customerNameCheck').html("Please Enter A Valid Name.").css({'color':'black','left':'350px'});nameCheck='false';}
					//$('#customerNameCheck').html(data);
				});
			}else{$('#customerNameCheck').html("Please Enter A Last Name.").css({'color':'black','left':'350px'});nameCheck='false';}
		});
		
		$('#sendRequest').click(function(){
			// get name
			var customerFirst = $('#customerFirst').val();
			var customerLast = $('#customerLast').val();
			// figure out where these go -v			
			var appraisalComment = $('#appraisalComment').val();
			var titleComment = $('#titleComment').val();
			var lockComment = $('#lockComment').val();
			if($('#appraisalComment').val()==$('#appraisalComment').attr('alt')||$('#appraisalComment').val()==''){appraisalComment='none';}
			if($('#titleComment').val()==$('#titleComment').attr('alt')||$('#titleComment').val()==''){titleComment='none';}
			if($('#lockComment').val()==$('#lockComment').attr('alt')||$('#lockComment').val()==''){lockComment='none';}
			
			//alert('lock comment ->'+lockComment);
			
			// combine Year - Month - Day to correct format for database.
			var expirationDate = $('#expirationYear').val() +'-'+ $('#expirationMonth').val() +'-'+ $('#expirationDay').val();	
			var lockDate = $('#lockYear').val() +'-'+ $('#lockMonth').val() +'-'+ $('#lockDay').val();
			var closeDate = $('#closeYear').val() +'-'+ $('#closeMonth').val() +'-'+ $('#closeDay').val();
			var titleReceiveDate = $('#titleReceiveYear').val() +'-'+ $('#titleReceiveMonth').val() +'-'+ $('#titleReceiveDay').val();
			var titleOrderDate = $('#titleOrderYear').val() +'-'+ $('#titleOrderMonth').val() +'-'+ $('#titleOrderDay').val();
			var appraisalReceiveDate = $('#appraisalReceiveYear').val() +'-'+ $('#appraisalReceiveMonth').val() +'-'+ $('#appraisalReceiveDay').val();
			var appraisalOrderDate = $('#appraisalOrderYear').val() +'-'+ $('#appraisalOrderMonth').val() +'-'+ $('#appraisalOrderDay').val();
			var acceptedDate = $('#acceptedYear').val() +'-'+ $('#acceptedMonth').val() +'-'+ $('#acceptedDay').val();
			var receiveDate = $('#receiveYear').val() +'-'+ $('#receiveMonth').val() +'-'+ $('#receiveDay').val();
			
			// set defaults for returns.
			if(expirationDate=='2013-01-01'){expirationDate='0000-00-00';}
			if(lockDate=='2013-01-01'){lockDate='0000-00-00';}
			if(closeDate=='2013-01-01'){closeDate='0000-00-00';}
			if(titleReceiveDate=='2013-01-01'){titleReceiveDate='0000-00-00';}
			if(titleOrderDate=='2013-01-01'){titleOrderDate='0000-00-00';}
			if(appraisalReceiveDate=='2013-01-01'){appraisalReceiveDate='0000-00-00';}
			if(appraisalOrderDate=='2013-01-01'){appraisalOrderDate='0000-00-00';}
			if(acceptedDate=='2013-01-01'){acceptedDate='0000-00-00';}
			if(receiveDate=='2013-01-01'){receiveDate='0000-00-00';}
			
				//    DEBUG
				//		alert(loan);
				//		alert(rejected);
				//		alert(adverse);
				//		alert(delivered);
				//		alert(disclosure);

			// If customer doesn't enter a name, alert them to enter one. Post will not occur without a name.
			if(($('#customerFirst').val()==''||$('#customerFirst').val()=='First Name')||($('#customerLast').val()==''||$('#customerLast').val()=='Last Name')){alert('Check Name');}else{// this should be cleaner
				if(nameCheck=='true'){
					//alert(appraisalComment+' '+titleComment+' '+lockComment);
					$.post('php/submit.php',{customerFirst:customerFirst,customerLast:customerLast,monitor:monitor,loan:loan,rejected:rejected,adverse:adverse,delivered:delivered,disclosure:disclosure,expirationDate:expirationDate,lockDate:lockDate,closeDate:closeDate,titleReceiveDate:titleReceiveDate,titleOrderDate:titleOrderDate,appraisalReceiveDate:appraisalReceiveDate,appraisalOrderDate:appraisalOrderDate,acceptedDate:acceptedDate,receiveDate:receiveDate,appraisalComment:appraisalComment,titleComment:titleComment,lockComment:lockComment},function(data){
						alert(data);
						if(data=='0'){
							$('#requestAlert').animate({'height':'80px'},250).css({'visibility':'visible','color':'#00FF00','font-size':'18px'}).html('Your loan was entered succesfully.');
						}else if(data=='1'){
							$('#requestAlert').animate({'height':'80px'},250).css({'visibility':'visible','color':'#FF0000	','font-size':'18px'}).html('There was a problem processing your loan.<br /> Please contact an administrator for further assistance.');
						}
						// shut it down before someone gets confused
						$('#requestAlert').animate({'height':'0px'},8000,function(){
							$(this).css({'visibility':'hidden'});
						});
							// send this first and last name to setSession.php
							$.post('php/setSession.php',{customerFirst:customerFirst,customerLast:customerLast},function(){
								$('#sendRequest').css({'left':'270px'});
								$('#printPreview').css({'visibility':'visible'});
							});
							//alert(customerFirst+' '+customerLast);
							// now that id session var is set, refresh page to printable.php printable will have the print button
							window.location.href='index.php';
					
					});
				}else{alert('Check Name');}
			}
		});
			
		$('#printPreview').click(function(){
			// redirect to printable form
			window.location.href='php/printable.php';
		});
		$('#cancelUpdate').click(function(){
			// redirect to printable form
			window.location.href='index.php';
		});
		
		$('#updateRequest').click(function(){

			//alert(loanAcceptedBool);
			//alert(loanAcceptedAnswer);
			/*
			alert(govMonitoringBool);
			alert(beRejectedBool);
			alert(adverseActionBool);
			alert(deliveredToBool);
			alert(earlyDisclosureBool);
			*/
			
	 		// get boolean values for pass conditionals
			/*
					if bool is false: var = answer as true or false; else var = checkbox.attr();
			*/
			
			// alert('accepted');
			if (loanAcceptedBool == 'false'){
				if(loanAcceptedAnswer=='Yes'){
					var loan = 'true';// not edited, Yes
					// alert(loan);
				}else{
					var loan = 'false';// not editied, No
					// alert(loan);
				}
			}else{//alert($('#wasLoanAcceptedYes').prop('checked')); // debug
				if ($('#wasLoanAcceptedYes').prop('checked')==true){
					var loan = 'true';// edited, Yes
					// alert(loan);
				}else{
					var loan = 'false';// edited, No
					// alert(loan);
				}
			}
			
			// alert('monitoring');
			if (govMonitoringBool == 'false'){
				if(govMonitoringAnswer=='Yes'){
					var monitor = 'true';// not edited, Yes
					alert(monitor);
				}else{
					var monitor = 'false';// not editied, No
					alert(monitor);
				}
			}else{//alert($('#wasLoanAcceptedYes').prop('checked')); // debug
				if ($('#isGovMonitoring').prop('checked')==true){
					var monitor = 'true';// edited, Yes
					// alert(monitor);
				}else{
					var monitor = 'false';// edited, No
					// alert(monitor);
				}
			}
			
			// alert('rejected');
			if (beRejectedBool == 'false'){
				if(beRejectedAnswer=='Yes'){
					var rejected = 'true';// not edited, Yes
					// alert(rejected);
				}else{
					var rejected = 'false';// not editied, No
					// alert(rejected);
				}
			}else{//alert($('#wasLoanAcceptedYes').prop('checked')); // debug
				if ($('#willBeRejectedYes').prop('checked')==true){
					var rejected = 'true';// edited, Yes
					// alert(rejected);
				}else{
					var rejected = 'false';// edited, No
					// alert(rejected);
				}
			}
			
			// alert('adverse');
			if (adverseActionBool == 'false'){
				if(adverseActionAnswer=='Yes'){
					var adverse = 'true';// not edited, Yes
					// alert(adverse);
				}else{
					var adverse = 'false';// not editied, No
					// alert(adverse);
				}
			}else{//alert($('#wasLoanAcceptedYes').prop('checked')); // debug
				if ($('#isAdverseActionYes').prop('checked')==true){
					var adverse = 'true';// edited, Yes
					// alert(adverse);
				}else{
					var adverse = 'false';// edited, No
					// alert(adverse);
				}
			}
			
			// alert('delivered');
			if (deliveredToBool == 'false'){
				if(deliveredToAnswer=='Yes'){
					var delivered = 'true';// not edited, Yes
					// alert(delivered);
				}else{
					var delivered = 'false';// not editied, No
					// alert(delivered);
				}
			}else{//alert($('#wasLoanAcceptedYes').prop('checked')); // debug
				if ($('#deliveredToHMDA').prop('checked')==true){
					var delivered = 'true';// edited, Yes
					// alert(delivered);
				}else{
					var delivered = 'false';// edited, No
					// alert(delivered);
				}
			}
	
			// alert('earlyDisclosre');
			if (earlyDisclosureBool == 'false'){
				if(earlyDisclosureAnswer=='Yes'){
					var disclosure = 'true';// not edited, Yes
					// alert(disclosure);
				}else{
					var disclosure = 'false';// not editied, No
					// alert(disclosure);
				}
			}else{//alert($('#wasLoanAcceptedYes').prop('checked')); // debug
				if ($('#wasEarlyDisclosureYes').prop('checked')==true){
					var disclosure = 'true';// edited, Yes
					// alert(disclosure);
				}else{
					var disclosure = 'false';// edited, No
					// alert(disclosure);
				}
			}
			// // // // 
		
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
			
			// set defaults for returns.
			if(expirationDate=='2013-01-01'){expirationDate='0000-00-00';}
			if(lockDate=='2013-01-01'){lockDate='0000-00-00';}
			if(closeDate=='2013-01-01'){closeDate='0000-00-00';}
			if(titleReceiveDate=='2013-01-01'){titleReceiveDate='0000-00-00';}
			if(titleOrderDate=='2013-01-01'){titleOrderDate='0000-00-00';}
			if(appraisalReceiveDate=='2013-01-01'){appraisalReceiveDate='0000-00-00';}
			if(appraisalOrderDate=='2013-01-01'){appraisalOrderDate='0000-00-00';}
			if(acceptedDate=='2013-01-01'){acceptedDate='0000-00-00';}
			if(receiveDate=='2013-01-01'){receiveDate='0000-00-00';}
			
				/*		
			alert('monitor -'+monitor);
			alert('loan -'+loan);
			alert('rejected -'+rejected);
			alert('adverse -'+adverse);
			alert('delivered -'+delivered);
			*/
			// Debug
			/*
			alert('acceptedDate '+acceptedDate); // working
			
			alert('lockDate '+lockDate); // working
			
			alert('closeDate '+closeDate); // working

			alert('titleReceiveDate '+titleReceiveDate); // working
						
			alert('titleOrderDate '+titleOrderDate); // working
			
			alert('appraisalReceiveDate '+appraisalReceiveDate); // working
			
			alert('appraisalOrderDate '+appraisalOrderDate); // working
			
			alert('expirationDate '+expirationDate); // works
			*/
			
			// I don't think this is necessary because received date should be picked by php when it is first submitted, maybe have it as an editing option? 
			//var receiveDate = $('#receiveYear').val() +'-'+ $('#receiveMonth').val() +'-'+ $('#receiveDay').val();
			//alert(receiveDate);
		
			// get all variables
			// these are just copies from Update

			var customerFirst = $('#customerFirst').val();
			var customerLast = $('#customerLast').val();
			// figure out where these go -v			
			var appraisalComment = $('#appraisalComment').val();
			var titleComment = $('#titleComment').val();
			var lockComment = $('#lockComment').val();
			if($('#appraisalComment').val()==$('#appraisalComment').attr('alt')||$('#appraisalComment').val()==''){appraisalComment='none';}
			if($('#titleComment').val()==$('#titleComment').attr('alt')||$('#titleComment').val()==''){titleComment='none';}
			if($('#lockComment').val()==$('#lockComment').attr('alt')||$('#lockComment').val()==''){lockComment='none';}
			
			// acceptedDate is stil comented out in the following line.
			$.post('php/updateCustomer.php',{id:id,customerFirst:customerFirst,customerLast:customerLast,monitor:monitor,loan:loan,rejected:rejected,adverse:adverse,delivered:delivered,disclosure:disclosure,expirationDate:expirationDate,lockDate:lockDate,closeDate:closeDate,titleReceiveDate:titleReceiveDate,titleOrderDate:titleOrderDate,appraisalReceiveDate:appraisalReceiveDate,appraisalOrderDate:appraisalOrderDate,acceptedDate:acceptedDate/*,receiveDate:receiveDate*/,appraisalComment:appraisalComment,titleComment:titleComment,lockComment:lockComment},function(data){
				//alert(data);
			});
		});

		
		
// 	Checkbox Debug Script
/*
 	if($('#isGovMonitoring').is(':checked')==true){
		alert('true');
	}else{
		alert('false');
	}
	if($('#wasLoanAcceptedYes').is(':checked')==true){
		alert('true');
	}else{
		alert('false');
	}
	if($('#wasLoanAcceptedNo').is(':checked')==true){
		alert('true');
	}else{
		alert('false');
	}
	if($('#willBeRejectedYes').is(':checked')==true){
		alert('true');
	}else{
		alert('false');
	}
	if($('#willBeRejectedNo').is(':checked')==true){
		alert('true');
	}else{
		alert('false');
	}
	if($('#isAdverseActionYes').is(':checked')==true){
		alert('true');
	}else{
		alert('false');
	}
	if($('#isAdverseActionNo').is(':checked')==true){
		alert('true');
	}else{
		alert('false');
	}
	if($('#wasEarlyDisclosure').is(':checked')==true){
		alert('true');
	}else{
		alert('false');
	}
	if($('#deliveredToHMDA').is(':checked')==true){
		alert('true');
	}else{
		alert('false');
	}
*/
});
