<html>
<head>
<!-- uncomment for modular debugging -->
<!--<link rel='stylesheet' type='text/css' href='../css/index.css' />-->
<script type='text/javascript' src='js/jquery.js'></script>
</head>
<?php include 'connect.php';

	/*
	$num = mysql_query("SELECT id FROM loan");
	$row = mysql_fetch_assoc($num);
	$max = mysql_num_rows($num);
	//echo $max;
	//echo '<select>';
	for($i=1;$i<=$max;$i++){
		$query = mysql_query("SELECT id,first,last FROM loan WHERE id='$i'")or die(mysql_error());
		$row = mysql_fetch_assoc($query);
		if ($row['id'] = $i ){
			echo ' '.$row['id'];
			echo '<option>';
			echo $row['first'].' '.$row['last'];
			echo '</option>';
		}
	}
	//echo '</select>';
	*/
	
	$maxQuery = mysql_query("SELECT id FROM loan");
	$maxRow = mysql_fetch_assoc($maxQuery);
	$max = mysql_num_rows($maxQuery);
	$cap = 1000;// well for now I have hard-coded the amount of slots available for use. There is no limit on the db so if there is ever more than 40, which there shouldn't be, this is the thing to rewrite.
	$height = 20;
	
	$i=0;
	$t=0;
	
	echo '
	<div id="dropdownContainer">
		<div id="dropdownSelected" class="dropdown_box">
			<!--<i>New</i>-->
			<i id="dropdown_title">Customers</i>
			<input id="customer_search" type="text" value="Customer Last Name Search..."/>
		</div>
			<div id="dropdown" class="dropdown_box">';
						
	while($i<=$cap){ // loop through all rows
		$row = mysql_fetch_assoc(mysql_query("SELECT id,first,last FROM loan WHERE id='$i'")); // select only the rows where user exists and that are unread
		if(isset($row['first'])&&isset($row['last'])){
			if($row['id']=$i){
				//if($t=0){$top=0;}else{
				$top = ($t*$height)/*.'px'*/; // this dynamically sets message top
				//}
				$id=$row['id']; // this message_id
						
						echo '
						<div class="customerContainer" style="top:'.$top.'px">
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
	echo '
				<div id="dropdownExtend" class="bordered"><div id="dropdownExtendText">Extend</div></div>
				<div id="dropdownClose" class="bordered"><div id="dropdownCloseText">Close</div></div>
			</div>
	</div>
	
	<!--<script type="text/javascript" src="../js/jquery.js"></script>--><!-- this may go into the head, since its available -->
	<script type="text/javascript">
			$("#dropdownExtend").click(function(){
				$("#dropdown").animate({"height":"'.$dropHeight.'px"},200);
			});
			$("#dropdownClose").click(function(){
				$("#dropdown").animate({"height":"10px"},200);
			});
			//alert();
		
	</script>
	<!--<script type="text/javascript" src="../js/index.js"></script>-->';// this could also go into the head...

	/*
	
		instead of a select.option menu, I'm going to create a set of divs with classes and dynamic tops to act as a dynamic and fuller featured list.
		psuedo
		--------
			dropdown -- container div with a set position.
				customer -- will have dynamic top set to accumulative height.
					options   -- on mouse.select customer contents populate the fields/checkboxes for editing. This means that instead of an 'upload', db contents must be 'updated'.
						remove -- on mouse.hover an x button will pop up over the name to remove from list. List then gets regenerated
	
	*/
	
			//$query = mysql_query("SELECT first,last FROM loan WHERE id='$i'");
		//echo '<option>'.$row['first'].' '.$row['last'].'</option>';
		//echo '<option></option>';
?>
<!-- I may remove these and replace them into the head -->
<!--<script type='text/javascript' src='../js/jquery.js'></script>-->
<!--<script type='text/javascript' src='../js/index.js'></script>-->
</html>
