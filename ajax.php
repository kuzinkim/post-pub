<?php
$token   = 'bot5430972450:AAGppSGz0QHen0t2yBbEjHw8hzU09AIaXhs';
$groupid = '-1001661638416';
$text    = "Заполнена форма на сайте:\r\n";
$text   .= "Имя: ".$_POST["name"]."\r\n";
$text   .= "Телефон: ".$_POST["phone"]."\r\n";
$text   .= "Дата: ".$_POST["date"]."\r\n";
$text   .= "Время: ".$_POST["time"]."\r\n";
$text   .= "Кол-во человек: ".$_POST["people"];

if(!$_POST["date"] || !$_POST["time"]) die('{}');

$ch = curl_init();

$endpoint = "https://api.telegram.org/$token/sendMessage";
$params = array('chat_id' => $groupid,'text' => $text);
$url = $endpoint . '?' . http_build_query($params);
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$server_output = curl_exec($ch);

curl_close ($ch);

//echo $server_output;

echo '{"ok":true}';
?>
