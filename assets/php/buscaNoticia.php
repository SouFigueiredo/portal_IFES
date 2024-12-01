<?php
    require 'connect.php';
    // consulta SQL
    $sql = "SELECT titulo, subtitulo, imagem, preview, descricao, data FROM noticias ORDER BY data DESC";
    $result = $conn->query($sql);

    $addNoticias = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $addNoticias[] = $row;
        }
    }

    header('Content-Type: application/json');
    echo json_encode($addNoticias);

    $conn->close();
?>