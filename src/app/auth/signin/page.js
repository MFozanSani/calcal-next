"use client"
import { signIn } from "next-auth/react"

export default function SignInPage() {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    // This signs them in using the NextAuth credentials provider
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/", // Where they go after logging in successfully
    })
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
        <h2>Sign In</h2>
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}