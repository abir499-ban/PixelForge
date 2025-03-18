import { type Metadata } from 'next'
import { ThemeProvider } from "@/components/theme-provider"
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import AuthBar from '@/components/shared/Authbar'
import { ModeToggle } from '@/components/shared/ThemeToggler'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Clerk Next.js Quickstart',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header className="flex flex-row justify-between items-center p-4  h-16">
              <h1 className="text-3xl text-pink-700  font-semibold"><a href='http://localhost:3000'>Pixel Forge</a></h1>

              <div className="container mx-auto px-6 flex items-center justify-between ml-20">
                <nav className="hidden md:flex items-center space-x-8">
                  <a href="http://localhost:3000/train" className="text-sm font-medium  hover:text-pink-800 transition-colors duration-200">Train</a>
                  <a href="http://localhost:3000/packs" className="text-sm font-medium hover:text-pink-800 transition-colors duration-200">Packs</a>
                  <a href="http://localhost:3000/howitworks" className="text-sm font-medium hover:text-pink-800 transition-colors duration-200">How It Works</a>
                  <a href="http://localhost:3000/generateImage" className="text-sm font-medium hover:text-pink-800 transition-colors duration-200">Generate Image</a>
                  {/* <a href="http://localhost:3000/generateImage" className="text-sm font-medium hover:text-pink-800 transition-colors duration-200">Generate Image</a> */}
                </nav>
                <div className='flex flec-row gap-6'>
                  <AuthBar />
                  <ModeToggle />
                </div>
              </div>
            </header>

            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}