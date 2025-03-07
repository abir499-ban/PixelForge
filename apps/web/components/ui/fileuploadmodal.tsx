/**
 * v0 by Vercel.
 * @see https://v0.dev/t/B1sBwvjQh84
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function FileUploadModal() {
  const[file ,setfile] = React.useState<File | null>(null)
  
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-lg p-10 space-y-6">
        <CloudUploadIcon className="w-16 h-16 text-zinc-500 dark:text-zinc-400" />
      <Button variant='outline' className='w-full'
      onClick={()=>{
        const input = document.createElement("input")
        input.type = "file"
        input.multiple = true
        input.accept = 'image/*'
        input.onchange = (ev: Event) => {
          ev.preventDefault();
         console.log("hello")
        };

        input.click()
      }}>
        Select Files
      </Button>
      {/* <Button variant='ghost' onClick={(e : React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        console.log("hi")
      }}>Say hi</Button> */}
        

      </CardContent>
    </Card>
  );

}

function CloudUploadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M12 12v9" />
      <path d="m16 16-4-4-4 4" />
    </svg>
  )
}