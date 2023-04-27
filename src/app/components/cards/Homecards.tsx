import { FC } from 'react'
import Button from '../button/Button'

interface HomecardsProps {
    icons:[JSX.Element,JSX.Element,JSX.Element]
    content:string
}

const Homecards: FC<HomecardsProps> = ({icons,content}) => {
  return (<div className='hover:scale-105 transition-all bg-white dark:bg-gray-950 text-gray-950 dark:text-white w-[96%] md:w-[40%] lg:w-[25%] rounded-lg p-4 h-96 flex flex-col items-center justify-start border-2 border-gray-400 border-opacity-20'>
    <div className='h-60 flex justify-center items-center gap-4'>
    <Button className='text-white dark:text-black bg-[#02ACC4] dark:bg-[#8ff2ff]' variant="squircle">{icons[0]}</Button>
    <Button className='text-black dark:text-white bg-[#C8D8F4] dark:bg-[#23324e]' variant="circle">{icons[1]}</Button>
    <Button className='text-white dark:text-black bg-[#061492] dark:bg-[#7987ff]' variant="squircle">{icons[2]}</Button>
    </div>
    <div className='h-36 flex justify-center items-center'>
        <p className='text-center text-lg text-gray-950 dark:text-gray-50'>{content}</p>
    </div>
  </div>)
}

export default Homecards