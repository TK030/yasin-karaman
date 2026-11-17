<?php
// ===== Yasin Karaman Nakliyat — Contact Form Handler =====
// Deze PHP file verwerkt het contactformulier en stuurt een e-mail.

header('Content-Type: application/json');

// Alleen POST toestaan
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['success' => false, 'message' => 'Method not allowed']);
  exit;
}

// Velden ophalen en sanitize
$name = trim(filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS));
$phone = trim(filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_SPECIAL_CHARS));
$message = trim(filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS));

// Validatie
if (empty($name) || empty($phone) || empty($message)) {
  http_response_code(400);
  echo json_encode(['success' => false, 'message' => 'Tüm alanları doldurun.']);
  exit;
}

// E-mail instellingen
$to = 'Yasin42karaman@gmail.com';
$subject = 'Yeni İletişim Formu: ' . $name;
$body = "İsim: $name\nTelefon: $phone\n\nMesaj:\n$message\n\n---\nGönderim tarihi: " . date('d.m.Y H:i');
$headers = "From: noreply@yasinkaramannakliyat.com\r\n";
$headers .= "Reply-To: noreply@yasinkaramannakliyat.com\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// E-mail versturen
$sent = mail($to, $subject, $body, $headers);

if ($sent) {
  echo json_encode(['success' => true]);
} else {
  http_response_code(500);
  echo json_encode(['success' => false, 'message' => 'E-posta gönderilemedi.']);
}
?>
