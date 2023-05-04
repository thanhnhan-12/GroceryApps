import IconArrowNext from '../../assets/SVG/IconArrowNext.svg';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';

export const dataTitleAdmin = [
  {
    id: 1,
    iconRepresent: <MaterialCommunityIcons name="account-circle" size={28}
    color="black"

    />,
    title: 'Tài khoản',
    iconArrow: <IconArrowNext />,
  },

  {
    id: 2,
    iconRepresent: <Fontisto name="dollar" size={28} 
    color="black"

    />,
    title: 'Chi phí',
    iconArrow: <IconArrowNext />,
  },

  {
    id: 3,
    iconRepresent: <Entypo name="clipboard" size={28}
    color="black"

    />,
    title: 'Đơn hàng',
    iconArrow: <IconArrowNext />,
  },

  {
    id: 4,
    iconRepresent: <Foundation name="list-bullet" size={28}
    color="black"

    />,
    title: 'Danh sách sản phẩm',
    iconArrow: <IconArrowNext />,
  },

  {
    id: 5,
    iconRepresent: <AntDesign name="areachart" size={28}
    color="black"

    />,
    title: 'Doanh thu',
    iconArrow: <IconArrowNext />,
  },

  {
    id: 6,
    iconRepresent: <Feather name="package" size={28}
    color="black"

    />,
    title: 'Kho hàng',
    iconArrow: <IconArrowNext />,
  },
];
