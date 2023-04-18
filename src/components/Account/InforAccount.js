import React, {useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {dataInforAccount} from './DataInforAccount';
import IconAccount from '../../assets/SVG/IconAccountCircle.svg';
import IconLogout from '../../assets/SVG/IconLogout.svg'

const InforAccount = () => {
  const [inforAccount, setInforAccount] = useState(dataInforAccount);

  return (
    <View style={{backgroundColor: '#fff'}} >
      <View style={[styles.account  ]} >
          <TouchableOpacity style={[styles.iconAccount, ]} >
              <IconAccount width={80}  />
          </TouchableOpacity>
          <View style={{marginLeft: 20, }} >
              <Text style={[styles.nameAccount, styles.colors ]}>Họ và tên</Text>
              <Text style={[styles.emailAccount ]} >Email</Text>
          </View>
      </View>

      {inforAccount.map((items, index) => (
        <>
          <TouchableOpacity style={[styles.inline1 ]} >
            <View>
                {items.iconRepresent}
            </View>

            <View style={[styles.inline2 ]} >
              <Text style={[styles.textTitle, styles.colors]} >  {items.title} </Text>
              {items.iconArrow}
            </View>
          </TouchableOpacity>
        </>
      ))}

      <TouchableOpacity style={[styles.btnLogout ]} >
        {/* <View
          style={[{flexDirection: 'row', alignItems: 'center' } ]}
        > 
        </View> */}
          <View style={[{marginRight: '4%', }]} >
            <IconLogout/>
          </View>
          <Text style={[styles.textLogout ]} >Đăng xuất</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
    account: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        marginLeft: 23,
    },

    colors: {
        color: '#181725',
    },

    iconAccount: {

    },

    nameAccount: {
        fontSize: 20,
        marginBottom: 5,
    },

    emailAccount: {
        color: '#7C7C7C',
        fontSize: 16,
    },

    inline1: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 25,
        borderTopWidth: 1,
        borderTopColor: '#E2E2E2',
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2',
    },

    inline2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    textTitle: {
        fontSize: 18,
        marginLeft: 20.49,
    },

    btnLogout: {
      backgroundColor: '#DCF5DC',
      borderRadius: 19,
      paddingVertical: '4%',
      marginHorizontal: 18,
      marginVertical: 35,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    textLogout: {
      color: '#53B175',
      fontSize: 18,
    },

});

export default InforAccount;
