import React from 'react'
import ReactPlayer from 'react-player'
import data from "./link.json"

const SecurityAwarenessGuide = () => {
  return (
    <div className='SecurityAwareness-g gap-3'>
        {
            data.link.map((d,i)=>{
                return(
                  <div key={i}>
                    <ReactPlayer url={d.url} />
                  </div>
                )
            })
        }
      
    </div>
  )
}

export default SecurityAwarenessGuide