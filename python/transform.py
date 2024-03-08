from calculate import calculate_statistic


def transform_data(data):
    """
    Transforms data by applying a specific operation, e.g., scaling. Assumes data are valid numbers.
    Corner cases:
    - If a value is not an integer, the function throws TypeError..
    """
    transformed_data = [
        x for x in [int(x) * 1.1 for x in data] if x > 1
    ]  # Scale values by 10%
    return calculate_statistic(transformed_data)
