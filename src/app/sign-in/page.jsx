"use client"

import * as Clerk from "@clerk/elements/common"
import * as SignIn from "@clerk/elements/sign-in"

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md">
        <div className="overflow-hidden rounded-xl bg-white shadow-xl dark:bg-gray-800">
          <SignIn.Root>
            <div className="p-8">
              <SignIn.Step name="start">
                <div className="space-y-6">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Sign in to your account</h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Welcome back! Enter your username.
                    </p>
                  </div>

                  <Clerk.Field name="identifier">
                    <Clerk.Label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Username
                    </Clerk.Label>
                    <Clerk.Input className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" />
                    <Clerk.FieldError className="mt-1.5 text-sm text-red-500 dark:text-red-400" />
                  </Clerk.Field>

                  <SignIn.Action
                    submit
                    className="w-full rounded-lg bg-sky-500 px-4 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-colors hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:bg-sky-600 dark:hover:bg-sky-700"
                  >
                    Continue
                  </SignIn.Action>

                  <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                    Don't have an account?{" "}
                    <a href="/sign-up" className="font-medium text-sky-600 hover:text-sky-500 dark:text-sky-400">
                      Sign up
                    </a>
                  </div>
                </div>
              </SignIn.Step>

              <SignIn.Step name="verifications">
                <SignIn.Strategy name="email_code">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Check your email</h1>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        We sent a code to{" "}
                        <SignIn.SafeIdentifier className="font-medium text-gray-900 dark:text-white" />.
                      </p>
                    </div>

                    <Clerk.Field name="code">
                      <Clerk.Label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email code
                      </Clerk.Label>
                      <Clerk.Input className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" />
                      <Clerk.FieldError className="mt-1.5 text-sm text-red-500 dark:text-red-400" />
                    </Clerk.Field>

                    <SignIn.Action
                      submit
                      className="w-full rounded-lg bg-sky-500 px-4 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-colors hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:bg-sky-600 dark:hover:bg-sky-700"
                    >
                      Continue
                    </SignIn.Action>
                  </div>
                </SignIn.Strategy>

                <SignIn.Strategy name="password">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Enter your password</h1>
                    </div>

                    <Clerk.Field name="password">
                      <Clerk.Label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Password
                      </Clerk.Label>
                      <Clerk.Input className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" />
                      <Clerk.FieldError className="mt-1.5 text-sm text-red-500 dark:text-red-400" />
                    </Clerk.Field>

                    <div className="space-y-3">
                      <SignIn.Action
                        submit
                        className="w-full rounded-lg bg-sky-500 px-4 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-colors hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:bg-sky-600 dark:hover:bg-sky-700"
                      >
                        Continue
                      </SignIn.Action>

                      <SignIn.Action
                        navigate="forgot-password"
                        className="w-full text-center text-sm font-medium text-sky-600 hover:text-sky-500 dark:text-sky-400"
                      >
                        Forgot password?
                      </SignIn.Action>
                    </div>
                  </div>
                </SignIn.Strategy>

                <SignIn.Strategy name="reset_password_email_code">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Check your email</h1>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        We sent a code to{" "}
                        <SignIn.SafeIdentifier className="font-medium text-gray-900 dark:text-white" />.
                      </p>
                    </div>

                    <Clerk.Field name="code">
                      <Clerk.Label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email code
                      </Clerk.Label>
                      <Clerk.Input className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" />
                      <Clerk.FieldError className="mt-1.5 text-sm text-red-500 dark:text-red-400" />
                    </Clerk.Field>

                    <SignIn.Action
                      submit
                      className="w-full rounded-lg bg-sky-500 px-4 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-colors hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:bg-sky-600 dark:hover:bg-sky-700"
                    >
                      Continue
                    </SignIn.Action>
                  </div>
                </SignIn.Strategy>
              </SignIn.Step>

              <SignIn.Step name="forgot-password">
                <div className="space-y-6">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Forgot your password?</h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      We'll send you a code to reset your password
                    </p>
                  </div>

                  <SignIn.SupportedStrategy
                    name="reset_password_email_code"
                    className="w-full rounded-lg bg-sky-500 px-4 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-colors hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:bg-sky-600 dark:hover:bg-sky-700"
                  >
                    Reset password
                  </SignIn.SupportedStrategy>

                  <SignIn.Action
                    navigate="previous"
                    className="w-full text-center text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    Go back
                  </SignIn.Action>
                </div>
              </SignIn.Step>

              <SignIn.Step name="reset-password">
                <div className="space-y-6">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reset your password</h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Create a new password for your account
                    </p>
                  </div>

                  <Clerk.Field name="password">
                    <Clerk.Label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      New password
                    </Clerk.Label>
                    <Clerk.Input className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" />
                    <Clerk.FieldError className="mt-1.5 text-sm text-red-500 dark:text-red-400" />
                  </Clerk.Field>

                  <Clerk.Field name="confirmPassword">
                    <Clerk.Label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Confirm password
                    </Clerk.Label>
                    <Clerk.Input className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" />
                    <Clerk.FieldError className="mt-1.5 text-sm text-red-500 dark:text-red-400" />
                  </Clerk.Field>

                  <SignIn.Action
                    submit
                    className="w-full rounded-lg bg-sky-500 px-4 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-colors hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:bg-sky-600 dark:hover:bg-sky-700"
                  >
                    Reset password
                  </SignIn.Action>
                </div>
              </SignIn.Step>
            </div>
          </SignIn.Root>
        </div>
      </div>
    </div>
  )
}
