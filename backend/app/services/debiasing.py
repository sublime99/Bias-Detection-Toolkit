import pandas as pd
from aif360.algorithms.preprocessing import Reweighing
from aif360.datasets import BinaryLabelDataset

def apply_debiasing(dataset, target_column, method="reweighting"):
    # Convert to AIF360 dataset
    df = pd.DataFrame(dataset)
    aif_data = BinaryLabelDataset(df=df, label_names=[target_column], protected_attribute_names=["protected_attr"])

    if method == "reweighting":
        reweigh = Reweighing()
        reweigh.fit(aif_data)
        debiased_data = reweigh.transform(aif_data)
    else:
        raise ValueError(f"Unknown debiasing method: {method}")

    return debiased_data.convert_to_dataframe()[0].to_dict(orient="records")
