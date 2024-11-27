<?php
require 'connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $titulo = $_POST['addTituloPrincipal'];
    $subtitulo = $_POST['addSubtitulo'];
    $preview = $_POST['addPreview'];
    $descricao = $_POST['addDescricaoEvent'];

    if (isset($_FILES['addImagemNoticia']) && $_FILES['addImagemNoticia']['error'] === UPLOAD_ERR_OK) {
        $diretorio_upload = '../images/uploads/';
        $nome_imagem = uniqid() . '-' . basename($_FILES['addImagemNoticia']['name']);
        $caminho_imagem = $diretorio_upload . $nome_imagem;

        if (!is_dir($diretorio_upload)) {
            mkdir($diretorio_upload, 0777, true);
        }

        if (move_uploaded_file($_FILES['addImagemNoticia']['tmp_name'], $caminho_imagem)) {
            $sql = 'INSERT INTO noticias (titulo, subtitulo, imagem, preview, descricao) VALUES (?, ?, ?, ?, ?)';

            $stmt = $conn->prepare($sql);
            
            if ($stmt === false) {
                die("Erro ao preparar a declaração: " . $conn->error);
            }

            $stmt->bind_param("sssss", $titulo, $subtitulo, $nome_imagem, $preview, $descricao);

            if ($stmt->execute()) {
                echo "Noticia Adicionada com sucesso!";
            } else { 
                echo "Erro ao adicionar a notícia. Código: " . $stmt->error; 
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