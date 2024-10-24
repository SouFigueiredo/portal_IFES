<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload e Exibição de Imagem</title>
</head>
<body>
    <h2>Enviar Imagem</h2>
    <form action="" method="post" enctype="multipart/form-data">
        <label for="imagem">Escolha uma imagem:</label>
        <input type="file" id="imagem" name="imagem" accept="image/*">
        <button type="submit">Enviar Imagem</button>
    </form>

<?php
// Codigo Sql 
/*CREATE TABLE imagens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_arquivo VARCHAR(255) NOT NULL,
    caminho_arquivo VARCHAR(255) NOT NULL,
    data_upload TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)ENGINE=INNODB; */
// OBS: Após Salvar no Banco de dados excluir estes os 2 comentarios acima, incluindo este.

$conn = new mysqli("servidor", "usuario", "senha", "nome Banco de dados");

if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Verifica se o arquivo foi enviado sem erros
    if (isset($_FILES['imagem']) && $_FILES['imagem']['error'] == 0) {
        $arquivoTmp = $_FILES['imagem']['tmp_name']; // Caminho temporário do arquivo
        $nomeArquivo = basename($_FILES['imagem']['name']); // Nome original do arquivo
        $pastaDestino = 'uploads/'; // Pasta onde a imagem será salva
        $caminhoDestino = $pastaDestino . $nomeArquivo; // Caminho completo de destino

        // Verifica se a pasta de destino existe, se não, cria
        if (!is_dir($pastaDestino)) {
            mkdir($pastaDestino, 0777, true);
        }

        // Verifica o tipo de arquivo (opcional)
        $tipoArquivo = strtolower(pathinfo($caminhoDestino, PATHINFO_EXTENSION));
        $tiposPermitidos = array('jpg', 'jpeg', 'png', 'gif');

        if (in_array($tipoArquivo, $tiposPermitidos)) {
            // Tenta mover o arquivo para a pasta de destino
            if (move_uploaded_file($arquivoTmp, $caminhoDestino)) {
                // Insere o nome e o caminho no banco de dados
                $stmt = $conn->prepare("INSERT INTO imagens (nome_arquivo, caminho_arquivo) VALUES (?, ?)");
                $stmt->bind_param("ss", $nomeArquivo, $caminhoDestino);
                // Verifica se o arquivo existe na pasta de destino
                if ($stmt->execute()) {
                    echo "Arquivo movido com sucesso para: '$caminhoDestino'.";
                    $imagensArray[] = [
                        'nome' => $nomeArquivo,
                        'caminho' => $caminhoDestino
                    ];
                } else {
                    echo "Erro ao salvar informações no banco de dados.";
                }
                $stmt->close();
            } else {
                echo "Erro ao mover o arquivo para a pasta de destino.";
            }
        } else {
            echo "Tipo de arquivo não permitido. Apenas JPG, JPEG, PNG e GIF são aceitos.";
        }
    } else {
        echo "Erro no envio do arquivo.";
    }
}
$conn->close();
?>
</body>
</html>
