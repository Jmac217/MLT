// debug

function debug(string){
	console.log(string);
}

$.post('TODO.md',function(data){
	var showdown = new Showdown.converter();
	$('#markdown').html(showdown.makeHtml(data));
});

// $("#dropdown").animate({"height":"620px"},200);

// alert(split_date(conditionally_approved_date, "year"));
