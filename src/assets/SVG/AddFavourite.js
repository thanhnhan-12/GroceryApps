import React, { useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';

const colors = {
  transparent: 'transparent',
  white: '#fff',
  heartColor: '#e92f3c',
  textPrimary: '#515151',
  black: '#000',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  icon: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedIcon: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    borderRadius: 160,
    opacity: 0,
  },
});

const AnimatedIcon = Animatable.createAnimatableComponent(AntDesign);

const AddFavourite = () => {
  const [liked, setLiked] = useState(false);
  const largeAnimatedIconRef = useRef(null);
  const smallAnimatedIconRef = useRef(null);
  const lastPressRef = useRef(0);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <View style={[styles.container, {marginRight: '-50%' }]}>
      <TouchableOpacity
        style={styles.icon}
        activeOpacity={0.6}
        onPress={handleLike}>
        <AntDesign
          name={liked ? 'heart' : 'hearto'}
          size={25}
          color={colors.heartColor}
        />
        <AnimatedIcon
          ref={largeAnimatedIconRef}
          style={[styles.animatedIcon, {top: -20, left: 15}]}
          name="heart"
          size={30}
          color={colors.heartColor}
        />
        <AnimatedIcon
          ref={smallAnimatedIconRef}
          style={[styles.animatedIcon, {top: -48, left: 40}]}
          name="heart"
          size={20}
          color={colors.heartColor}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AddFavourite;
