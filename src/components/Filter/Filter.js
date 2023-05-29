import React, {useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import IconCloseFilter from '../../assets/SVG/IconCloseFilter.svg';
import CategoriesBrandFilters from './CategoriesBrandFilters';
import {useNavigation} from '@react-navigation/native';

const Filter = ({visible, onClose, onSelectFilter}) => {
  const [selectedFilter, setSelectedFilter] = useState('Tất cả');

  const handleFilterSelect = filter => {
    setSelectedFilter(filter);
    onSelectFilter(filter);
  };

  const navigation = useNavigation();

  const handlePressTurnOffFilter = id => {
    // console.log(id);
    navigation.navigate('ExploreDetailsScreen');
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={[{backgroundColor: '#fff'}]}>
        <View style={[styles.titleFilter, {paddingHorizontal: 25}]}>
          <TouchableOpacity onPress={onClose}>
            <IconCloseFilter />
          </TouchableOpacity>
          <Text style={[styles.textFilter, styles.textColors]}>Lọc</Text>

          <Text style={[styles.textFilter, {opacity: 0}]}>Lọc</Text>
        </View>

        <ScrollView>
          <CategoriesBrandFilters />
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  titleFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 18,
  },

  textFilter: {
    fontSize: 20,
    color: '#181725',
  },
});

export default Filter;
