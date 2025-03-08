import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'

export default function AuthBar() {
    return (
        <div className='flex flex-row gap-2 justify-center items-center'>
            <SignedOut>
                <Button variant='outline'>
                    <SignInButton />
                </Button>
                <Button variant='outline'>
                    <SignUpButton />
                </Button>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    )
}