<?php
$usuario = "root";
$senha = "";                
$host = "localhost";


$database_funcionarios = "funcionarios";
$conexao_funcionarios = new mysqli($host, $usuario, $senha, $database_funcionarios);
$mysqli = $conexao_funcionarios;

if ($mysqli -> connect_errno) {
    die("Falha ao conectar ao banco 'funcionarios': " . $mysqli -> connect_error);
    exit();
}
 
?>
