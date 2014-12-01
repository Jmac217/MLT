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