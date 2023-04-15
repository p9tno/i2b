<?php
// Загружаем WordPress
require_once( $_SERVER['DOCUMENT_ROOT'] . '/wp-load.php' );


// $to = 'p9tnophp@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
// $userEmail = $_POST['email'];

$to = '';
if (get_field('mail_to', 'option')) {
    $to = get_field('mail_to', 'option');
}

$notspam = $_POST['notspam'];

$subject = $_POST['subject'];
$userTel  = $_POST['tel'];
$userName  = $_POST['name'];
$userMessage = $_POST['message'];
$userEmail = $_POST['email'];
$page = $_POST['page'];
// $totalcost = $_POST['totalcost'];

if ($notspam == 'Not spam') {
} else {
    exit('Exit');
};

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

if ($userMessage) {
    $message .= '<br>
    Собщение : ' . $userMessage;
}

if ($userEmail) {
    $message .= '<br>
    Электронная почта : ' . $userEmail;
}

if ($page) {
    $message .= '<br>
    Отправлено со страницы : ' . $page;
}


$headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
$headers .= "From: RobicLab <info@robiclab.com >\r\n"; //Наименование и почта отправителя

if (mail($to, $subject, $message, $headers)) {
    // mail($userEmail, $subject, $message_2, $headers);
    // echo $notspam;
} else {
    // echo 'error';
}

?>
