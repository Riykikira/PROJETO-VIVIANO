<?php
$usuario = "root";
$senha = "";                
$host = "localhost";


$database_login = "login";
$conexao_login = new mysqli($host, $usuario, $senha, $database_login);
$mysqli = $conexao_login;



if ($mysqli -> connect_errno) {
    die("Falha ao conectar ao banco 'login': " . $mysqli -> connect_error);
    exit();
}
 
?>
