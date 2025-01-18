import pandas as pd
from fairlearn.metrics import MetricFrame, demographic_parity_difference, equalized_odds_difference

def calculate_metrics(dataset, target_column):
    df = pd.DataFrame(dataset)
    y_true = df[target_column]
    y_pred = df["predictions"]

    dp_diff = demographic_parity_difference(y_true, y_pred)
    eo_diff = equalized_odds_difference(y_true, y_pred)

    return {
        "demographic_parity_difference": dp_diff,
        "equalized_odds_difference": eo_diff
    }
