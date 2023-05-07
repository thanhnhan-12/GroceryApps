import {Text, View} from 'react-native';
import {BaseToast, ErrorToast} from 'react-native-toast-message';
// import COLOR from './Color';

export const toastConfig = {

  success: props => (
    <BaseToast
      {...props}
      style={{borderLeftColor: 'red'}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: 20,
        fontWeight: '400',
      }}
      text2Style={{
        fontSize: 16,
        fontWeight: '400',
      }}
    />
  ),

  error: props => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),

  tomatoToast: ({text1, props}) => (
    <View style={{height: 60, width: '100%', backgroundColor: COLOR.primary}}>
      <Text>{text1}</Text>
      <Text
        style={{
          fontSize: 19,
        }}>
        {props.uuid}
      </Text>
    </View>
  ),
};
