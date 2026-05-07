<?php
/**
 * mail.php — Surrogacy Consulting Services Ltd
 * Handles both the Contact form and the Surrogate Application form.
 * All mail is delivered to: info@surrogacyconsultingltd.com
 */

header('Content-Type: application/json');

// ── Config ────────────────────────────────────────────────────────────────────
define('RECIPIENT',   'info@surrogacyconsultingltd.com');
define('SENDER_NAME', 'Surrogacy Consulting Website');
define('SITE_URL',    'https://surrogacyconsultingltd.com');

// ── Helpers ───────────────────────────────────────────────────────────────────
function respond(bool $success, string $message): void {
    echo json_encode(['success' => $success, 'message' => $message]);
    exit;
}

function sanitize(string $value): string {
    return htmlspecialchars(strip_tags(trim($value)), ENT_QUOTES, 'UTF-8');
}

function field(string $key): string {
    return sanitize($_POST[$key] ?? '');
}

// ── Method guard ──────────────────────────────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(false, 'Method not allowed.');
}

// ── Honeypot check ────────────────────────────────────────────────────────────
if (!empty($_POST['website'])) {
    // Silently succeed to confuse bots
    respond(true, 'Message sent.');
}

// ── Determine form type ───────────────────────────────────────────────────────
// The surrogate form sets subject = 'Surrogate Application'
$subject_raw = field('subject');
$is_surrogate = (stripos($subject_raw, 'surrogate') !== false || stripos($subject_raw, 'application') !== false);

// ── Required field validation ─────────────────────────────────────────────────
$name  = field('name');
$email = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone = field('phone');
$msg   = field('message');

if (empty($name)) {
    respond(false, 'Name is required.');
}
if (!$email) {
    respond(false, 'A valid email address is required.');
}
if (empty($msg)) {
    respond(false, 'Message body is required.');
}

// ── Build email ───────────────────────────────────────────────────────────────
if ($is_surrogate) {
    $subject = "New Surrogate Application — {$name}";
} else {
    $inquiry = $subject_raw ?: 'General Inquiry';
    $subject = "Website Enquiry [{$inquiry}] — {$name}";
}

// Plain-text body: message already contains the full formatted body from JS
$body  = "From:    {$name}\r\n";
$body .= "Email:   {$email}\r\n";
$body .= "Phone:   {$phone}\r\n";
$body .= str_repeat('─', 50) . "\r\n\r\n";
$body .= $msg;

// ── Headers ───────────────────────────────────────────────────────────────────
$headers  = "From: " . SENDER_NAME . " <no-reply@surrogacyconsultingltd.com>\r\n";
$headers .= "Reply-To: {$name} <{$email}>\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// ── Send ──────────────────────────────────────────────────────────────────────
$sent = mail(RECIPIENT, $subject, $body, $headers);

if ($sent) {
    respond(true, 'Your message has been sent successfully.');
} else {
    // Log error server-side without exposing details to the client
    error_log('[mail.php] mail() failed — to: ' . RECIPIENT . ' | from: ' . $email . ' | subject: ' . $subject);
    respond(false, 'Unable to send your message right now. Please call us directly or try again later.');
}
