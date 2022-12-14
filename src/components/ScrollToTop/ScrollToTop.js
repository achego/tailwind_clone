import React from 'react'
import cs from './ScrollToTop.module.css'
import { animateScroll as scroll } from 'react-scroll'

const ScrollToTop = () => {
  return (
    <div 
    className={cs.ScrollToTop}
    onClick={scroll.scrollToTop}>
        up
    </div>
  )
}

export default ScrollToTop