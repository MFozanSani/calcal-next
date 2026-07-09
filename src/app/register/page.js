'use client'

import { useRouter } from "next/navigation"
import { use, useState } from "react"
import { registerUser } from "../actions"

export default function RegisterPage(){
    const router = useRouter()
    const [formData, setFormData] = useState({email:"", password:"", name:""})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const result = await registerUser(formData)
        setIsLoading(false)
        if (result.succes) {
            router.push('/api/auth/signin')
        }
        else{
            setError(result.error)
        }
    }

    return (
    <>
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
          Create Your Account
        </h2>
        
        {error && (
          <div className="rounded bg-red-50 p-3 text-sm font-medium text-red-800">
            {error}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-md bg-indigo-600 px-4 py-2 font-medium text-white shadow hover:bg-indigo-700 focus:outline-none disabled:bg-gray-400"
          >
            {isLoading ? "Registering..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
    </>
    )

}