import SignIn from '@/components/auth/SignIn';
import { Icons } from '@/components/layout/icons';
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import Link from 'next/link'
import { FC } from 'react'


const SignInPage: FC = ({}) => {
  return (
    <div className="absolute inset-0">
      <div className="container h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20">
        <Link href="/" className={cn(buttonVariants({ variant: "ghost" }), 'self-start -mt-20')}>
          <Icons.leftChevron className="h-6 w-6 mr-1"/>
          Back to Home
        </Link>
        <SignIn />
      </div>
    </div>
  );
}

export default SignInPage