import { useRouter } from "next/navigation";
import { useState } from "react";




export default function RegistrationForm() {
    const router = useRouter();

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")

    const handleRegistration = (e: React.FormEvent) => {
        e.preventDefault();

        const token = "123456789";
        document.cookie = `token=${token}; path=/; max-age=${7 * 24 * 60 * 60}`;
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("name", name);

        router.push("/auth");

    }



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 mx-4 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6">Regisration</h2>

                <form onSubmit={handleRegistration} className="space-y-4">

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

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
                        Register
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-4">
                    back to login?
                    <a onClick={() => { router.push("/auth") }} className="text-blue-600 font-semibold ml-1">
                        Login
                    </a>
                </p>
            </div>
        </div>)
}