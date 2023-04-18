import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { dataProduct } from '../ProductList/data'
import IconDe from '../../assets/SVG/iconDecrease.svg'
import IconIn from '../../assets/SVG/iconIncrease.svg'
import IconRemove from '../../assets/SVG/IconRemove.svg'

const MyCart = () => {

    const[products, setProducts] = useState(dataProduct)

    const handleIncreaseQuantity = (productId) => {
        setProducts((prevState) => {
          return prevState.map((product) => {
            if (product.id === productId) {
              return { ...product, quantity: product.quantity + 1 };
            }
            return product;
          });
        });
      };
      
      const handleDecreaseQuantity = (productId) => {
        setProducts((prevState) => {
          return prevState.map((product) => {
            if (product.id === productId && product.quantity > 0) {
              return { ...product, quantity: product.quantity - 1 };
            }
            return product;
          });
        });
      };

  return (
    <View style={[{backgroundColor: '#fff'}]} >
        <Text style={[ { fontSize: 20, color: '#181725', marginVertical: 30, textAlign: 'center', } ]} >Giỏ hàng</Text>

       {
            products.map((items, index) => (
                    <>
                            <View style={[styles.common, styles.border ]} key={index} >
                                <Image style={[styles.imgProduct]} source={items.imgProduct} />

                                <View style={[styles.common, { marginVertical: 30 } ]} >
                                    <View style={[ {marginLeft: 18, marginRight: 20, } ]} >
                                        <Text style={[styles.nameProduct]} >{items.nameProduct}</Text>
                                        <Text>{items.unit}</Text>
                                        <View style={[ {flex: 1, flexDirection: 'row', alignItems: 'center'} ]} >
                                            <TouchableOpacity style={[styles.btnDeIn,  ]} onPress={() => handleDecreaseQuantity(items.id) } >
                                                <Text >
                                                <IconDe />
                                                </Text>
                                            </TouchableOpacity>

                                            <Text style={[ styles.textAmount ]} >{items.quantity}</Text>

                                            <TouchableOpacity style={[styles.btnDeIn,  ]} onPress={() => handleIncreaseQuantity(items.id) } >
                                                <Text  >
                                                <IconIn  />
                                                </Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>

                                    <View style={[ {  } ]} >
                                        <TouchableOpacity style={[ { marginLeft: 64 } ]} >
                                            <Text >
                                                <IconRemove />
                                            </Text>
                                        </TouchableOpacity>

                                        <Text style={[styles.price ]} >{items.price}</Text>
                                    </View>

                                </View>
                                
                            </View>

                    </>

                ) 
            )
                
       }


        <TouchableOpacity style={styles.btnCheckout} >
            <Text style={styles.textCheckout} >Thanh toán</Text>
        </TouchableOpacity>
    
    </View>
  )
}

const styles = StyleSheet.create({

    common: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },

    border: {
        borderTopWidth: 1,
        borderTopColor: '#E1CECE',
        borderBottomWidth: 1,
        borderBottomColor: '#E1CECE',
    },

    imgProduct: {
        width: 80,
        height: 64.69,
    },

    nameProduct: {
        fontSize: 16,
        color: '#181725',
    },

    unit: {
        fontSize: 14,
        color: '#7C7C7C',
        marginTop: 14,
    },

    textAmount: {
        marginHorizontal: 17.45,
    },

    btnDeIn: {
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 17,
        width: 45.67,
        height: 45.67,
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: 13.42,
    },

    price: {
        fontSize: 14,
        color: '#181725',
        marginTop: 50,
    },

    btnCheckout: {
        backgroundColor: '#4CAD73',
        alignItems: 'center',
        flexDirection: 'row',
        color: '#fff',
        borderRadius: 10,
        width: '95%',
        paddingVertical: "4%",
        marginVertical: 35,
        marginLeft: 10,
    },

    textCheckout: {
        color: 'white',
        fontWeight: 700,
        width: '100%',
        textAlign: 'center',
    }

})

export default MyCart