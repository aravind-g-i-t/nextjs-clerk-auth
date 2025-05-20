import { ArrowRight } from "lucide-react"

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-gray-200 bg-white/50 p-0 shadow-xl backdrop-blur-sm dark:border-gray-800 dark:bg-black/50">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/5 opacity-50" />
          <div className="relative p-8 md:p-12">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500/70 animate-pulse delay-75" />
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500/40 animate-pulse delay-150" />
            </div>

            <h1 className="mt-6 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl dark:from-white dark:to-gray-300">
              This is the Dashboard
            </h1>

            <div className="mt-8 flex items-center">
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
              <ArrowRight className="mx-2 h-5 w-5 text-gray-400 dark:text-gray-500" />
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
