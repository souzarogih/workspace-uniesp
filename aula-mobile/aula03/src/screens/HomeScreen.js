import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import DetailsScreen from './DetailsScreen'

const HomeScreen = ({ navigation }) => {

    const items = [
        {id: 1, name: "Curso de react native", description:"Aprenda a criar apps para dispositivos mobile"},
        {id: 2, name: "Curso de java e spring boot", description:"Aprenda a criar apis robustas com java e spring"},
        {id: 3, name: "Curso de aws", description:"Domine o maior provedor de cloud"},
        {id: 4, name: "Curso de python para data science", description:"Domine a análise de dados"}
    ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Cursos disponíveis</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({item}) =>
        {
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => navigation.navigate("Details", {
                  itemId: item.id,
                  name: item.name,
                  description: item.description,
                })}
            >
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
            </TouchableOpacity>
        }


        }
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
    itemContainer: { backgroundColor: '#fff', padding: 15, marginBottom: 10, borderRadius: 8, elevation: 2 },
    itemTitle: { fontSize: 18, fontWeight: 'bold' },
    itemDescription: { fontSize: 14, color: '#555' },
    })

export default HomeScreen