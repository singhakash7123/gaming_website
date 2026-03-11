'use client'
import React from 'react'
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css"
const page = () => {
    useEffect(()=>{
Aos.init({
  duration:500,
  once:true
})
},[])
  return null
}

export default page