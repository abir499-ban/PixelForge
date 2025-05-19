"use client"
import React from 'react'
import AuthBar from "@/components/shared/Authbar"
import {ModeToggle} from "@/components/shared/ThemeToggler"
import {FRONTEND_URL} from '@/constants/constants'

export default function Header(){
    return (
        <header className="flex flex-row justify-between items-center p-4  h-16">
            <h1 className="text-3xl text-pink-700  font-semibold"><a href={FRONTEND_URL}>Pixel Forge</a></h1>

            <div className="container mx-auto px-6 flex items-center justify-between ml-20">
                <nav className="hidden md:flex items-center space-x-8">
                    <a href={`${FRONTEND_URL}/train`} className="text-sm font-medium  hover:text-pink-800 transition-colors duration-200">Train</a>
                    <a href={`${FRONTEND_URL}/packs`} className="text-sm font-medium hover:text-pink-800 transition-colors duration-200">Packs</a>
                    <a href={`${FRONTEND_URL}/howitworks`} className="text-sm font-medium hover:text-pink-800 transition-colors duration-200">How It Works</a>
                    <a href={`${FRONTEND_URL}/generateImage`} className="text-sm font-medium hover:text-pink-800 transition-colors duration-200">Generate Image</a>
                    <a href={`${FRONTEND_URL}/myImages`} className="text-sm font-medium hover:text-pink-800 transition-colors duration-200">Gallery</a>
                    {/* <a href="http://localhost:3000/generateImage" className="text-sm font-medium hover:text-pink-800 transition-colors duration-200">Generate Image</a> */}
                </nav>
                <div className='flex flec-row gap-6'>
                    <AuthBar />
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}
