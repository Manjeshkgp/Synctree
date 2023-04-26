import Image from 'next/image'
import { Inter } from 'next/font/google'
import Banner from './components/banner/Banner'
import BannerContents from './components/banner/BannerContents'
import * as contents from "./content/Home";

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (<main>
        <Banner variant="leftContent" background="darkGreen">
          <BannerContents heading={contents.banner1heading} paragraph={contents.banner1pargraph} input={true} inputPlaceholder='Claim Your Username' buttonText={contents.button1text} h1={true} />
        </Banner>
        <Banner variant="rightContent" background="pink">
          <BannerContents heading={contents.banner2heading} paragraph={contents.banner2pargraph} input={false} buttonColor={contents.button2Color} buttonTextColor={contents.button2TextColor} />
        </Banner>
        <Banner variant="leftContent" background="maroon">
          <BannerContents heading={contents.banner3heading} paragraph={contents.banner3pargraph} input={false} />
        </Banner>
        <Banner variant="rightContent" background="lightGray">
          <BannerContents heading={contents.banner4heading} paragraph={contents.banner4pargraph} input={false} />
        </Banner>
  </main>)
}
