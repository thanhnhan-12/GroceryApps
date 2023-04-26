import React, {useState, useEffect } from 'react';
import StarSVG from '../../assets/SVG/Star.svg';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated,
  Easing,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const numStars = 5;

export const StarRatings = () => {
  const [rating, setRating] = useState(1);
  const animation = new Animated.Value(1);

  const rate = (star) => {
    setRating(star);
  }

  const animate = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 400,
      easing: Easing.ease,
      useNativeDriver: true
    }).start(() => {
      animation.setValue(1);
    })
  }

  useEffect(() => {
    animate();
  }, [rating])

  let stars = []

  const animateScale = animation.interpolate({
    inputRange: [1, 1.5, 2],
    outputRange: [1, 1.4, 1]
  })

  const animateOpacity = animation.interpolate({
    inputRange: [1, 1.2, 2],
    outputRange: [1, 0.5, 1]
  })

  const animationStyle = {
    transform: [{ scale: animateScale }],
    opacity: animateOpacity
  }

  for(let x = 1; x <= numStars; x++) {
    stars.push(
      <TouchableWithoutFeedback
        key={x}
        onPress={() => {
          rate(x), animate();
        }}
      >
        <Animated.View style={x <= rating ? animationStyle : ""} >
          <Star filled={x <= rating ? true : false } />
        </Animated.View>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <View style={styles.container}>
      <View style={[styles.starContainer]}>{stars}</View>
    </View>
  );
};

const Star = ({filled}) => {
  return <FontAwesome name={filled === true ? 'star' : 'star-o' } size={32} color="yellow" />;
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  starContainer: {
    flexDirection: 'row',
  }
});

export default Star;
