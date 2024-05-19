import React from 'react'
import HeaderContent from './HeaderContent'
import "./maincontent.css"
import Content from './content'


const Home = () => {
  return (
    <div className='main-content'>
        <HeaderContent />
        {/* <VideoContent /> */}
        <Content />
        {/* <SceondFooter /> */}
    </div>
  )
}

export default Home