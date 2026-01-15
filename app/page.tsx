export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold text-brand glow-brand">
            EXURB
          </h1>
          <p className="text-xl text-muted">
            Network Monitoring Platform
          </p>
        </div>

        {/* Status Card */}
        <div className="bg-surface border border-brand/20 rounded-lg p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">System Status</h2>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-brand rounded-full animate-pulse"></div>
              <span className="text-brand uppercase text-sm font-bold">Online</span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="bg-void/50 p-6 rounded border border-muted/20">
              <h3 className="text-brand font-semibold mb-2">Real-time Monitoring</h3>
              <p className="text-muted text-sm">
                Continuous health checks across distributed network environments
              </p>
            </div>

            <div className="bg-void/50 p-6 rounded border border-muted/20">
              <h3 className="text-brand font-semibold mb-2">Edge Agents</h3>
              <p className="text-muted text-sm">
                Deploy lightweight agents anywhere to monitor from multiple locations
              </p>
            </div>

            <div className="bg-void/50 p-6 rounded border border-muted/20">
              <h3 className="text-brand font-semibold mb-2">API First</h3>
              <p className="text-muted text-sm">
                RESTful API for seamless integration with existing tools
              </p>
            </div>

            <div className="bg-void/50 p-6 rounded border border-muted/20">
              <h3 className="text-brand font-semibold mb-2">Open Source</h3>
              <p className="text-muted text-sm">
                Built in the open, auditable, and extensible for your needs
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://github.com/exurb-io/exurb"
            className="px-6 py-3 bg-brand text-void font-bold rounded hover:bg-brand/90 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
          <a
            href="https://github.com/exurb-io/exurb/blob/main/README.md"
            className="px-6 py-3 bg-surface border border-brand/40 text-brand font-bold rounded hover:bg-surface/80 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>

        {/* Footer */}
        <div className="text-center text-muted text-sm pt-8">
          <p>Exurb {new Date().getFullYear()}</p>
        </div>
      </div>
    </main>
  )
}
