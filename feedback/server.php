<?php

declare(strict_types = 1);

if( strpos($_SERVER["REQUEST_URI"], "api") !== false ) {
    header('Access-Control-Allow-Origin: *');

    header('Access-Control-Allow-Methods: GET, POST');

    header("Access-Control-Allow-Headers: X-Requested-With");

    // header("Content-Type: application/json");
    header("Content-Type: text/html");

    function scan($dir = "content", $filter = '') {
        $path = $_SERVER["DOCUMENT_ROOT"] . DIRECTORY_SEPARATOR . $dir;
        if ($dir) {
            $ite = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($path));
            $rii = new RegexIterator($ite, "/(" . $filter . ")/i");

            $files = array();
            foreach ($rii as $file) {
                if (!$file->isDir()) {
                    $fileName = $file->getFilename();
                    $location = str_replace("/", '', $file->getPath());
                    $files[] = array(
                        "name" => $fileName,
                        "type" => "file",
                        "path" => $location,
                    );
                }
            }
            return $files;
        }
    }

    // $bd = new SQLite3("db1.db");

    // $bd->exec("DROP TABLE IF EXISTS cervezas");
    // $bd->exec("CREATE TABLE IF NOT EXISTS cervezas (id INTEGER primary key, nombre text not null, graduacion text not null)");
    // $bd->exec("delete from cervezas");
    // $bd->exec("INSERT INTO cervezas (nombre, graduacion) VALUES ('Alhambra', '5.5%')");
    // $bd->exec("INSERT INTO cervezas (nombre, graduacion) VALUES ('Mahou Clásica ', '5.4%')");

    // $nombreCerveza = 'Corona';
    // $graduacion = '5%';
    // $sentencia = $bd->prepare("INSERT INTO cervezas (nombre, graduacion) VALUES (:nombre, :graduacion)");
    // $sentencia->bindValue(':nombre', $nombreCerveza, SQLITE3_TEXT);
    // $sentencia->bindValue(':graduacion', $graduacion, SQLITE3_TEXT);
    // $sentencia->execute();

    // $cervezas = array();

    // $result = $bd->query('SELECT * FROM cervezas');
    // while ($cerveza = $result->fetchArray(SQLITE3_ASSOC)) {
    //     array_push($cervezas, (object)$cerveza);
    // }
    // $bd->close();

    // echo json_encode($cervezas);

    echo json_encode(scan());
} else {
    if( strpos($_SERVER["REQUEST_URI"], "contents") !== false ) {
        header('Access-Control-Allow-Origin: *');

        header('Access-Control-Allow-Methods: GET, POST');
    
        header("Access-Control-Allow-Headers: X-Requested-With");
    
        header("Content-Type: application/pdf");

        readfile("content/arq.pdf");
    } else {
        readfile("react/dist/index.html");
    }
}
// echo "Hello";