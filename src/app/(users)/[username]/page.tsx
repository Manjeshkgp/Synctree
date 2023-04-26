import { FC } from 'react'

interface pageProps {
  params:{username:string}
}

const page: FC<pageProps> = ({params}) => {
  return <div>{params.username.slice(3)}</div>
}

export default page