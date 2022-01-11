import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from "./style";
import { icons } from "../../constants";
import DatePicker from 'react-native-date-picker'

const TextAndInputField = (props: any) => {
  const [date, setDate] = useState(new Date('1970-12-01'))
  const [open, setOpen] = useState(false)

  return (
    <View>
      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        onConfirm={(date: React.SetStateAction<Date>) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
        maximumDate={new Date()}
      />
      <View style={styles().labelContainer}>
        <Text style={styles().labelText}>{props.name}</Text>
      </View>
      <View style={styles().inputContainer}>
        <TextInput numberOfLines={1} style={styles().inputText} value={date.getDate().toString() + '/' + date.getMonth().toString() + '/' + date.getFullYear().toString()} editable={false} >
        </TextInput>

        <TouchableOpacity onPress={() => setOpen(true)}>
          <Image source={icons.calender} style={styles().icon} />
        </TouchableOpacity>

      </View>
    </View>
  );

}

export default TextAndInputField;