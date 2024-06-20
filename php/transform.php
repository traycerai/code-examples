<?php
include 'calculate.php';

function transform_data($data) {
    $transformed_data = array_filter(array_map(function($x) {
        if (!is_numeric($x)) {
            throw new Exception('Type error');
        }
        return $x * 1.1;
    }, $data), function($x) {
        return $x > 1;
    });
    return calculate_statistic($transformed_data);
}
?>
