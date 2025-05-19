"use client"
import React from 'react'
import AuthBar from "@/components/shared/Authbar"
import { ModeToggle } from "@/components/shared/ThemeToggler"
import { FRONTEND_URL } from '@/constants/constants'
import { X, Menu } from 'lucide-react'

export default function Header() {
    const [isMobileView, setisMobileView] = React.useState(false)
    return (
        <header className="flex flex-row gap-2 items-center p-4  h-16 mid:h-auto">
            {/* Hamburger Icon */}
            <div className='md:hidden cursor-pointer'>
                {isMobileView ? (
                    <X className='w-6 h-6' onClick={()=>setisMobileView(false)}/>
                ) : (
                    <Menu className='w-6 h-6' onClick={()=>setisMobileView(true)}/>
                )}

            </div>

            <h1 className="text-3xl text-pink-700  font-semibold"><a href={FRONTEND_URL}>Pixel Forge</a></h1>



            <div className="mx-3 px-6 flex flex-row items-center justify-between w-full">
                <nav
                    className={`${isMobileView ? 'flex' : 'hidden'
                        } flex-col gap-3 w-full h-dvh fixed inset-0 left-40 z-20 md:static md:flex md:flex-row md:items-center md:gap-6 md:h-auto md:bg-transparent md:space-y-0`}
                >
                    <a href={`${FRONTEND_URL}/train`} className="text-sm font-medium  hover:text-pink-800 transition-colors duration-200">Train</a>
                    <a href={`${FRONTEND_URL}/packs`} className="text-sm font-medium hover:text-pink-800 transition-colors duration-200">Packs</a>
                    <a href={`${FRONTEND_URL}/howitworks`} className="text-sm font-medium hover:text-pink-800 transition-colors duration-200">How It Works</a>
                    <a href={`${FRONTEND_URL}/generateImage`} className="text-sm font-medium hover:text-pink-800 transition-colors duration-200">Generate Image</a>
                    <a href={`${FRONTEND_URL}/myImages`} className="text-sm font-medium hover:text-pink-800 transition-colors duration-200">Gallery</a>
                    {/* <a href="http://localhost:3000/generateImage" className="text-sm font-medium hover:text-pink-800 transition-colors duration-200">Generate Image</a> */}
                </nav>

                <div className={`flex flex-row gap-6 ${isMobileView ? 'hidden' : 'flex'}`}>
                    <AuthBar />
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}
