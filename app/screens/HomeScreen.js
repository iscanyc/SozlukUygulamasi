import React, { useState } from "react";
import { Alert, View, TouchableOpacity, TextInput } from "react-native";
import Svg, { Path } from "react-native-svg";
import { HomeStyle } from "./styles";

const WordScreen = ({ navigation }) => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    if (keyword.length > 1) {
      navigation.navigate("Search", { keyword });
    } else {
      Alert.alert("Aramak için bir şeyler girmelisiniz.");
    }
  };

  return (
    <View style={HomeStyle.container}>
      <View style={HomeStyle.searchContainer}>
        <TextInput
          placeholder="Kelime..."
          value={keyword}
          style={HomeStyle.input}
          onChangeText={(text) => setKeyword(text)}
        />

        {keyword.length > 0 && (
          <TouchableOpacity onPress={() => setKeyword("")}>
            <Svg width="24" height="24" viewBox="0 0 24 24">
              <Path
                fill="#2980b9"
                d="M24 21h-17l-7-7.972 7-8.028h17v16zm-16.09-14l-5.252 6.023 5.247 5.977h14.095v-12h-14.09zm6.09 4.586l2.586-2.586 1.414 1.414-2.586 2.586 2.586 2.586-1.414 1.414-2.586-2.586-2.586 2.586-1.414-1.414 2.586-2.586-2.586-2.586 1.414-1.414 2.586 2.586z"
              />
            </Svg>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={{ marginLeft: 8 }} onPress={handleSearch}>
          <Svg width="24" height="24" viewBox="0 0 24 24">
            <Path
              fill="#2980b9"
              d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"
            />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WordScreen;
