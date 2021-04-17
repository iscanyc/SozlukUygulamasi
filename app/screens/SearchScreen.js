import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, FlatList } from "react-native";

import { SearchStyle } from "./styles";

const SearchScreen = ({ route, navigation }) => {
  const { keyword } = route.params;
  const [isFetched, setFetched] = useState(false);
  const [TDK, setTDK] = useState();

  const fetchTDK = () => {
    fetch("https://sozluk.gov.tr/gts?ara=".concat(keyword))
      .then((res) => res.json())
      .then((data) => {
        setTDK(data[0]);
        setFetched(true);
      });
  };

  useEffect(() => {
    if (!isFetched) {
      Promise.all([fetchTDK()]);
    }
  });
  if (!isFetched)
    return (
      <View style={SearchStyle.emptyContainer}>
        <Text style={SearchStyle.heading}>Yükleniyor...</Text>
      </View>
    );
  if (!TDK || !!TDK?.error)
    return (
      <View style={SearchStyle.emptyContainer}>
        <Text style={SearchStyle.heading}>Sonuç bulunamadı.</Text>
      </View>
    );

  return (
    <View style={SearchStyle.container}>
      <View style={SearchStyle.content}>
        <Text style={SearchStyle.heading}>{TDK.anlam_say} anlam bulundu.</Text>
      </View>
      <FlatList
        data={TDK.anlamlarListe}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Details", { keyword, details: item })
            }
          >
            <View style={SearchStyle.content}>
              <Text style={SearchStyle.mean}>{item.anlam}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.anlam_id}
      />
    </View>
  );
};

export default SearchScreen;
