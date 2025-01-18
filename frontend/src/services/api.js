import axios from "axios";

const API_BASE = "http://localhost:5001/api";

export const calculateMetrics = async (dataset, target) => {
  const response = await axios.post(`${API_BASE}/calculate_metrics`, {
    dataset,
    target,
  });
  return response.data;
};

export const applyDebiasing = async (dataset, target, method) => {
  const response = await axios.post(`${API_BASE}/apply_debiasing`, {
    dataset,
    target,
    method,
  });
  return response.data;
};
