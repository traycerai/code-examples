<?php
function calculate_statistic($data) {
    if (count($data) == 0) {
        throw new Exception('Division by zero error');
    }
    return array_sum($data) / count($data);
}
?>
