# kubestatus
Kubernetes Work on Windows WSL2

## Getting Started

Use `minikube` but do not enable ingress addon. Use a cloud deployment yml file instead.

Then run `kubectl apply -f k8s` to get your services up. Run `minikube tunnel` to get map localhost on windows to the WSL2 subnet.