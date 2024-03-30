import React from 'react'
import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from './imports';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt='google' loading='lazy'/>
      </div>
      <div className=''>
        <img src={slack} alt='slack' loading='lazy'/>
      </div>
      <div className=''>
        <img src={atlassian} alt='atlassian' loading='lazy'/>
      </div>
      <div className=''>
        <img src={dropbox} alt='dropbox' loading='lazy'/>
      </div>
      <div className=''>
        <img src={shopify} alt='shopify' loading='lazy'/>
      </div>
    </div>
  )
}

export default Brand