import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {dataDistributor} from './DataDistributor';

const DistributorCard = () => {
  const [items, setItems] = useState(dataDistributor);

  return (
    <FlatList
    contentContainerStyle={[ {marginTop: 10, marginLeft: 20, paddingRight: 25 } ]}
      data={items}
      horizontal
      renderItem={({item}) => (
        <View>
          <TouchableOpacity style={[ {marginRight: 15} ]} >
              <Image source={item.logo} style={[styles.imageLogo ]} />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
    imageLogo: {
        width: 100,
        height: 100,
        borderRadius: 15,
    },
});

export default DistributorCard;
