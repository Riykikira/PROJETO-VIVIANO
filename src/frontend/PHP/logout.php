<?php
// =============================================
// LOGOUT - Encerrar Sessão
// =============================================

session_start();

// Destruir a sessão
session_destroy();

// Redirecionar para página de login
header("Location: index.html");
exit();
?>
