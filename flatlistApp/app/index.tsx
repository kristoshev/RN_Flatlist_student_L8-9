import {
  Text,
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import { useState } from "react";
import defaultStyles from "../styles/defaultStyles";
import ListItemSeparator from "@/components/ListItemSeparator";
import ListItem from "@/components/ListItem";
import {dataType, DATA} from "@/data/appData";


export default function Index() {

  const [selectedId, setSelectedId] = useState<string>("1")

  type dataType = {
    id: string; // unique indentifier
    title: string; // text we see in flatlist
  };

 
  
  /* 
  declaring a function called selectedList that receives
  a param of type dataType that we will refer to as 'item'
  I can access the values of item using dot notation 
  */
  

  const handleRowPress = (item: dataType) => {
    setSelectedId(item.id);
    console.log("selected " + item.title);
  }

  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Khushi Phushi Bhusi Boo</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList
           data = {DATA}
           keyExtractor={(item: dataType) => item.id}
           ItemSeparatorComponent={() => <ListItemSeparator color="blue"/>}
           renderItem={({item}) => (
            <ListItem 
              item = {item}
              isSelected = {item.id === selectedId}
              onPress={handleRowPress}
              />
           )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
});
