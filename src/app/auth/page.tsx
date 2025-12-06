"use client";
import { useRouter } from "next/navigation";
import LoginForm from "../components/loginForm";



export default function Auth() {

    const router = useRouter();


    const handleLoginSuccess = (email: string, password: string) => {
        debugger
        const getPassword = localStorage.getItem("password");
        const getEmail = localStorage.getItem("email");
        if (email === getEmail && password === getPassword) {
            router.push("/dashboard");
        }
        else {
            alert("Invalid Credentials");
        }
    }

    const handleRegisterRedirect = () => {
        router.push("/registration");
    }

    return (
        <LoginForm onLoginSuccess={handleLoginSuccess} onRegisterRedirect={handleRegisterRedirect}/>
    );
}