import React from 'react';
import IconTrashRemoveItems from '../../assets/SVG/IconTrashRemoveItems.svg';
import {TouchableOpacity, View} from 'react-native';

const Trash = () => {
  return (
    <TouchableOpacity>
      <View>
        <IconTrashRemoveItems />
      </View>
    </TouchableOpacity>
  );
};

export default Trash;
