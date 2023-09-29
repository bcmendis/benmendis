import { FC } from "react";
import { User } from "next-auth";
import Image from "next/image";
import { Icons } from "../layout/icons";
import { AvatarProps } from "@radix-ui/react-avatar";

import { Avatar, AvatarFallback } from "../ui/avatar";

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "name" | "image">
}

const UserAvatar: FC<UserAvatarProps> = ({ user, ...props }) => {
  return (
    <Avatar {...props}>
      {user.image ? (
        <div className="relative aspect-square h-full w-full flex justify-center">
          <Image
            sizes="20vw"
            fill
            src={user.image}
            alt={`${user.name}`}
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user?.name}</span>
          <Icons.user />
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
