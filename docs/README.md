# ADD TO CART INFO COMPONENT

Este es un componente personalizado que permite mostrar en un modal la información del producto que acaba de agregar al carrito  y da un total de los artículos que están en el carrito y da tres opciones para seguir con el flujo transaccional, ir al carrito, ir a pagar o continuar comprando.

En este componente se trabajó con las siguientes tecnologías:

- Vtex.
- React.
- Typescript.
- Css.

## Imágenes del componente en los diferentes tamaños.

- Desktop

![add to cart info desktop](https://user-images.githubusercontent.com/87024446/219830801-7df4a96e-0a7a-4f7c-9f8d-70290eb4c31c.png)

- Tablet

![add to cart info tablet](https://user-images.githubusercontent.com/87024446/219830794-1cdd3170-cbac-4e2b-b64e-c6c3acb400be.png)

- Mobile

![add to cart info phone](https://user-images.githubusercontent.com/87024446/219830799-197cf127-d428-4d6f-ad9f-5f37ebf1b0cf.png)


## Configuration 

### Paso 1 - Clonar

Realizar la clonación del siguiente repositorio:
- [Repositorio](https://github.com/Yesiblato/itgloberspartnercl-add-to-cart-info)

### Paso 2 - Editar el Manifest.json 

Ingresar al archivo manifest.json y realizar las siguentes modificaciones en: `vendor`, `name`, `version`, `title` y `description`
como se muestra en el siguiente ejemplo: 

```js
{
  "vendor": "itgloberspartnercl",
  "name": "add-to-cart-info",
  "version": "0.0.1",
  "title": "Add to cart info",
  "description": "Componente que mostrará información al momento de agregar un producto al carrito",
}
```
Además, verifique que el archivo cuente con los siguientes builders: 

```js
  "builders": {
    "react": "3.x",
    "messages": "1.x",
    "docs": "0.x",
    "store": "0.x"
  }
```
### Paso 3 - Instalar node-modules

Para realizar esta instalación de node-modules, debe estar ubicado en la carpeta de `react` de la aplicación y ejecutar el comando `yarn`, y tendrá instaladas todas las dependencias necesarias para usar esta plantilla.

### Paso 4 - Ejecutar el preview

Despues de realizar los pasos anteriores puede verificar si su componente está funcionando ejecutando el comando `vtex link` si todo funciona correctamente deberá ver en consola `Sending locale change event`.

Si la consola muestra algún error, por favor verificar los pasos anteriores y vuelva a ejecutar `vtex link`.

### Paso 5 - Implementar el componente

Por último, para utilizar el componente debe agregarlo a las `dependencies` en el `manifest.json` de su tienda (store-theme) de la siguiente manera:

- vendor.name : version. 

Por ejemplo: 
```js
  "dependencies": {
    "itgloberspartnercl.add-to-cart-info": "0.x",
  }
```

## Dependencies
```js
   "vtex.checkout-resources": "0.x",
   "vtex.order-manager": "0.x",
   "vtex.product-context": "0.x"
```

## Contributors ✨

Yesica Johana Blanco Torregrosa
