import React, { useState } from "react";
import UploadDataset from "./components/UploadDataset";
import MetricsChart from "./components/MetricsChart";
import { calculateMetrics, applyDebiasing } from "./services/api";

function App() {
  const [metrics, setMetrics] = useState(null);
  const [debiasedData, setDebiasedData] = useState(null);

  const handleDatasetUpload = async (dataset) => {
    const result = await calculateMetrics(dataset, "target");
    setMetrics(result.metrics);
  };

  const handleDebiasing = async (dataset, method) => {
    const result = await applyDebiasing(dataset, "target", method);
    setDebiasedData(result);
  };

  return (
    <div>
      <h1>Bias Detection Toolkit</h1>
      <UploadDataset onUpload={handleDatasetUpload} />

      {/* Display the metrics */}
      {metrics && <MetricsChart metrics={metrics} />}

      {/* Button for debiasing the dataset */}
      {metrics && (
        <div>
          <button onClick={() => handleDebiasing(metrics.dataset, "reweighting")}>
            Apply Reweighting Debiasing
          </button>
        </div>
      )}

      {/* Show debiased data */}
      {debiasedData && (
        <div>
          <h2>Debiased Data</h2>
          <pre>{JSON.stringify(debiasedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;

