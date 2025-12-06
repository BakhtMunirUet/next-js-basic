"use client";

import { useState } from "react";

interface LoginFormProps {
  onLoginSuccess: (email: string, password: string) => void; // callback
  onRegisterRedirect?: () => void;
}


export default function LoginForm({ onLoginSuccess, onRegisterRedirect}: LoginFormProps) {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")


    const handleLogin = () => {
        onLoginSuccess(email, password);
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 mx-4 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Don’t have an account?
                    <a onClick={onRegisterRedirect} className="text-blue-600 font-semibold ml-1">
                        Register
                    </a>
                </p>
            </div>
        </div>)
}