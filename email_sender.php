<?
    $to = 'tickets@avatarfest.com.ua';
    $subject = $_GET['subject'];
    $message = '
            <html>
                <head>
                    <title>Заявка / FK /'.$subject.'</title>
                </head>
                <body>
                    <p><b>Имя:</b> '.$_GET['name'].'</p>
                    <p><b>Телефон:</b> '.$_GET['phone'].'</p>  
                    <p><b>Email:</b> '.$_GET['email'].'</p>                                   
                </body>
            </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    mail($to, $subject, $message, $headers);
?>