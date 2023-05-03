import IconOrders from '../../assets/SVG/IconOrders.svg';
import IconInfor from '../../assets/SVG/IconInfor.svg';
import IconDelivery from '../../assets/SVG/IconDelivery.svg';
import IconArrowNext from '../../assets/SVG/IconArrowNext.svg';
import AntDesign from 'react-native-vector-icons/AntDesign'
 
export const dataInforAccount = [
  {
    id: 1,
    iconRepresent: <IconOrders />,
    title: 'Đơn hàng',
    iconArrow: <IconArrowNext />,
  },

  {
    id: 2,
    iconRepresent: <IconInfor />,
    title: 'Thông tin cá nhân',
    iconArrow: <IconArrowNext />,
  },

  {
    id: 3,
    iconRepresent: <IconDelivery />,
    title: 'Địa chỉ giao hàng',
    iconArrow: <IconArrowNext />,
  },

  {
    id: 4,
    iconRepresent: <AntDesign name='addusergroup' size={28} color="black" style={[ {marginLeft: -5} ]} />,
    title: 'Quản lý',
    iconArrow: <IconArrowNext />,
  },
];
