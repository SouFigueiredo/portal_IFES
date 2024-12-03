<?php
require 'connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $titulo = $_POST['addNomeEvent'];
    $data = $_POST['addDataEvent'];
    $localEvento = $_POST['addLocEvent'];
    $descricao = $_POST['addDescricaoEvent'];

    if (isset($_FILES['addImgEvent']) && $_FILES['addImgEvent']['error'] === UPLOAD_ERR_OK) {
        $diretorio_upload = '../images/uploads/eventos/';
        $nome_imagem = uniqid() . '-' . basename($_FILES['addImgEvent']['name']);
        $caminho_imagem = $diretorio_upload . $nome_imagem;

        if (!is_dir($diretorio_upload)) {
            mkdir($diretorio_upload, 0777, true);
        }

        if (move_uploaded_file($_FILES['addImgEvent']['tmp_name'], $caminho_imagem)) {
            $sql = 'INSERT INTO eventos (titulo, data, imagem, localEvento, descricao) VALUES (?, ?, ?, ?, ?)';

            $stmt = $conn->prepare($sql);
            
            if ($stmt === false) {
                die("Erro ao preparar a declaração: " . $conn->error);
            }

            $stmt->bind_param("sssss", $titulo, $data, $nome_imagem, $localEvento, $descricao);

            if ($stmt->execute()) {
                echo "Evento Adicionado com sucesso!";
            } else { 
                echo "Erro ao adicionar o evento. Código: " . $stmt->error; 
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