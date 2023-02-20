# ADD TO CART INFO COMPONENT

This is a custom component that allows you to display in a modal the information of the product that you just added to the cart and gives a total of the items that are in the cart and gives three options to continue with the transactional flow, go to cart, go to pay or continue shopping.

In this component we worked with the following technologies:

- Vtex.
- React.
- Typescript.
- Css.

## Component's images.

- Desktop

![add to cart info desktop](https://user-images.githubusercontent.com/87024446/219830801-7df4a96e-0a7a-4f7c-9f8d-70290eb4c31c.png)

- Tablet

![add to cart info tablet](https://user-images.githubusercontent.com/87024446/219830794-1cdd3170-cbac-4e2b-b64e-c6c3acb400be.png)

- Mobile

![add to cart info phone](https://user-images.githubusercontent.com/87024446/219830799-197cf127-d428-4d6f-ad9f-5f37ebf1b0cf.png)


## Configuration 

### Step 1 - Clone

Cloning the following repository
- [Repository](https://github.com/Yesiblato/itgloberspartnercl-add-to-cart-info)

### Step 2 - Edit the Manifest.json 

Enter the manifest.json file and make the following changes to: `vendor`, `name`, `version`, `title` and `description`
as shown in the following example:

```js
{
  "vendor": "itgloberspartnercl",
  "name": "add-to-cart-info",
  "version": "0.0.1",
  "title": "Add to cart info",
  "description": "Componente que mostrará información al momento de agregar un producto al carrito",
}
```
Also, check that the file has the following builders and the dependencies: 

```js
  "builders": {
    "react": "3.x",
    "messages": "1.x",
    "docs": "0.x",
    "store": "0.x"
  }
```

### Dependencies
```js
   "vtex.checkout-resources": "0.x",
   "vtex.order-manager": "0.x",
   "vtex.product-context": "0.x"
```

### Step 3 - Install node-modules.

To carry out this installation of Node-Modules, it must be located in the `react` folder of the application and execute the `yarn` command, and will have all the necessary units to use this template installed.

### Step 4 - Execute the preview.

After performing the previous steps you can verify if its component is running by running the `Vtex Link` command if everything works correctly should see in` Sending locale change event`.

If the console shows any error, please verify the previous steps and re -execute `vtex link`.

### Step 5 - Deploy the component

Finally, to use the component you must add it to the `dependencies` in the `manifest.json` of your store (store-theme) as follows:

- vendor.name : version. 

For example:
```js
  "dependencies": {
    "itgloberspartnercl.add-to-cart-info": "0.x",
  }
```

And add the list-context block to the store-theme. For example:

```js
   "modal-trigger#add-to-cart-info": {
    "children": [
      "modal-layout#add-to-cart-info"
    ],
    "props": {
      "customPixelEventName": "addToCart"
    }
  },
  "modal-layout#add-to-cart-info": {
    "children": [
      "modal-header#add-to-cart-info",
      "add-to-cart-info"
    ]
  },
  "modal-header#add-to-cart-info": {
    "props": {
      "showCloseButton": true, 
      "iconCloseSize": 24
    }
  }
```

## Customization

To apply CSS customizations in this and other blocks, follow the instructions, in the following table you will find the name of the classes to style the component.


| CSS Handles |
| ----------- | 
| `container` | 
| `containerItem` | 
| `containerInfo` | 
| `imageStyle` | 
| `titleStyle` |
| `nameStyle` | 
| `priceStyle` | 
| `containerTotal` | 
| `totalStyle` | 
| `itemStyle` |
| `containerButtons` | 
| `ContainerButton2` | 
| `linkToPayStyle` | 
| `linkMincartStyle` | 
| `linkcontinuetStyle` |
| `arrowStyle` |




## Contributors ✨

Yesica Johana Blanco Torregrosa
