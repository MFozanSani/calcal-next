'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
      setMounted(true)
    }, [])
    if(!mounted) return <div className="w-8 h-8"></div>
    return(
        <button
        onClick={()=> setTheme(theme === 'dark' ? 'light':'dark')}
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hove:ring-2 ring-indigo-500 transition-all"
        >
            {theme === 'dark' ? "☀️" : "🌙"}
        </button>
    )
    
}