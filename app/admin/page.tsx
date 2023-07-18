import { getAuthSession } from '@/lib/auth'
import { db } from '@/lib/prisma/db';
import { redirect } from 'next/navigation';



const page = async ({}) => {
  const session = await getAuthSession();
  if(!session || session?.user.role !== 'ADMIN') {
    redirect('/');
  }
  const users = await db.user.findMany();
   return (
     <div>
       {users
         ? users.map((user, index) => (
             <div key={index}>
               <span>{user.name}</span>
               <span className="ml-3">{user.role}</span>
             </div>
           ))
         : null}
     </div>
   );
}

export default page