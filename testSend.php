<?php

	require("class.phpmailer.php");

	// $mail = new PHPMailer;

	// $body="";
	// $subject = "Заявка с сайта " . $_SERVER['SERVER_NAME'];
	// $body = "Поступила заявка :<br/>";
	// $body .= "<b>Имя:</b> ".$_POST["name"]."<br/>";
	// $body .= "<b>Телефон:</b> ".$_POST["phone"]."<br/>";
	// if ($_POST["size"]) {
	// 	$body .= "<b>Машина:</b> ".$_POST["size"]."<br/>";
	// 	$body .= "<b>Дата:</b> ".$_POST["date"]."<br/>";
	// 	$body .= "<b>Место:</b> ".$_POST["place"]."<br/>";
	// 	$body .= "<b>Грузчики:</b> ".$_POST["gather"]."<br/>";
	// 	// $body .= "<b>Объём:</b> ".$_POST["volume"]."<br/>";
	// }

	// $mail->IsSendmail();
	// $mail->IsHTML(true); 
	// $mail->FromName = 'Вывоз мусора';

	// // $mail->setFrom('info@www.garbageremoval.ru', 'Вывоз мусора'); // от кого (email и имя)

	// $mail->AddAddress('belov@hl2b.ru');
	// $mail->AddAddress('beliiveter1@icloud.com');
	// $mail->AddAddress('beliiveter@list.ru');
	// $mail->AddAddress('plahotin.info@gmail.com');
	// $mail->AddAddress('lelka1288@mail.ru');
	// // $mail->AddAddress('smirnov@dadcan.ru');
	// $mail->CharSet = 'utf-8';
	// $mail->Subject = $subject;
	// $mail->Body    = $body;

	// if(!$mail->Send()) {
	   
	// }


$to = 'plahotin.info@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов

$subject = $_SERVER['SERVER_NAME'];
$userTel  = $_POST['phone'];
$userName  = $_POST['name'];

$message = 'Заявка с сайта <br>';

if ($subject) {
    $message .= '<br>
    Название формы : ' . $subject;
}

if ($userName) {
    $message .= '<br>
    ФИО : ' . $userName;
}

if ($userTel) {
    $message .= '<br>
    Телефон : ' . $userTel;
}


$headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
$headers .= "From: Garbage removal <info@removal.com >\r\n"; //Наименование и почта отправителя

if (mail($to, $subject, $message, $headers)) {
    // mail($userEmail, $subject, $message_2, $headers);
    // echo $notspam;
} else {
    // echo 'error';
}
	
?>