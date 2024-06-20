use crate::calculate::calculate_statistic;

pub fn transform_data(data: &Vec<f64>) -> Result<f64, &'static str> {
    let transformed_data: Vec<f64> = data.iter()
        .map(|&x| x * 1.1)
        .filter(|&x| x > 1.0)
        .collect();
    calculate_statistic(&transformed_data)
}
