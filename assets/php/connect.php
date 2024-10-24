<?php
$server = "localhost";
$user = "root";
$pass = "";
$db = "portal_ifes";

$conn = new mysqli($server, $user, $pass, $db);

if ($conn->connect_error) {
    die("Falha na conexão, código de erro:" + $conn->connect_error);
} echo "Conexão bem sucedida!";

$conn->close();
?>