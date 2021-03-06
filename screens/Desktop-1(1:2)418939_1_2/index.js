import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1_3} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0969/6318/a2e86fcf5f431eaeff7da2f2f5398c47"
        }}
        style={styles.ImageBackground_1_4}
      />
      <View style={styles.View_1_5}>
        <Text style={styles.Text_1_5}>hello</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71ec/1b0e/d677634d7ef7ae6506cb7f7859614d35"
        }}
        style={styles.ImageBackground_5_2}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("139.89071038251367%") },
  View_1_3: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.5%"),
    top: hp("39.20765027322404%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_4: {
    width: wp("43.66521199544271%"),
    minWidth: wp("43.66521199544271%"),
    height: hp("80.78880101605192%"),
    minHeight: hp("80.78880101605192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.723674774169922%"),
    top: hp("4.215507298870817%")
  },
  View_1_5: {
    width: wp("5.347222222222222%"),
    minWidth: wp("5.347222222222222%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.69444444444444%"),
    top: hp("35.10928961748634%"),
    justifyContent: "flex-start"
  },
  Text_1_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_2: {
    width: wp("15.069444444444443%"),
    minWidth: wp("15.069444444444443%"),
    height: hp("20.62841530054645%"),
    minHeight: hp("20.62841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.51388888888889%"),
    top: hp("49.31693989071038%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
