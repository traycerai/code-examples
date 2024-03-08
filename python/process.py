from transform import transform_data


def process_data(json_data):
    """
    Extracts 'value' fields from each record. Assumes every record has a 'attributes' and 'value'.
    Corner cases:
    - If a record does not have an 'attributes' or 'value' field, the function throws KeyError.
    """
    extracted_data = [record["attributes"]["value"] for record in json_data]
    return transform_data(extracted_data)
