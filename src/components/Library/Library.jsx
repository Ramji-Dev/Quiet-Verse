import React from 'react'
import ParaLib from '../ParaLib'
import './Library.css'

function Library() {
  return (
    // <div>
        <div className="para-con" id='library'>
            <ParaLib image={'./images/1.webp'} text={'Enclave'} bg={'FFFFFF'}/>
            <ParaLib image={'./images/2.webp'} text={'Epicenter'} bg={'F2BC7E'} />
            <ParaLib image={'./images/3.webp'} text={'Chronicle'} bg={'FFE6A7'} />
            <ParaLib image={'./images/4.webp'} text={'Sanctuary'} bg={'FFDE6A'} />
        </div>
    // </div>
  )
}

export default Library