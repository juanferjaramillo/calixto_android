import { View, Text, Image } from "react-native";

export default function Card() {
  return (
    <View
      //card container
      style={{
        alignItems: "center",
        width: "90%",
        height: "70%",
        backgroundColor: "white",
        marginTop: 5,
      }}
    >
      <View
        //codigo
        style={{ width: "100%" }}
      >
        <Text style={{ textAlign: "center" }}>Código: 100001</Text>
      </View>

      <View
        //imagen
        style={{
          width: "80%",
          height: "50%",
          backgroundColor: "lightgreen",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      >
        
        <Image
          source={{
            url: 'https://res.cloudinary.com/sthemma/calixto/imgProductos/0600050.jpg',
          }}
          style={{ width: 500, height: 500 }}
          alt="Producto"
        />
      </View>
      
      <View
      //nombre
      >
        <Text>Cocoa con almendras 200 Gr.</Text>
      </View>
    </View>
  );
}
