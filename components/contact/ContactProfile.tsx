import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";
import ProfileImage from "../ProfileImage";
import { Icons } from "../layout/icons";
import { getAuthSession } from "@/lib/auth";

interface ContactProfileProps extends React.HTMLAttributes<HTMLElement> {}

const contactIconsStyles = "h-5 w-5 text-accent-foreground";

const profileInfo = [
  {
    title: "name",
    icon: <Icons.user2 className={contactIconsStyles} />,
    data: "Ben Clinton Mendis",
    isSensitive: false,
  },
  {
    title: "phone",
    icon: <Icons.phone className={contactIconsStyles} />,
    data: "+1 (226) 750-8585",
    isSensitive: true,
  },
  {
    title: "email",
    icon: <Icons.atSign className={contactIconsStyles} />,
    data: "benclintonmendis@gmail.com",
    isSensitive: false,
  },
  {
    title: "address",
    icon: <Icons.mapPin className={contactIconsStyles} />,
    data: "Toronto, ON, Canada",
    isSensitive: false,
  },
];


const ContactProfile: FC<ContactProfileProps> = async ({ className }) => {
  const session = await getAuthSession();

  return (
    <div
      className={cn(
        "flex flex-col w-full items-center border border-border rounded-lg p-3 md:p-6 gap-6",
        className
      )}
    >
      <ProfileImage />
      <div className="flex w-full md:w-[90%] justify-center text-sm sm:text-base">
        <div className="flex flex-col items-start gap-3 md:gap-4">
          {profileInfo.map((info, i) => (
            <div
              key={i}
              className="flex justify-center items-center"
            >
              {info.icon}
              {!session && info.isSensitive ? (
                <span className="text-muted bg-muted-foreground p-1 px-2 rounded-md ml-3">
                  Sign In to view
                </span>
              ) : (
                <span className={`text-muted-foreground ml-3 ${info.title === "email" ? "break-all" : ""}`}>{info.data}</span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default ContactProfile;
