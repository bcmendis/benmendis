import { getAuthSession } from '@/lib/auth'
import { redirect } from 'next/navigation';



const page = async ({}) => {
  const session = await getAuthSession();
  if(!session || session?.user.role !== 'ADMIN') {
    redirect('/portfolio');
  }
  return <div>Secret Admin page</div>
}

export default page