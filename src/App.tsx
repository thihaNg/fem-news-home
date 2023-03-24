import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import HeadNews from './components/HeadNews/HeadNews'
import PopularNewsItem from './components/PopularNewsItem/PopularNewsItem'
import TopNewsItem from './components/TopNewsItem/TopNewsItem'
import RevivingRetroPCs from './assets/images/image-retro-pcs.jpg'
import Top10Laptops from './assets/images/image-top-laptops.jpg'
import GrowthOfGaming from './assets/images/image-gaming-growth.jpg'

const Didiver: React.FC = () => {
  return (
    <div className='divider'>

    </div>
  )
}

function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <HeadNews />
        <div className='popular-news-wrapper'>
          <h1>New</h1>
          <PopularNewsItem
            header='Hydrogen VS Electric Cars'
            body='Will Hydrogen fueled cars ever catch up to EVs?' />
          <Didiver />
          <PopularNewsItem
            header='The Downsides of AI Artistry'
            body='What are the possible adverse effects of on-demand AI image generation?' />
          <Didiver />
          <PopularNewsItem
            header='Is VC Funding Drying Up'
            body='Private funding by VC firms is down 50% YOY. We take a look at what that means.' />
        </div>
        <TopNewsItem
          index='01'
          header='Reviving Retro PCs'
          body='When happens when old PCs are given modern upgrades?'
          imgUrl={RevivingRetroPCs} />
        <TopNewsItem
          index='02'
          header='Top 10 Laptops of 2022'
          body='Our best picks for various needs and budgets'
          imgUrl={Top10Laptops} />
        <TopNewsItem
          index='03'
          header='The Growth of Gaming'
          body='How the pandemic has sparked fresh opportunities.'
          imgUrl={GrowthOfGaming} />
      </div>
    </div>
  )
}

export default App
