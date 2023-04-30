import React, { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const SelectDateTimePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate ] = useState('Chọn ngày tháng năm sinh')

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = date => {
    console.warn('A date has been picked: ', date);
    const dt = new Date(date);
    const x = dt.toISOString().split("T");
    const x1 = x[0].split("-");
    console.log(x1[2] + '/' + x1[1] + '/' + x1[0] );
    setSelectedDate(x1[2] + '/' + x1[1] + '/' + x1[0])
    hideDatePicker();
  };

  return (
    <View>
      <Text style={styles.label}>Chọn ngày tháng năm sinh</Text>

      <TouchableOpacity style={styles.btnLogin} onPress={showDatePicker} >
        <Text style={styles.textLogin}>{selectedDate}</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#333333',
    fontSize: 14,
    fontWeight: 500,
  },

  btnLogin: {
    height: 45,
    marginTop: 6,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    borderColor: '#ccc',
    // backgroundColor: '#F2F2F2',
  },

  textLogin: {
    // color: 'white',
    fontWeight: 700,
    width: '100%',
    textAlign: 'center',
  },
});

export default SelectDateTimePicker;
