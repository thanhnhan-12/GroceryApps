import moment from 'moment';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const SelectDateTime = ({label, dateSelected, onChangeDate}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = newDate => {
    onChangeDate(newDate);
    hideDatePicker();
  };

  return (
    <View>
      <Text style={[styles.label, styles.commonInput]}>{label}</Text>

      <TouchableOpacity style={styles.input} onPress={showDatePicker}>
        <Text style={styles.textLogin}>{dateSelected ? dateSelected.toLocaleDateString() : 'No date selected'}</Text>

      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
        // onChangeDate={}
        date={dateSelected}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    borderColor: '#ccc',
  },

  textLogin: {
    fontWeight: 700,
    width: '100%',
  },
});

export default SelectDateTime;
