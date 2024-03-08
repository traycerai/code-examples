import json
import pathlib
from process import process_data


if __name__ == "__main__":
    """
    This is the main entry point for the application. It processes all json files in the current directory.
    Corner cases:
    - If a json file is not valid, the application prints an error message and continues processing the next file.
    """
    json_file_names = [str(x) for x in pathlib.Path("../json_data").glob("*")]
    for json_file_name in json_file_names:
        try:
            json_data = json.load(open(json_file_name, "r"))

            processed_data = process_data(json_data)
            print(processed_data)
        except Exception as e:
            print(f"Error processing {json_file_name}: {e}")
