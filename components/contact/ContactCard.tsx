import { FC } from 'react'
import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/prisma/db';

import { Card, CardContent } from "../ui/card";
import ContactProfile from './ContactProfile';
import ContactForm from './ContactForm';

import type { User } from '@prisma/client';

interface ContactCardProps {
  
}

const ContactCard: FC<ContactCardProps> = async ({}) => {

  const session = await getAuthSession();
  let user: User | null = null;

  if (session) {
    user = await db.user.findFirst({
      where: {
        id: session?.user.id,
      },
    });
  }
  
  return (
    <Card className="container flex items-center p-0">
      <CardContent className="flex flex-col sm:flex-row sm:items-center w-full h-full p-3 md:p-6 gap-6">
        <ContactProfile session={session} className="w-full sm:w-1/2 lg:w-1/3 h-fit bg-background" />
        <ContactForm user={user} className="w-full sm:w-1/2 lg:w-2/3" />
      </CardContent>
    </Card>
  );
}

export default ContactCard