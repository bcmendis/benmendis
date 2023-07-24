import Image from "next/image";
import profileDark from "../public/assets/home/profile-dark2.png"
import profileLight from "../public/assets/home/profile-light.png";


const ProfileImage = () => {
  return (
    <div className="w-full max-w-[250px]">
        <Image
          src={profileDark}
          alt="Profile Photo Dark"
          className="hidden dark:block rounded-full border-4 border-accent"
        />
        <Image
          src={profileLight}
          alt="Profile Photo Light"
          className="block dark:hidden rounded-full border-4 border-accent"
        />
      </div>
  );
};

export default ProfileImage;
