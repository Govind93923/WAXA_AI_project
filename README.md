# 🚀 DevOps Internship Assessment

This project demonstrates the containerization, automation, and deployment of a **Next.js web application** using **Docker**, **GitHub Actions**, and **Kubernetes (Minikube)**.  
It highlights the implementation of CI/CD pipelines, container registry integration, and Kubernetes deployment best practices.

---

## 🧩 Objective

The main goal of this project is to:
- Containerize a Next.js application using Docker.
- Automate image build and push to GitHub Container Registry (GHCR) using GitHub Actions.
- Deploy the containerized application to Kubernetes running on Minikube.
- Maintain clear documentation for setup and deployment.

---

## ⚙️ Tools and Technologies Used

- **Next.js** – For building the frontend web application.  
- **Docker** – For containerizing the application.  
- **GitHub Actions** – For automating CI/CD workflows.  
- **GitHub Container Registry (GHCR)** – For storing and managing Docker images.  
- **Kubernetes (Minikube)** – For local container orchestration and deployment testing.

---

## 🏗️ Project Workflow

1. A simple Next.js application is created as the base project.  
2. A **Dockerfile** is written following best practices to build a lightweight and efficient production image.  
3. A **GitHub Actions workflow** is configured to:
   - Automatically build the Docker image when code is pushed to the `main` branch.
   - Tag the image properly (using version or commit SHA).
   - Push the image to **GitHub Container Registry (GHCR)**.
4. The **Kubernetes manifests** are stored in the `k8s/` directory:
   - `deployment.yaml` defines the deployment configuration, replicas, and health checks.
   - `service.yaml` exposes the application to be accessible from outside the cluster.
5. The application is deployed on **Minikube** to verify that the image works correctly in a containerized environment.

---

## ☸️ Kubernetes Deployment Overview

- The **Deployment** file creates a ReplicaSet that manages multiple pods of the Next.js app.  
- **Liveness and readiness probes** ensure that the pods are running and ready to receive traffic.  
- The **Service** exposes the application using a NodePort, allowing users to access it through Minikube.  
- Once deployed, the app can be accessed using the Minikube service command.

---

## 🧠 CI/CD Pipeline Description

The CI/CD pipeline runs automatically whenever new changes are pushed to the `main` branch:
1. **Checkout Code:** The workflow fetches the latest repository code.  
2. **Login to GHCR:** Authenticates with the GitHub Container Registry.  
3. **Build Image:** The Docker image is built using the provided Dockerfile.  
4. **Tag and Push:** The image is tagged with the repository name and version, then pushed to GHCR.  
5. **Deploy (Manual Step):** The pushed image can then be pulled by Kubernetes to deploy the application on Minikube.

This automation ensures consistency and reduces manual intervention during deployments.

---

## 🧾 Example GHCR Image URL

Example format of the image pushed to GHCR:
ghcr.io/<your-github-username>/nextjs-app:latest

yaml
Copy code

---

## 💡 Key Features

- Fully automated build and push process via GitHub Actions.  
- Clean and modular Kubernetes manifests for deployment and service configuration.  
- Containerized Next.js app optimized for performance and small image size.  
- Easy deployment on any Kubernetes environment using Minikube.  
- Clear and straightforward documentation for setup and execution.
