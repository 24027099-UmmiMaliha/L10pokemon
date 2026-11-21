import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Image, Alert } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

const datasource = [
  {
    data: [
      {name: 'Charizard', card:6},
      {name: 'Flareon', card:136 },
    ],
    title: "Fire",
    bgcolor: 'orange',
    cardbgcolor: 'mistyrose',
    icon: 'fire',
    iconColor: 'yellow',
  },
  {
    data: [
      {name: 'Squirtle', card: 7},
      {name: 'Vaporeon', card: 134},
    ],
    title: "Water",
    bgcolor: 'powderblue',
    cardbgcolor: 'lightcyan',
    icon: 'droplet',
    iconColor: 'skyblue',
  }
];

const renderItem = ({item, index, section}) => {
  return (
      <TouchableOpacity
          style={[styles.opacityStyle, {backgroundColor: section.cardbgcolor}]}
          onPress={() => {
            Alert.alert(section.title + " " + item.name + " selected!");
          }}>

        <Text style={styles.textStyle}>{item.name}</Text>

        <Image source={{uri: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_"
                + item.card + "-2x.png"}} style={{width:200, height:300}} resizeMode="contain"/>

        {/*<Text style={styles.textStyle}>*/}
        {/*  {index + 1}. {section.title} {item.key}*/}
        {/*</Text>*/}
      </TouchableOpacity>
  );
};

export default function App() {
  return (
      <View style={styles.container}>

        <Text style={{fontSize: 30}}>Lesson 10: Pokemon Cards</Text>

        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              Alert.alert("Catch another Pokemon!");
            }}>
          <FontAwesome6 name="plus" size={18} color="white" />
          <Text style={styles.buttonText}>Add Pokemon</Text>
        </TouchableOpacity>

        <SectionList
            sections={datasource}
            contentContainerStyle={{padding:10}}
            renderItem={renderItem}
            renderSectionHeader={({section: {title, bgcolor, icon, iconColor}}) => (
                <View style={[styles.headerStyle, {backgroundColor: bgcolor}]}>
                  <FontAwesome6 name={icon} size={22} color={iconColor} />
                  <Text style={styles.headerText}>
                    {title}
                  </Text>
                </View>
            )}
        />

        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
    marginBottom: 20,
  },

  opacityStyle: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },

  textStyle: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'left',
    flex: 1,
  },

  headerText: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 8,
  },

  buttonStyle: {
    backgroundColor: 'dodgerblue',
    padding: 12,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
