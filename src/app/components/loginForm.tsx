"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginForm() {

    const router = useRouter();

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")



    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const getPassword = localStorage.getItem("password");
        const getEmail = localStorage.getItem("email");
        if (email === getEmail && password === getPassword) {
            router.push("/dashboard");
        }
        else {
            alert("Invalid Credentials");
        }

    }


    const handleRegisterRedirect = (e: React.MouseEvent) => {
        e.preventDefault();
        router.push("/registration");
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
                    <a onClick={handleRegisterRedirect} className="text-blue-600 font-semibold ml-1">
                        Register
                    </a>
                </p>
            </div>
        </div>)
}