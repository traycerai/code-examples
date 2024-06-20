use serde_json::Value;
use crate::transform::transform_data;

pub fn process_data(json_data: Value) -> Result<f64, &'static str> {
    let extracted_data: Vec<f64> = json_data.as_array()
        .ok_or("Expected an array")?
        .iter()
        .map(|record| {
            match &record["attributes"]["value"] {
                Value::Number(num) => num.as_f64().ok_or("Expected a float value"),
                Value::String(s) => s.parse::<f64>().map_err(|_| "Expected a parsable string"),
                _ => Err("Unsupported value type"),
            }
        })
        .collect::<Result<Vec<f64>, &str>>()?;
    transform_data(&extracted_data)
}
