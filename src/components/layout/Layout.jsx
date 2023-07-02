import { View, Text } from "react-native";

export default function Layout(props) {
  return (
    <View
      //page container
      style={{
        flexDirection: "column",
        alignItems:"center",
        justifyContent:"center",
        height: "100%",
        width: "100%",
      }}
    >
      <View
        //App bar (upper container)
        style={{
          flexDirection: "row",
          // justifyContent: 'flex-start',
          // alignItems: 'center',
          height: "8%",
          width: "100%",
          // backgroundColor: "purple",
        }}
      >
        <View
          //logo
          style={{ width: "20%", backgroundColor: "white", }}
        >
          <Text style={{ color: "red" }}>LOGO</Text>
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
          <Text style={{ color: "white", fontSize: 25 }}>SF Group</Text>
        </View>
      </View>

      <View
        //lower container
        style={{
          flexDirection: "row",
          width: "100%",
          height: "92%",
        }}
      >
         {/* <Drawer /> */}
        {/* <View
          Drawer
          style={{
            width: "20%",
            height: "100%",
            backgroundColor: "white",
          }}
        ></View> */}

        <View
        //  Content
        style={{
            alignItems: "center",
            width:'100%',
            backgroundColor: "lightblue"}}
        >
          {props.children}
        </View>
      </View>
    </View>
  );
}
