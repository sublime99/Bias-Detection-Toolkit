from flask import Blueprint, request, jsonify
from app.services.fairness import calculate_metrics
from app.services.debiasing import apply_debiasing

api = Blueprint("api", __name__)

@api.route("/calculate_metrics", methods=["POST"])
def calculate_metrics_endpoint():
    data = request.json
    dataset = data.get("dataset")
    target = data.get("target")
    metrics = calculate_metrics(dataset, target)
    return jsonify({"metrics": metrics})

@api.route("/apply_debiasing", methods=["POST"])
def apply_debiasing_endpoint():
    data = request.json
    dataset = data.get("dataset")
    target = data.get("target")
    method = data.get("method", "reweighting")  # Default method
    debiased_data = apply_debiasing(dataset, target, method)
    return jsonify({"debiased_data": debiased_data})
