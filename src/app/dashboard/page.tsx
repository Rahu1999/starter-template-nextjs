"use client"
import { Button } from "@/components/ui/button";
import { AuthContext, IProps, IUser } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { useContext } from "react";
const Dashboard = () =>{
    const {user,setUser}= useContext(AuthContext ) as IProps;
  const router = useRouter()
    return (
        <div>
            <h1>Dashboard</h1>
            <Button size={"sm"} onClick={()=> {localStorage.removeItem('userInfo'),setUser(null),router.push('/')}} >Logout</Button>
        </div>
    )
}
export default Dashboard;