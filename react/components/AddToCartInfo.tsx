import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import ButtonGroup from './ButtonGroup'
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
  const container = generateBlockClass(styles.container, blockClass)
  const containerItem = generateBlockClass(styles.containerItem, blockClass)
  const nameStyle = generateBlockClass(styles.nameStyle, blockClass)
  const imageStyle = generateBlockClass(styles.imageStyle, blockClass)
  const tituloStyle = generateBlockClass(styles.tituloStyle, blockClass)
  const containerInfo = generateBlockClass(styles.containerInfo, blockClass)
  const priceStyle = generateBlockClass(styles.priceStyle, blockClass)
  const containerTotal = generateBlockClass(styles.containerTotal, blockClass)
  const totalStyle = generateBlockClass(styles.totalStyle, blockClass)
  const itemsStyle = generateBlockClass(styles.itemsStyle, blockClass)
  const productInfo = useProduct()
  const { orderForm: {
    items,
    totalizers
  } } = useOrderForm()
  console.log("Este producto tien esta info", productInfo)
  console.log("Esta es mi información de la orden: ", items)
  console.log("estos son mis Totalizers: ", totalizers[0])
  return (
    <div className={container}>
       <p className={tituloStyle}>¡AÑADIDO AL CARRITO CORECTAMENTE!</p>
      {
        items.map((item: any, index:number) => {
          console.log(item);
          return (
            <div key={index} className={containerItem}>
              <div className={containerInfo}>
                <img src={item.imageUrls.at1x} className={imageStyle}/>
              </div>
              <div>
                <p className={nameStyle}>{item.name} </p>
                <p>Ref: {item.id}</p>
                <p className={priceStyle}>$ {item.price / 100}</p>
                <p>Cant: {item.quantity}</p>
              </div>
            </div>

          )
        })
      }
      <div className={containerTotal}>
        <p className={itemsStyle}>Tenemos {items.length} itmes en tu compra</p>
        <p className={totalStyle}>Total: $ {totalizers[0]?.value / 100}</p>
    </div>
      <ButtonGroup blockClass=''/>
    </div>
  )
}

export default AddToCartInfo
