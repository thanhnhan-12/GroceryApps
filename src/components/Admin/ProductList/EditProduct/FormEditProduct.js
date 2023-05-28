import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import SelectDateTime from '../SelectDateTime';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropDownCategory from '../DropDownCategory';
import exploreApi from '../../../../api/exploreApi';
import {useFocusEffect} from '@react-navigation/native';
import productApi from '../../../../api/productApi';
import moment from 'moment';
import * as ImagePicker from 'react-native-image-picker';
import {objToForm} from '../../../../function';
import Spinner from 'react-native-loading-spinner-overlay/lib';

const FormEditProduct = ({navigation, route}) => {
  const windowHeight = Dimensions.get('window').height;

  const [detail, setDetail] = useState([]);

  const {productID} = route.params;
  console.log('productID: ', productID);

  const [categoryID, setCategoryID] = useState('');
  const [response, setResponse] = useState(null);
  const [medias, setMedias] = useState([]);

  const [nameProduct, setNameProduct] = useState(null);
  const [prices, setPrices] = useState(null);
  const [quantites, setQuantities] = useState(null);
  const [stockQuantities, setStockQuantities] = useState(null);
  const [expireDate, setExpireDate] = useState(new Date());
  const [units, setUnits] = useState(null);
  const [productDescriptions, setProductDescriptions] = useState(null);
  const [importPrice, setImportPrice] = useState(null);
  const [importDate, setImportDate] = useState(new Date());
  const [category, setCategory] = useState(null);
  const [dateManufactured, setDateManufactured] = useState(new Date());
  const [images, setImages] = useState(null);

  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const [explore, setExplore] = useState([]);

  const [loading, setLoading] = useState(true);

  const options = {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase: false,
    },
  };

  const openGallery = async () => {
    const images = await ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        // setMedias(response.assets);
        return response.assets;
      }
      console.log('A', response.assets);
    });
    console.log('I', images.assets);
    const files = images.assets.map(file => ({
      name: file.fileName,
      type: file.type,
      uri: file.uri,
    }));
    setMedias([...medias, ...files]);
  };

  const fetchExploreApi = async () => {
    const renderExplore = await exploreApi.explore();
    setExplore(renderExplore.categoryList);
  };

  const fetchProductDetailApi = async productID => {
    const {
      productDetail: {
        productName,
        price,
        quantity,
        expirationDate,
        unit,
        productDescription,
        importDate,
        importPrice,
        categoryID,
        dateManufactured,
      },
      images,
    } = await productApi.productDetail(productID);

    setNameProduct(productName);
    setPrices(price);
    setQuantities(quantity);
    // setExpireDate(expirationDate);
    setUnits(unit);
    setProductDescriptions(productDescription);
    // setImportDate(importDate);
    setImportPrice(importPrice);
    setCategory(categoryID);
    // setDateManufactured(dateManufactured);
    setImages(images);

    setLoading(false);
  };

  const updateProduct = async () => {
    const payload = {
      productName: nameProduct,
      price: prices,
      quantity: quantites,
      expirationDate: moment(expireDate).format('YYYY-MM-DD'),
      unit: units,
      productDescription: productDescriptions,
      importDate: moment(importDate).format('YYYY-MM-DD'),
      importPrice: importPrice,
      categoryID: categoryID,
      dateManufactured: moment(dateManufactured).format('YYYY-MM-DD'),
    };

    const createNewProduct = await productApi.updateProductById(productID,payload);

    // if (createNewProduct.message) {
    //   setIsVisibleModal(false);
    //   Alert.alert('Create product success');
    // } else {
    //   Alert.alert('Create product fail!');
    // }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchProductDetailApi(productID);
      fetchExploreApi();
    }, [productID]),
  );

  if (loading) {
    return <Spinner visible={loading} />;
  }

  return (
    <ScrollView>
      <View style={[styles.commonInputs, {}]}>
        <View style={[styles.commonInput]}>
          <Text style={styles.label}>Nhập tên sản phẩm</Text>
          <TextInput
            placeholder={'Nhập tên sản phẩm'}
            keyboardType={'default'}
            value={nameProduct}
            onChangeText={text => setNameProduct(text)}
            secureTextEntry={false}
            style={[styles.input]}
          />
        </View>

        <View style={[styles.commonInput]}>
          <Text style={styles.label}>Nhập giá tiền</Text>
          <TextInput
            placeholder={'Nhập giá tiền'}
            keyboardType={'default'}
            value={prices}
            onChangeText={number => setPrices(number)}
            secureTextEntry={false}
            style={[styles.input]}
          />
        </View>

        <View style={[styles.commonInput]}>
          <Text style={styles.label}>Nhập số lượng</Text>
          <TextInput
            placeholder={'Nhập số lượng'}
            keyboardType={'default'}
            value={quantites.toString()}
            onChangeText={number => setQuantities(number)}
            secureTextEntry={false}
            style={[styles.input]}
          />
        </View>

        <View>
          <SelectDateTime
            label="Hạn sử dụng"
            dateSelected={expireDate}
            onChangeDate={date => {
              // console.log('D: ', date);
              setExpireDate(date);
            }}
          />
        </View>

        <View style={[styles.commonInput]}>
          <Text style={styles.label}>Nhập đơn vị</Text>
          <TextInput
            placeholder={'Nhập đơn vị'}
            keyboardType={'default'}
            value={units}
            onChangeText={text => setUnits(text)}
            secureTextEntry={false}
            style={[styles.input]}
          />
        </View>

        <View style={[styles.commonInput]}>
          <Text style={styles.label}>Nhập mô tả</Text>
          <TextInput
            placeholder={'Nhập đơn vị'}
            keyboardType={'default'}
            value={productDescriptions}
            onChangeText={text => setProductDescriptions(text)}
            secureTextEntry={false}
            style={[styles.input]}
          />
        </View>

        <View style={[{marginTop: 20}]}>
          <Text style={styles.label}>Danh mục</Text>
          <DropDownCategory
            onChangeValue={categoryID => setCategoryID(categoryID)}
            dataCategory={explore}
            category={categoryID}
          />
        </View>

        <View style={[styles.commonInput]}>
          <Text style={styles.label}>Giá nhập</Text>
          <TextInput
            placeholder={'Giá nhập'}
            keyboardType={'default'}
            value={importPrice}
            onChangeText={text => setImportPrice(text)}
            secureTextEntry={false}
            style={[styles.input]}
          />
        </View>

        <View>
          <SelectDateTime
            label="Ngày nhập"
            dateSelected={importDate}
            onChangeDate={date => {
              setImportDate(date);
            }}
          />
        </View>

        <View>
          <SelectDateTime
            label="Ngày sản xuất"
            dateSelected={dateManufactured}
            onChangeDate={date => {
              setDateManufactured(date);
            }}
          />
        </View>

        <View style={[{marginTop: 20}]}>
          <Text style={styles.label}>Hình ảnh</Text>

          <TouchableOpacity style={[styles.inline]} onPress={openGallery}>
            <Ionicons name="add-circle-outline" size={60} color="black" />
            <Text>Upload Hình ảnh</Text>
          </TouchableOpacity>

          {images &&
            images?.map((item, index) => (
              <View key={index} style={styles.imageContainer}>
                <Image
                  resizeMode="cover"
                  resizeMethod="scale"
                  style={styles.image}
                  source={{uri: item.imageURL}}
                />
              </View>
            ))}
        </View>

        <TouchableOpacity style={styles.btnLogin} onPress={updateProduct}>
          <Text style={styles.textLogin}>Cập nhật</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  commonInputs: {
    marginHorizontal: 20,
    marginBottom: 30,
  },

  commonInput: {
    marginTop: 20,
  },

  label: {
    color: '#333333',
    fontSize: 14,
    fontWeight: 500,
  },

  input: {
    height: 45,
    marginTop: 6,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    borderColor: '#ccc',
    backgroundColor: '#F2F2F2',
  },

  inline: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },

  imgProduct: {
    // width: 80,
    // height: 65,
    // resizeMode: 'center',
    marginTop: 20,
  },

  btnLogin: {
    backgroundColor: '#4CAD73',
    alignItems: 'center',
    flexDirection: 'row',
    color: '#fff',
    borderRadius: 10,
    width: '100%',
    paddingVertical: '4%',
    marginTop: 25,
    // marginBottom: 0,
  },

  textLogin: {
    color: 'white',
    fontWeight: 700,
    width: '100%',
    textAlign: 'center',
  },
  imageContainer: {
    marginVertical: 24,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default FormEditProduct;
