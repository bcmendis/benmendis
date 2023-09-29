import { FC } from 'react'
import SpecialPageWrapper, { SpecialPageCard } from '../utils/SpecialPage';
import unauthorizedLight from "../../public/assets/auth/unauthorizedLight.svg";
import unauthorizedDark from "../../public/assets/auth/unauthorizedDark.svg";

interface UnauthorizedProps {
  
}

const Unauthorized: FC<UnauthorizedProps> = ({}) => {
  return (
    <SpecialPageWrapper>
      <SpecialPageCard
        imageLight={unauthorizedLight}
        imageDark={unauthorizedDark}
        imgAltText="Unauthorized image"
        title="Woah!"
        subtitle="Error: 401 Unauthorized"
        credits="Process illustrations by Storyset"
        creditsUrl="https://storyset.com/process"
      >
        <p className="flex-1 text-lg font-semibold max-w-xs mx-auto text-accent-foreground">
          You are not allowed to access this resource.
        </p>
      </SpecialPageCard>
    </SpecialPageWrapper>
  );
}

export default Unauthorized