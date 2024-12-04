<?php
require 'connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nomeEvent = $_POST['addNomeEvent'];
    $data = $_POST['addDataEvent'];
    $locEvent = $_POST['addLocEvent'];
    $descricao = $_POST['addDescricaoEvent'];

    if (isset($_FILES['addImgEvent']) && $_FILES['addImgEvent']['error'] === UPLOAD_ERR_OK) {
        $diretorio_upload = '../images/uploads/eventos/';
        $nome_imagem = uniqid() . '-' . basename($_FILES['addImgEvent']['name']);
        $caminho_imagem = $diretorio_upload . $nome_imagem;
        if (!is_dir($diretorio_upload)) {
            mkdir($diretorio_upload, 0777, true);
        }
        if (move_uploaded_file($_FILES['addImgEvent']['tmp_name'], $caminho_imagem)) {
            $sql = 'INSERT INTO eventos (nomeEvent, data, imagem, locEvent, descricao) VALUES (?, ?, ?, ?, ?)';
            $stmt = $conn->prepare($sql);
            
            if ($stmt === false) {
                die("Erro ao preparar a declaração: " . $conn->error);
            }
            $stmt->bind_param("sssss", $nomeEvent, $data, $nome_imagem, $locEvent, $descricao);
            if ($stmt->execute()) {
                echo "Evento Adicionado com sucesso!";
            } else { 
                echo "Erro ao adicionar o Evento. Código: " . $stmt->error; 
            }
            $stmt->close();
        } else {
            echo "Erro ao fazer o upload da imagem";
        }
    } else {
        echo "Erro ao enviar a imagem";
    }
}

?>