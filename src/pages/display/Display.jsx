import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
} from "react-native";
import Layout from "../../components/layout/Layout";
import Card from "../../components/card/Card";
import { Divider } from "@rneui/themed";
import { useStore } from "../../globalStore/useStore";
import useProducts from "../../hooks/useProducts";

//==================COMPONENT========================
export default function Display() {
  const darkBg = useStore((state) => state.darkBg);

  let products = useProducts(1);
  products = products.prodUser;

  //------------------Drawer contents----------------------
  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text
        // onPress={() => drawer.current.closeDrawer()}
        style={styles.paragraph}
      >
        Proveedor
      </Text>
      <Text style={styles.paragraph}>Disponibilidad</Text>
      <Text style={styles.paragraph}>Categoría</Text>
      <Text style={styles.paragraph}>Atributos</Text>
      <Text style={styles.paragraph}>Producto</Text>
      <Divider width={30} />
      <Text onPress={darkBg} style={styles.paragraph}>
        Salir
      </Text>
    </View>
  );

  //-------------------RENDER------------------------------
  return (
    <Layout>
      <DrawerLayoutAndroid
        // ref={drawer}
        drawerWidth={200}
        drawerPosition={"left"}
        renderNavigationView={navigationView}
      >
        <ScrollView width={360} Display={"flex"} alignItems={"center"}>
          {products?.map((p) => {
            return <Card id={p.id} productUrl={p.prodUrl} />;
          })}
        </ScrollView>
      </DrawerLayoutAndroid>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
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
  prodImage: {
    width: 50,
    height: 50,
    // backgroundColor: "pink",
  },
});
