import ReviewForm from '@/components/reviews/ReviewForm';
import { getAuthSession } from '@/lib/auth'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = async ({}) => {

  const session = await getAuthSession();

  return <div className='flex justify-center'><ReviewForm session={session}/></div>
}

export default page