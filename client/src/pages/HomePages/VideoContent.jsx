import React from 'react'
import { Carousel } from 'react-bootstrap'

const VideoContent = () => {
  return (
    <div className='video-content' >
        <div className='contents'>
            <Carousel>
                <Carousel.Item>
                    <div className='content'>
                        <div className='content-left'>
                            <h1>First slide label</h1>
                        </div>
                        <div className='content-right'>
                            <img src="https://cybeready.com/wp-content/uploads/personalized.png" width={300} height={300} alt="" />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='content'>
                        <div className='content-left'>
                            <h1>Second slide label</h1>
                        </div>
                        <div className='content-right'>
                            <img src="https://cybeready.com/wp-content/uploads/personalized.png" width={300} height={300} alt="" />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    </div>
  )
}

export default VideoContent