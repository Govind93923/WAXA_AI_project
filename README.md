# Next.js DevOps Assessment

This project demonstrates how to containerize a **Next.js application** using **Docker**, automate the build and push using **GitHub Actions**, and deploy it to **Kubernetes (Minikube)**.

---

## 1. Setup Instructions

### Clone the Repository
```bash
git clone <your-repo-link>
cd <your-repo-folder>
Install Dependencies
bash
Copy code
npm install
Run Locally
bash
Copy code
npm run dev
App runs on 👉 http://localhost:3000

2. Docker Commands
Build Docker Image
bash
Copy code
docker build -t nextjs-app .
Run Container
bash
Copy code
docker run -d -p 3000:3000 nextjs-app
Now open http://localhost:3000

3. GitHub Actions (CI/CD)
Builds Docker image on push to main

Pushes image to GitHub Container Registry (GHCR)

Example image URL:

bash
Copy code
ghcr.io/<your-username>/nextjs-app:latest
4. Kubernetes (Minikube)
Start Minikube
bash
Copy code
minikube start
Apply Manifests
bash
Copy code
kubectl apply -f k8s/
Check Pods and Services
bash
Copy code
kubectl get pods
kubectl get svc
Access the App
bash
Copy code
minikube service nextjs-service
5. Project Structure
swift
Copy code
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
├── .github/workflows/ci-cd.yml
├── Dockerfile
├── pages/
├── public/
└── README.md
6. Author
Jayandra Siva Govind Nimmakuri
