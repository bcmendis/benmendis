import { FC } from 'react'
import { Icons } from '../layout/icons'
import UserAuthForm from './UserAuthForm';

const SignIn: FC = ({}) => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center items-center">
        <div className="flex space-x-2 items-end justify-center text-accent-foreground">
          <Icons.logo className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome
          </h1>
        </div>
        <p className="text-sm max-w-xs mx-auto text-muted-foreground">
          Sign in to access protected routes & comment
        </p>
        {/* Sign In Form */}
        <UserAuthForm className="py-2" />
      </div>
    </div>
  );
}

export default SignIn