import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Banner from '../components/Banner';
import GroceriesList from '../components/Groceries/GroceriesList';
import ProductList from '../components/ProductList/ProductList';
import SearchBar from '../components/SearchBar';
import {useNavigation} from '@react-navigation/native';
import Distributor from '../components/Distributor/Distributor';
import productApi from '../api/productApi';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import Groceries from '../components/Groceries/Groceries';
import categoryApi from '../api/categoryApi';

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]); // Product New
  const [sellingProduct, setSellingProduct] = useState([]); // Product Selling
  const [popularProduct, setPopularProduct] = useState([]); // Product Popular

  const [categoryList, setCategoryList] = useState([]);

  const fetchApiCategory = async () => {
    try {
      // const renderCategory = await categoryApi.category;
      // setCategoryList(renderCategory.categoryList);
      // console.log('Log ' + JSON.stringify(renderCategory));
    } catch (error) {
      console.log(error);
    }
  };

  const [value, setValue] = useState();

  function updateSearch(value) {
    //do your search logic or anything
    console.log(value);
  }

  const fetchApi = async () => {
    try {
      const renderProduct = await productApi.product();
      setItems(renderProduct.productNew);
      //   console.log("Log " + JSON.stringify(renderProduct) );
      const renderProductSelling = await productApi.productSelling();
      setSellingProduct(renderProductSelling.productSelling);
      //   console.log('Log ' + JSON.stringify(renderProductSelling));
      const renderProductPopular = await productApi.productPopular();
      setPopularProduct(renderProductPopular.productPopular);
      // console.log('Log ' + JSON.stringify(renderProductPopular));

      const renderCategory = await categoryApi.category();
      setCategoryList(renderCategory.categoryList);
      // console.log('Log ' + JSON.stringify(renderCategory));

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log('Fetch');
    fetchApi();

    // fetchApiCategory();
  }, []);

  if (loading) {
    return <Spinner visible={loading} />;
  }

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <ScrollView>
        {/* Search */}
        <SearchBar
          value={value}
          updateSearch={updateSearch}
          style={{marginTop: '8%'}}
        />

        {/* Banner */}
        <Banner />

        {/* Content */}
        <View style={style.container}>
          {/* Newest */}
          <View style={style.titleProduct}>
            <Text style={style.heading}>Mới nhất</Text>
            <TouchableOpacity>
              <Text style={style.seeAll}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>

          {/* Card Items - Newest */}
          <ProductList productList={items} />

          {/* Best selling */}
          <View style={style.titleProduct}>
            <Text style={style.heading}>Bán chạy</Text>
            <TouchableOpacity>
              <Text style={style.seeAll}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>

          {/* Card Items - Best Selling */}
          <ProductList productList={sellingProduct} />

          {/* Groceries */}
          <View style={style.titleProduct}>
            <Text style={style.heading}>Các mặt hàng</Text>
            <TouchableOpacity>
              <Text style={style.seeAll}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>

          {/* Card Items - Grocerieslist */}
          {/* <GroceriesList item={categoryList} /> */}

          <Groceries categoryList={categoryList} />

          {/* Popular */}
          <View style={style.titleProduct}>
            <Text style={style.heading}>Phổ biến</Text>
            <TouchableOpacity>
              <Text style={style.seeAll}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>

          {/* Card Items - Popular */}
          <ProductList productList={popularProduct} />

          {/* Distributor */}
          <View style={style.titleProduct}>
            <Text style={style.heading}>Nhà phân phối</Text>
          </View>

          {/* Card Items - Distributor */}
          <Distributor />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    paddingBottom: 40,
  },

  titleProduct: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24.71,
  },

  heading: {
    fontWeight: '600',
    fontSize: 24,
    color: '#181725',
  },

  seeAll: {
    color: '#53B175',
    fontWeight: '900',
    fontSize: 16,
  },
});

export default HomeScreen;
