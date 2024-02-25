"use client"
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AuthContext, IProps, IUser } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const Home =() =>{
  const [progress, setProgress] = React.useState(13)
 
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(prevProgress => prevProgress + 2);
      } else {
        clearInterval(interval);
      }
    }, 10); // Adjust the interval duration as needed for desired speed

    return () => clearInterval(interval);
  }, [progress]);

 
  return (
    <div className="fixed inset-0 flex justify-center items-center">
    <div className="w-[60%] border">
      <Progress value={progress} />
    </div>
  </div>
  )
  }
export default Home;