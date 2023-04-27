import Banner from './components/banner/Banner'
import BannerContents from './components/banner/BannerContents'
import * as contents from "./content/Home";
import AllFAQs from './components/FAQ/AllFAQs';
import Homecards from './components/cards/Homecards';
import { BsFacebook,BsWhatsapp,BsInstagram,BsTwitch,BsTwitter,BsMessenger, BsMedium, BsGoogle, BsYoutube } from 'react-icons/bs';

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
        <section className='bg-[#F3F3F1] py-24 flex justify-evenly gap-y-6 flex-wrap items-center'>
          <Homecards content={contents.homeCard1content} icons={[<BsWhatsapp size={25} key={1}/>,<BsFacebook size={25} key={2}/>,<BsInstagram size={25} key={3}/>]}/>
          <Homecards content={contents.homeCard2content} icons={[<BsTwitch size={25} key={1}/>,<BsTwitter size={25} key={2}/>,<BsMedium size={25} key={3}/>]}/>
          <Homecards content={contents.homeCard3content} icons={[<BsMessenger size={25} key={1}/>,<BsGoogle size={25} key={2}/>,<BsYoutube size={25} key={3}/>]}/>
        </section>
        <AllFAQs/>
  </main>)
}
