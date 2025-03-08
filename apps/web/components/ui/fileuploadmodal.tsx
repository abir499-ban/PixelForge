/**
 * v0 by Vercel.

 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {BACKEND_URL, CLOUDFLARE_BASE_URL} from 'common/constants'
import axios from 'axios'
import JSZip from 'jszip'

export default function FileUploadModal({onUploadDone} : {
  onUploadDone : (zipUrl : string) => void
}) {
  const [file, setfile] = React.useState<File[]>([])

  const handleZip_FileUpload = async() =>{
    if(file.length === 0) return;
    //file zipping and sending via pre-signed url here
    const res  = await axios.get(`${BACKEND_URL}/pre-signed-url`);
    const preSignedURL = res.data.url;
    const key = res.data.Key;
    const zip = new JSZip();

    file.forEach((file) =>{
      zip.file(file.name , file)
    });

    // Generate zip blob
    const zipBlob = await zip.generateAsync({type: "blob"});

    // Create form data with the required fields
    // const formData = new FormData();
    // formData.append('file', zipBlob, key);

    try {
      // Upload to S3 using presigned URL
      await axios.put(preSignedURL, zipBlob, {
        headers: {
          'Content-Type': 'application/zip'
        },
      });

      console.log('Files uploaded successfully');
      onUploadDone(`${CLOUDFLARE_BASE_URL}/${key}`)

    } catch (error) {
      console.error('Error uploading files:', error);
    }
  }

  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-lg p-10 space-y-6">
        <CloudUploadIcon/>
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault()
            if (e.target.files) {
              console.log(e.target.files)
              setfile(Array.from(e.target.files))
            }
          }}
          multiple={true}
        />
        <label
          htmlFor="fileInput"
          className="w-full flex flex-col justify-center items-center border border-grey rounded-lg"
        >
          Select Files📁
        </label>
        
          {file.length>0 && (
            <div className='flex flex-col justify-center items-center'>
              {file.map((file, index)=>(
                <div key={index}>{file.name}</div>
              ))}
            </div>
          )}
        
      </CardContent>
      <CardFooter className='flex flex-col justify-center items-center '>
        <Button disabled={file.length === 0} className='cursor-pointer' onClick={handleZip_FileUpload}>Upload Photos</Button>
      </CardFooter>
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