import { FC } from 'react'
import { Icons } from '../layout/icons'
import UserAuthForm from './UserAuthForm';
import loginImage from '../../public/assets/auth/signInImage.svg'
import Image from 'next/image';
import { Separator } from '../ui/separator';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';

const SignIn: FC = ({}) => {
  return (
    <div className="container mx-auto w-full flex flex-col justify-center items-center border rounded-lg p-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center px-4 pb-6 pt-0 sm:p-0">
        <Image src={loginImage} alt="Sign in image" priority/>
        <div className="flex flex-col space-y-4 text-center items-center px-6">
          <div className="flex space-x-2 items-end justify-center text-accent-foreground">
            <Icons.logo className="mx-auto h-6 w-6" />
            <h1 className="text-2xl font-semibold tracking-tight">Welcome</h1>
          </div>
          <p className="text-sm max-w-xs mx-auto text-muted-foreground">
            Sign in to access protected pages
          </p>
          <Separator />
          {/* Sign In Form */}
          <UserAuthForm className="py-2 h-full" />
        </div>
      </div>
      <Separator />
      <Link
        href="https://storyset.com/user"
        className={cn(
          buttonVariants({ variant: "link", className: "p-1 text-xs" }),
          "mt-0 text-muted-foreground"
        )}
      >
        User Illustrations by Storyset
      </Link>
    </div>
  );
}

export default SignIn