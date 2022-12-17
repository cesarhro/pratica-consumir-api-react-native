import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
} from "react-native";

export default App = () => {
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [data, setData] = useState([]);

  console.warn(lat);
  const api = {
    key: "eece90fed20d88bcadbbf7e3014f845d",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric",
    lat: -8.0945983427714,
    long: -34.95567351669346,
  };

  const url = `${api.base}weather?lat=${api.lat}&lon=${api.long}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`;

  const getClima = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getClima();
  }, []);

  return (
    <ScrollView>
      <View>
        <View style={{ backgroundColor: "#4682B4", height: 500 }}>
          <Text style={{ fontSize: 30, alignSelf: "center", marginTop: 240 }}>
            O local escolhido é:
          </Text>
          <Text style={{ fontSize: 30, alignSelf: "center" }}>{data.name}</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginTop: 50,
            alignItems: "center",
            marginLeft: 15,
          }}
        >
          <TextInput
            placeholder="Digite a latitude"
            onChangeText={() => setLat}
            style={{
              backgroundColor: "#CAE1FF",
              width: 160,
              height: 70,
              marginHorizontal: 15,
              textAlign: "center",
            }}
          ></TextInput>
          <TextInput
            placeholder="Digite a longitude"
            onChangeText={() => setLon}
            style={{
              backgroundColor: "#CAE1FF",
              width: 160,
              height: 70,
              textAlign: "center",
            }}
          ></TextInput>
        </View>
        <View
          style={{ width: 337, height: 40, marginTop: 10, alignSelf: "center" }}
        ></View>
      </View>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({});
