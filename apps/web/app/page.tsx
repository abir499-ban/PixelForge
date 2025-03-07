import {Button} from '@/components/ui/button'

export default function Home() {
  return (
    <>
    <h1 className="text-3xl text-pink-700 underline underline-offset-8 font-semibold" >
      Hello world!
    </h1>
    <Button className='mt-[100px] cursor-pointer ml-3'>Click here</Button>
    </>
  )
}