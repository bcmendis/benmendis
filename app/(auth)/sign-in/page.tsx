import SignIn from '@/components/auth/SignIn';
import { Icons } from '@/components/layout/icons';
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import Link from 'next/link'
import { FC } from 'react'


const SignInPage: FC = ({}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="sm:container h-full sm:max-w-6xl mx-auto flex flex-col items-center justify-center gap-3">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "self-start -ml-5 sm:-ml-12"
          )}
        >
          <Icons.leftChevron className="h-6 w-6 mr-1" />
          Back to Home
        </Link>
        <SignIn />
      </div>
    </div>
  );
}

export default SignInPage