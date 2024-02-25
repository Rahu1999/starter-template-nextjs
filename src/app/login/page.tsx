"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const Login = () => {
    const router = useRouter()
    return (
        <div>
            <h1>Rahul</h1>
            <h1>rahul@gmail.com</h1>
            <Button onClick={() => {localStorage.setItem('userInfo', JSON.stringify({ email: "rahul@gmail.com", firstName: "Rahul" })),router.push('/dashboard')}
            }>Login</Button>
        </div>
    )
}

export default Login;