import React from 'react'
import { generateBlockClass } from '@vtex/css-handles'
import stylesButtons from './stylesButtons.css'
import arrow from './assets/icons/right-arrow.png';



const ButtonGroup = ({ blockClass }: { blockClass: string }) => {

  const containerButtons = generateBlockClass(stylesButtons.containerButtons, blockClass)
  const containerButtons2 = generateBlockClass(stylesButtons.containerButtons2, blockClass)
  const linkToPayStyle = generateBlockClass(stylesButtons.linkToPayStyle, blockClass)
  const linkMincartStyle = generateBlockClass(stylesButtons.linkMincartStyle, blockClass)
  const linkcontinuetStyle = generateBlockClass(stylesButtons.linkcontinuetStyle, blockClass)
  const arrowStyle = generateBlockClass(stylesButtons.arrowStyle, blockClass)
  return (
    <>
      <div className={containerButtons}>
        <a href='/checkout' className={linkToPayStyle}>IR A PAGAR <img src={arrow} className={arrowStyle} /></a>
        <a href='/minicart' className={linkMincartStyle}>VER CARRITO <img src={arrow} className={arrowStyle} /></a>
      </div>
      <div className={containerButtons2}>
      <a href='/' className={linkcontinuetStyle}>CONTINUAR COMPRANDO</a>
      </div>
    </>
  )
}

export default ButtonGroup
