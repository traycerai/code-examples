pub fn calculate_statistic(data: &Vec<f64>) -> Result<f64, &'static str> {
    if data.is_empty() {
        return Err("DivisionByZeroError");
    }
    Ok(data.iter().sum::<f64>() / data.len() as f64)
}
