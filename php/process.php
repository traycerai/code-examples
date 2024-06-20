<?php
include 'transform.php';

function process_data($json_data) {
    $extracted_data = array_map(function($record) {
        if (!isset($record['attributes']['value'])) {
            throw new Exception('Key error');
        }
        return $record['attributes']['value'];
    }, $json_data);
    return transform_data($extracted_data);
}
?>
