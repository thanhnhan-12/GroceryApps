import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {dataFilterBrand, dataFilterCategories} from './DataFilter';
import CheckBox from 'react-native-check-box';

const CategoriesBrandFilters = () => {
  const [categories, setCategories] = useState(dataFilterCategories);

  const [brand, setBrand] = useState(dataFilterBrand);

  // Checkbox Categories
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = categoryId => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  // Checkbox Brand
  const [selectedBrand, setSelectedBrand] = useState([]);

  const handleBrandChange = categoryId => {
    if (selectedBrand.includes(categoryId)) {
      setSelectedBrand(selectedBrand.filter(id => id !== categoryId));
    } else {
      setSelectedBrand([...selectedBrand, categoryId]);
    }
  };


  return (
    <View
      style={[styles.categoriesBrand, {paddingHorizontal: 25, paddingTop: 30}]}>
      <ScrollView>
        <Text style={[styles.txtCategoriesBrand, styles.textColors]}>
          Thể loại
        </Text>

        {categories.map((items, index) => (
          <View style={[{marginTop: 20}]} key={index}>
            <CheckBox
              isChecked={selectedCategories.includes(items.id)}
              onClick={() => handleCategoryChange(items.id)}
              rightText={items.categories}
              rightTextStyle={{
                fontSize: 16,
                color: selectedCategories.includes(items.id)
                  ? '#53B175'
                  : '#181725',
              }}
              checkedCheckBoxColor="#53B175"
              uncheckedCheckBoxColor="#B1B1B1"
            />
          </View>
        ))}

        <Text
          style={[
            styles.txtCategoriesBrand,
            styles.textColors,
            {marginTop: 30},
          ]}>
          Nhãn hiệu
        </Text>

        {brand.map((items, index) => (
          <View style={[{marginTop: 20}]} key={index}>
            <CheckBox
              isChecked={selectedBrand.includes(items.id)}
              onClick={() => handleBrandChange(items.id)}
              rightText={items.brand}
              rightTextStyle={{
                fontSize: 16,
                color: selectedBrand.includes(items.id) ? '#53B175' : '#181725',
              }}
              checkedCheckBoxColor="#53B175"
              uncheckedCheckBoxColor="#B1B1B1"
            />
          </View>
        ))}

        <TouchableOpacity style={[styles.btnFilter]}>
          <Text style={[{textAlign: 'center', color: '#FFF9FF', fontSize: 18}]}>
            Lọc
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesBrand: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#EBFFEB',
  },

  textColors: {
    color: '#181725',
  },

  txtCategoriesBrand: {
    fontSize: 24,
  },

  textFilter: {
    fontSize: 20,
  },

  btnFilter: {
    backgroundColor: '#53B175',
    paddingVertical: 18,
    borderRadius: 19,
    marginVertical: 50,
  },
});

export default CategoriesBrandFilters;
