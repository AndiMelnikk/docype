<?php 
        $data = json_decode(file_get_contents("php://input"), true);
        $name = $data['name'];
        $phone = $data['phone'];
        $message = $data['message'];

        $to  =  'doctype.site@gmail.com';
        $from = 'amelnik464@gmail.com';

		$subject = "Нове замовлення.";  // Задаем тему письма
        $message = "
            <html>
            <head></head>
            <body>
            <h4>Розробка</h4>
            <ul>
                <li>Ім'я: ".$name."</li>
                <li>Телефон: ".$phone."</li>
                <li>Коментар: ".$message."</li>
            </ul>
            </body>
        </html>
       "; // Формируем сообщение, отправляемое на почту

       $headers = 'From: '.$from . "\r\n" .
       'Reply-To: '.$from . "\r\n" .
       'X-Mailer: PHP/' . phpversion();
       $headers  .= 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

        if (mail($to , $subject, $message, $headers)) { // При помощи функции mail, отправляем сообщение, проверяя отправилось оно или нет
            $result = "Повідомлення відправленно ! Менеджер зв'яжеться з вами )";// Отправка успешна
        }
        else {
            $result = "Сталась помилка"; // Письмо не отправилось
        }
        echo json_encode($result)
?>