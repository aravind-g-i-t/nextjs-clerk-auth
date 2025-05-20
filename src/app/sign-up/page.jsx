"use client"

import * as Clerk from "@clerk/elements/common"
import * as SignUp from "@clerk/elements/sign-up"

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md">
        <div className="overflow-hidden rounded-xl bg-white shadow-xl dark:bg-gray-800">
          <SignUp.Root>
            <div className="p-8">
              <SignUp.Step name="start">
                <div className="space-y-6">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Create an account</h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Sign up to get started with our platform
                    </p>
                  </div>

         

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      
                    </div>
                    
                  </div>

                  <div className="space-y-4">
                    <Clerk.Field name="username">
                      <Clerk.Label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Username
                      </Clerk.Label>
                      <Clerk.Input className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" />
                      <Clerk.FieldError className="mt-1.5 text-sm text-red-500 dark:text-red-400" />
                    </Clerk.Field>

                    <Clerk.Field name="emailAddress">
                      <Clerk.Label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email
                      </Clerk.Label>
                      <Clerk.Input className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" />
                      <Clerk.FieldError className="mt-1.5 text-sm text-red-500 dark:text-red-400" />
                    </Clerk.Field>

                    <Clerk.Field name="password">
                      <Clerk.Label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Password
                      </Clerk.Label>
                      <Clerk.Input className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" />
                      <Clerk.FieldError className="mt-1.5 text-sm text-red-500 dark:text-red-400" />
                    </Clerk.Field>
                  </div>

                  <SignUp.Action
                    submit
                    className="w-full rounded-lg bg-sky-500 px-4 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-colors hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:bg-sky-600 dark:hover:bg-sky-700"
                  >
                    Sign up
                  </SignUp.Action>

                  <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                    Already have an account?{" "}
                    <a href="/sign-in" className="font-medium text-sky-600 hover:text-sky-500 dark:text-sky-400">
                      Sign in
                    </a>
                  </div>
                </div>
              </SignUp.Step>

              <SignUp.Step name="continue">
                <div className="space-y-6">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Fill in missing fields</h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      We need a bit more information to complete your account
                    </p>
                  </div>

                  <Clerk.Field name="username">
                    <Clerk.Label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Username
                    </Clerk.Label>
                    <Clerk.Input className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" />
                    <Clerk.FieldError className="mt-1.5 text-sm text-red-500 dark:text-red-400" />
                  </Clerk.Field>

                  <SignUp.Action
                    submit
                    className="w-full rounded-lg bg-sky-500 px-4 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-colors hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:bg-sky-600 dark:hover:bg-sky-700"
                  >
                    Continue
                  </SignUp.Action>
                </div>
              </SignUp.Step>

              <SignUp.Step name="verifications">
                <SignUp.Strategy name="phone_code">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Check your phone for an SMS</h1>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        We've sent a verification code to your phone
                      </p>
                    </div>

                    <Clerk.Field name="code">
                      <Clerk.Label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Phone Code
                      </Clerk.Label>
                      <Clerk.Input className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" />
                      <Clerk.FieldError className="mt-1.5 text-sm text-red-500 dark:text-red-400" />
                    </Clerk.Field>

                    <SignUp.Action
                      submit
                      className="w-full rounded-lg bg-sky-500 px-4 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-colors hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:bg-sky-600 dark:hover:bg-sky-700"
                    >
                      Verify
                    </SignUp.Action>
                  </div>
                </SignUp.Strategy>

                <SignUp.Strategy name="email_code">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Check your email</h1>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        We've sent a verification code to your email
                      </p>
                    </div>

                    <Clerk.Field name="code">
                      <Clerk.Label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email Code
                      </Clerk.Label>
                      <Clerk.Input className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" />
                      <Clerk.FieldError className="mt-1.5 text-sm text-red-500 dark:text-red-400" />
                    </Clerk.Field>

                    <SignUp.Action
                      submit
                      className="w-full rounded-lg bg-sky-500 px-4 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-colors hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:bg-sky-600 dark:hover:bg-sky-700"
                    >
                      Verify
                    </SignUp.Action>
                  </div>
                </SignUp.Strategy>
              </SignUp.Step>
            </div>
          </SignUp.Root>
        </div>
      </div>
    </div>
  )
}
