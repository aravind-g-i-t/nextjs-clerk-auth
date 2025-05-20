import { Sparkles, ChevronRight } from "lucide-react"
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-sky-50 to-indigo-50 p-4 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
        <div className="flex items-center justify-center">
          <div className="rounded-full bg-sky-100 p-3 dark:bg-sky-900">
            <Sparkles className="h-6 w-6 text-sky-500 dark:text-sky-400" />
          </div>
        </div>

        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Welcome to My App
        </h1>

        <SignedOut>
            <Link href="/sign-in">
            <div className="mt-8">
              <button className="group flex w-full items-center justify-center rounded-lg bg-sky-500 px-4 py-3 font-medium text-white transition-all duration-200 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-700">
                Custom Sign in
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              
            </div>
            </Link>
        </SignedOut>

        


        
      </div>

      
    </div>
  );
}
