def calculate_statistic(data):
    """
    Calculates a statistic, e.g., the average, from the data. Assumes data is not empty.
    Corner cases:
    - If the data is empty, the function throws DivisionByZeroError.
    """
    return sum(data) / len(data)
