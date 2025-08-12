import { Carousel } from 'antd'
import React from 'react'
import Logo from '@/assets/images/logo.png'

interface WelcomePageProps {
  // Define props here
}

const WelcomePage: React.FC<WelcomePageProps> = ({}) => {
  return (
    <Carousel autoplay>
      <div className={`bg-[url('${Logo}')] h-screen w-screen relative`}></div>
    </Carousel>
  )
}

export default WelcomePage
