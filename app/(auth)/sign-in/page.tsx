import { FC } from "react";
import {
  SpecialPageCard,
  SpecialPageWrapper,
} from "@/components/utils/SpecialPage";
import loginImageLight from "../../../public/assets/auth/signInImageLight.svg";
import loginImageDark from "../../../public/assets/auth/signInImageDark.svg";
import UserAuthForm from "@/components/auth/UserAuthForm";

const SignInPage: FC = ({}) => {
  return (
    <SpecialPageWrapper>
      <SpecialPageCard
        imageLight={loginImageLight}
        imageDark={loginImageDark}
        imgAltText="Login Image"
        title="Welcome"
        subtitle="Sign in to access protected pages"
        credits="User Illustrations by Storyset"
        creditsUrl="https://storyset.com/user"
      >
        <UserAuthForm />
      </SpecialPageCard>
    </SpecialPageWrapper>
  );
};

export default SignInPage;
