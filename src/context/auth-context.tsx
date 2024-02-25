"use client"
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useState } from 'react';
export interface IUser {
    email: string,
    firstName: string
}

export interface IProps {
    user:IUser | null
    setUser:(userInfo:IUser | null)=> void
}

export const AuthContext = createContext<IProps | null>(null);

export default function AuthProvider({children}: {children:React.ReactNode}) {
    const [user, setUser] = useState<IUser | null >(null);

    const router = useRouter()

    React.useEffect(()=>{
        let userInfo  =localStorage.getItem('userInfo')
        if(userInfo){
            let userData  = JSON.parse(userInfo) as IUser
            setUser(userData)
            setTimeout(() => {
                
                router.push('/dashboard')
            }, 600);
        }
        else{
            setTimeout(() => {
                
                router.push('/login')
            }, 600);
        }
    },[])

    return (
      <AuthContext.Provider value={{ user,setUser }}>
        {children}
      </AuthContext.Provider>
    );
  }