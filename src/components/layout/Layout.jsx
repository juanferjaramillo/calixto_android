import { View, Text, Image } from "react-native";
import { useStore } from "../../globalStore/useStore";

export default function Layout(props) {

  const color = useStore(state=>state.bg);

  return (
    <View
      //page container
      style={{
        display:"flex",
        flexDirection: "column",
        alignItems:"center",
        justifyContent:"flex-start",
        width: "100vw",
      }}
    >
      <View
        //App bar (upper container)
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: 40,
          width: "100vw",
          // backgroundColor: "purple",
        }}
      >
        <View
          //logo
          style={{ width: "20%", backgroundColor: "white", }}
        >
          <Image
          source={{uri:"https://res.cloudinary.com/sthemma/calixto/logosProveedores/sfgroup.png"}}
          style={{width:"100%", height:"100%"}}
          resizeMode="contain"
          />
        </View>
        <View
          //slogan
          style={{
            flexDirection: "row",
            alignItems: "center",
            width:'80%',
            paddingLeft: 5,
            backgroundColor: "orange",
          }}
        >
          <Text style={{ color: "white", fontSize: 20, height: 40 }}>SF Group</Text>
        </View>
      </View>

      <View
        //lower container
        style={{
          display:"flex",
          flexDirection: "column",
          width:360,
          height: 680,
          backgroundColor:color,
          // backgroundColor:"lightblue",
        }}
      >

          {props.children}
     
      </View>
    </View>
  );
}
