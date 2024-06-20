mod calculate;
mod process;
mod transform;

use std::fs;
use std::io;
use std::path::Path;
use serde_json::Value;

fn main() -> io::Result<()> {
    let json_path = Path::new("../json_data");
    let entries = fs::read_dir(json_path)?;

    for entry in entries {
        let entry = entry?;
        let path = entry.path();
        if path.is_file() && path.extension().map_or(false, |ext| ext == "json") {
            match fs::read_to_string(&path) {
                Ok(content) => {
                    match serde_json::from_str::<Value>(&content) {
                        Ok(json_data) => {
                            match process::process_data(json_data) {
                                Ok(processed_data) => println!("{:?}", processed_data),
                                Err(e) => println!("Error processing data in {:?}: {:?}", path, e),
                            }
                        }
                        Err(e) => println!("Error parsing JSON in {:?}: {:?}", path, e),
                    }
                }
                Err(e) => println!("Error reading file {:?}: {:?}", path, e),
            }
        }
    }

    Ok(())
}
