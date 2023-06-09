import {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IconBackArrow from '../../assets/SVG/IconBackArrow.svg';
import {useNavigation} from '@react-navigation/native';

export const formatPrice = price =>
  price.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'});

export const OrderHeading = () => {
  const navigation = useNavigation();

  const [hidden, setHidden] = useState(false);

  return (
    <View style={[styles.flex]}>
      <TouchableOpacity onPress={() => navigation.navigate('AccountScreen')}>
        <IconBackArrow />
      </TouchableOpacity>
      <Text style={[styles.textInfor]}>Đơn hàng</Text>
      <Text>{hidden}</Text>
    </View>
  );
};

export const PersonalInforHeading = () => {
  const navigation = useNavigation();

  const [hidden, setHidden] = useState(false);

  return (
    <View style={[styles.flex]}>
      <TouchableOpacity onPress={() => navigation.navigate('AccountScreen')}>
        <IconBackArrow />
      </TouchableOpacity>
      <Text style={[styles.textInfor]}>Thông tin cá nhân</Text>
      <Text>{hidden}</Text>
    </View>
  );
};

export const DeliveryHeading = () => {
  const navigation = useNavigation();

  const [hidden, setHidden] = useState(false);

  return (
    <View style={[styles.flex]}>
      <TouchableOpacity onPress={() => navigation.navigate('AccountScreen')}>
        <IconBackArrow />
      </TouchableOpacity>
      <Text style={[styles.textInfor]}>Địa chỉ giao hàng</Text>
      <Text>{hidden}</Text>
    </View>
  );
};

export const AddressHeading = () => {
  const navigation = useNavigation();

  const [hidden, setHidden] = useState(false);

  return (
    <View style={[styles.flex]}>
      <TouchableOpacity onPress={() => navigation.navigate('DeliveryScreen')}>
        <IconBackArrow />
      </TouchableOpacity>
      <Text style={[styles.textInfor]}>Cập nhật địa chỉ</Text>
      <Text>{hidden}</Text>
    </View>
  );
};

export const SearchResultsHeading = () => {
  const navigation = useNavigation();

  const [hidden, setHidden] = useState(false);

  return (
    <View style={[styles.flex]}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <IconBackArrow />
      </TouchableOpacity>
      <Text style={[styles.textInfor]}>Kết quả tìm kiếm</Text>
      <Text>{hidden}</Text>
    </View>
  );
};

export const AdminHeading = () => {
  const navigation = useNavigation();

  const [hidden, setHidden] = useState(false);

  return (
    <View style={[styles.flex]}>
      <TouchableOpacity onPress={() => navigation.navigate('InforAccount')}>
        <IconBackArrow />
      </TouchableOpacity>
      <Text style={[styles.textInfor]}>Quản lý</Text>
      <Text>{hidden}</Text>
    </View>
  );
};

export const RevenueHeading = () => {
  const navigation = useNavigation();
  const [hidden, setHidden] = useState(false);
  return (
    <View style={[styles.flex]}>
      <TouchableOpacity onPress={() => navigation.navigate('InforAccount')}>
        <IconBackArrow />
      </TouchableOpacity>
      <Text style={[styles.textInfor]}>Thống kê</Text>
      <Text>{hidden}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  textInfor: {
    fontSize: 20,
    fontWeight: '900',
    color: '#181725',
  },
});
