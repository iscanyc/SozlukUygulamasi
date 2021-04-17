import React from "react";
import { View, Text, FlatList } from "react-native";

import { DetailsStyle } from "./styles";

const DetailsScreen = ({ route }) => {
  const { details } = route.params;

  return (
    <View style={DetailsStyle.container}>
      <View style={DetailsStyle.details}>
        <View style={DetailsStyle.content}>
          <Text style={DetailsStyle.head}>Anlam</Text>
          <Text style={DetailsStyle.text}>{details.anlam}</Text>
        </View>
        {details?.ozelliklerListe?.length && (
          <View style={DetailsStyle.content}>
            <Text style={DetailsStyle.head}>Özellikler</Text>
            <Text style={DetailsStyle.text}>
              {details.ozelliklerListe
                .map((o) => o.tam_adi)
                .join(", ")
                .concat(".")}
            </Text>
          </View>
        )}
        {details?.orneklerListe?.length && (
          <View style={DetailsStyle.content}>
            <Text style={DetailsStyle.head}>Örnekler</Text>
            <FlatList
              data={details.orneklerListe}
              renderItem={({ item }) => (
                <View>
                  <Text style={DetailsStyle.text}>{item.ornek}</Text>
                  {item.yazar?.length && (
                    <Text style={DetailsStyle.muted}>
                      {item.yazar[0].tam_adi}
                    </Text>
                  )}
                </View>
              )}
              keyExtractor={(item) => item.yazar_id}
            />
          </View>
        )}
      </View>
    </View>
  );
};
export default DetailsScreen;
