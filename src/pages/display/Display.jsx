import React, { useRef, useState } from "react";
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Image
} from "react-native";
import Layout from "../../components/layout/Layout";
import Card from "../../components/card/Card";

//==================COMPONENT========================
const Display = () => {
  const drawer = useRef(null);

  //------------------Drawer contents----------------------
  const navigationView = () => (
    
    <View style={[styles.container, styles.navigationContainer]}>
      <Image 
      style={{width:50, height:50, backgroundColor:"pink"}}
      source={{url:'https://res.cloudinary.com/sthemma/calixto/logosProveedores/sfgroup.png'}}
      />
      <Text onPress={()=>drawer.current.closeDrawer()} style={styles.paragraph}>Proveedor</Text>
      <Text style={styles.paragraph}>Disponibilidad</Text>
      <Text style={styles.paragraph}>Categoría</Text>
      <Text style={styles.paragraph}>Atributos</Text>
      <Text style={styles.paragraph}>Producto</Text>
    </View>
  );


  //-------------------RENDER------------------------------
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={200}
      drawerPosition={"left"}
      renderNavigationView={navigationView}
    >
      <Layout>
        <Card />
      </Layout>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
});

export default Display;
