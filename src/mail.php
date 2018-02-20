<?php
$to      = 'siniak.tomasz@gmail.com';
$name    = $_POST['name'];
$email   = $_POST['email'];
$message = $_POST['textarea'];
$subject = 'Nowa wiadomość od: ' . $name . ' (' . $email . ')';
$headers = 'From: '  . $name . ' (' . $email . ')';
$headers = "Content-Type: text/html; charset=utf-8\r\n";

mail($to, $subject, $message, $headers);
?>



<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="keywords" content="sintom, sintom.pl, porfolio, front-end wrocław, strony interentowe wrocław, strony www wrocław">
        <meta name="description" content="Strony internetowe dopasowane do Twojego biznesu">
        <title> sintom.pl | Programista stron internetowych ||</title>
        <!--build:css -->
        <link rel="stylesheet" href="./css/style.css" />
        <!--endbuild -->
    
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css">
        
    
        <!-- Place favicon.ico in the root directory -->
        
        <link rel="icon" href="data:;base64,iVBORw0KGgo=">
    
</head>

<body>
    <div class="mail-box">
        <figure class="mail-box__photo">
            <img src="img/smile.svg" alt="">
        </figure>
        <h3 class="mail-box__title">Thank You for your email!</h3>
        <h4 class="mail-box__subtitle">I will contact you soon</h4>
        <a href="/" class="mail-box__link">Back</a>
    </div>
</body>

</html>