<?php
$field_name = $_POST['cf_name'];
$field_coname = $_POST['cf_coname'];
$field_phone = $_POST['cf_phone'];
$field_email = $_POST['cf_email'];
$field_message = $_POST['cf_message'];

$mail_to = 'eric@midwestdiesel.com';

$subject = 'Trailer quote request ' .$field_name;

$headers = "From: $cf_name\r\n";
$headers = "Company: $cf_coname\r\n";
$headers = "Phone: $cf_phone\r\n";
$headers = "Reply-To: $cf_email\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status)  { ?>
	<script language="javascript" type="text/javascript">
	//Print a message
	alert('Thank you for the message, we will be in contact with you shortly');
	window.location = 'index.html';
	</script>
	<?php
	}
	
else { ?>
	<script language="javascript" type="text/javascript">
	//Print a message
	alert('Message failed, Please try again');
	window.location = 'index.html';
	</script>
	<?php
	}
	?>
	
