
import notFoundLight from "../public/assets/auth/notFoundLight.svg";
import notFoundDark from "../public/assets/auth/notFoundDark.svg";

import SpecialPageWrapper, { SpecialPageCard } from "@/components/utils/SpecialPage";

export default function NotFound() {
  return (
    <SpecialPageWrapper>
      <SpecialPageCard
        imageLight={notFoundLight}
        imageDark={notFoundDark}
        imgAltText="404 not found image"
        title="Oops!"
        subtitle="Something went wrong"
        credits="Web illustrations by Storyset"
        creditsUrl="https://storyset.com/web"
      >
        <p className="flex-1 text-lg font-semibold max-w-xs mx-auto text-accent-foreground">
          The requested resource was not found.
        </p>
      </SpecialPageCard>
    </SpecialPageWrapper>
  );
}
