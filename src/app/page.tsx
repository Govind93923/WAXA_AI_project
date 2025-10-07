export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-900 text-white p-4 sm:p-8 md:p-12">
      <div className="w-full max-w-4xl rounded-lg bg-gray-800/50 shadow-2xl overflow-hidden border border-gray-700">
        
        {/* Header Section */}
        <header className="bg-gray-900 p-6 sm:p-8 border-b border-blue-500/30 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
            DevOps Assessment Project
          </h1>
          <p className="mt-2 text-md sm:text-lg text-gray-400">
            Containerize & Deploy a Next.js Application
          </p>
        </header>

        <div className="p-6 sm:p-8 space-y-8">
          {/* Objective Section */}
          <section>
            <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2 mb-4 text-teal-300">
              🚀 Objective
            </h2>
            <p className="text-gray-300 leading-relaxed">
              This project demonstrates a complete CI/CD pipeline for a modern web application. The goal is to containerize a Next.js app using Docker, automate the build and push process with GitHub Actions, and deploy it to a Kubernetes cluster running on Minikube.
            </p>
          </section>

          {/* Technologies Used Section */}
          <section>
            <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2 mb-4 text-teal-300">
              🛠️ Key Technologies
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-gray-700/50 px-4 py-2 rounded-lg"><span>Next.js</span></div>
              <div className="bg-gray-700/50 px-4 py-2 rounded-lg"><span>Docker</span></div>
              <div className="bg-gray-700/50 px-4 py-2 rounded-lg"><span>GitHub Actions</span></div>
              <div className="bg-gray-700/50 px-4 py-2 rounded-lg"><span>Kubernetes (Minikube)</span></div>
              <div className="bg-gray-700/50 px-4 py-2 rounded-lg"><span>Tailwind CSS</span></div>
            </div>
          </section>

          {/* Workflow Section */}
          <section>
            <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2 mb-4 text-teal-300">
              🔄 CI/CD Workflow
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4 text-center">
              <div className="flex-1">
                <p className="font-semibold">1. Code Push</p>
                <p className="text-sm text-gray-400">Developer pushes changes to the 'main' branch on GitHub.</p>
              </div>
              <span className="text-blue-400 text-2xl transform sm:rotate-0 rotate-90">-&gt;</span>
              <div className="flex-1">
                <p className="font-semibold">2. Build Image</p>
                <p className="text-sm text-gray-400">GitHub Actions automatically builds a new Docker image.</p>
              </div>
              <span className="text-blue-400 text-2xl transform sm:rotate-0 rotate-90">-&gt;</span>
              <div className="flex-1">
                <p className="font-semibold">3. Push to GHCR</p>
                <p className="text-sm text-gray-400">The new image is pushed to GitHub Container Registry.</p>
              </div>
              <span className="text-blue-400 text-2xl transform sm:rotate-0 rotate-90">-&gt;</span>
              <div className="flex-1">
                <p className="font-semibold">4. Deploy</p>
                <p className="text-sm text-gray-400">Manually deploy the new image to the Minikube cluster.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="text-center p-4 bg-gray-900 border-t border-gray-700">
          <p className="text-sm text-gray-500">
            Created by [Your Name]
          </p>
        </footer>
      </div>
    </main>
  );
}