<?php
//echo "Hello";
$email = $_POST['email'];
$name = $_POST['email'];
$phone = $_POST['phone'];

$subject = "=?utf-8?B?".base64_encode("Message from site")."?=";
$headers = "From: $email\r\nRely-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

$success = mail("strikunvlad@gmail.com", $subject, $message, $headers);
echo $success;
?>