<?php
if (isset($_SERVER['HTTP_HOST']) && strpos($_SERVER['HTTP_HOST'], 'www.') === 0) {
    $newUrl = 'https://' . substr($_SERVER['HTTP_HOST'], 4) . $_SERVER['REQUEST_URI'];
    header("Location: $newUrl", true, 301);
    exit;
}
?>