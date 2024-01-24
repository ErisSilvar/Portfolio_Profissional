<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = $_POST['fullname'];
    $emaill = $_POST['emaill'];
    $numbertel = $_POST['numbertel'];
    $emaillsubject = $_POST['emaillsubject'];
    $message = $_POST['message'];

    $to = 'erisemanoelrs@gmail.com';
    $subject = 'Nova mensagem do formulário de contato';
    $headers = 'From: ' . $emaill . "\r\n" .
        'Reply-To: ' . $emaill . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);

    
    header('Location: index.html');
    exit;
} else {
   
    header('Location: index.html');
    exit;
}
?>
