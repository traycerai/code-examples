<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP JSON Processor</title>
</head>
<body>
    <h1>JSON Data Processing</h1>
    <?php
    include 'process.php';

    function processFiles($dir) {
        $files = glob($dir . '/*.json');
        foreach ($files as $file) {
            try {
                $json_data = json_decode(file_get_contents($file), true);
                if (json_last_error() !== JSON_ERROR_NONE) {
                    throw new Exception('Invalid JSON');
                }
                $processed_data = process_data($json_data);
                echo '<pre>' . htmlspecialchars(print_r($processed_data, true)) . '</pre>';
            } catch (Exception $e) {
                echo '<p>Error processing ' . htmlspecialchars($file) . ': ' . htmlspecialchars($e->getMessage()) . '</p>';
            }
        }
    }

    processFiles('../json_data');
    ?>
</body>
</html>
