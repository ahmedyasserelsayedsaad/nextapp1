"use client";
import React, { useState } from 'react'
import { createContext } from 'react';
export const ThemeContext=createContext();

function ThemeProvider({children}) {
    const [mood,setMood]=useState('dark');
    const toggle=()=>{
        setMood((prev)=>(prev==='dark'?'light':'dark'))
    }
  return (
    <ThemeContext.Provider value={{mood,toggle}}>
        <div className={`theme ${mood}`}>
            {children}
        </div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider