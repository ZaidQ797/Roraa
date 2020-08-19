import React, { Fragment, useState, useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, Alert } from "react-native";
import { Item, Icon, Input } from "native-base";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import cstyles from "../../constants/cstyles";
import ButtonGradient from "../../components/ButtonGradient";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../constants/Colors";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getInterest,
  postInterest,
  getSavedInterest,
} from "../../_actions/auth";
import Loader from "../../components/Loader";

function SelectStyles(props) {
  const [interests, setInterests] = useState();
  const [selected, setSelected] = useState([]);
  const [loader, setLoader] = useState(true);

  selectInterest = (interest) => {
    setSelected([...selected, interest]);
    const newInterest = interests.filter((item) => interest.Id !== item.Id);
    setInterests(newInterest);
  };
  useEffect(() => {
    new Promise((rsl, rej) => {
      props.getInterest(rsl, rej);
    })
      .then((res) => {
        setInterests(res);

        const data = new FormData();
        data.append("u_id", props.user.u_id);
        new Promise((rsl, rej) => {
          props.getSavedInterest(data, rsl, rej);
        })
          .then((res) => {
            setLoader(false);
            // res.map((item) => {
            // 	selectInterest(item)
            // })
            // setSelected(res);
            // const newInterest = interests.filter(
            //   (item) => !res.includes(item.Id)
            // );
            setInterests(newInterest);
          })
          .catch((err) => {
            setLoader(false);
          });
      })
      .catch((err) => {
        Alert.alert("Roraa", err.message);
      });
  }, []);
  function deSelectInterest(item) {
    const newSelected = selected.filter((interest) => interest.Id !== item.Id);
    setSelected(newSelected);
    setInterests([...interests, item]);
  }
  const saveInterests = () => {
    setLoader(true);
    let params = props.route.params;
    let navTo = null;
    if (params && params.formInfo) {
      navTo = true;
    }
    if (selected.length > 0) {
      const formData = new FormData();
      selected.map((item) => {
        formData.append("ids[]", item.Id);
      });
      formData.append("u_id", props.user.u_id);
      console.log("savedInterest", formData);
      new Promise((rsl, rej) => {
        props.postInterest(formData, rsl, rej);
      })
        .then((res) => {
          setLoader(false);
          if (navTo) {
            props.navigation.goBack();
          } else {
            props.navigation.replace("Root");
          }
          // setInterests(res)
        })
        .catch((err) => {
          setLoader(false);
          //   Alert.alert("Roraa", err.message);
          props.navigation.replace("Root");
        });
    } else {
      if (navTo) {
        props.navigation.goBack();
      } else {
        props.navigation.replace("Root");
      }
    }
  };
  return (
    <Fragment>
      <SafeAreaView style={cstyles.container}>
        <ScrollView style={cstyles.container}>
          <View style={(cstyles.container, cstyles.padder)}>
            <View style={cstyles.contentContainer}>
              <Text style={styles.mainText}>Select Your Interests</Text>
              <Text style={styles.subtitle}>
                Choose the topics you like to follow..
              </Text>
              <Item rounded style={[styles.input, cstyles.mt_25]}>
                <Icon active name="search" />
                <Input placeholder="Search here" />
              </Item>
            </View>
            {selected.length > 0 && (
              <View style={[cstyles.container, cstyles.mt_15]}>
                <Text style={styles.boldText}>Selected Interests</Text>
                <View style={[cstyles.row, styles.buttonContainer]}>
                  {selected.map((item) => (
                    <TouchableOpacity
                      key={item}
                      style={styles.gradiantButton}
                      onPress={() => deSelectInterest(item)}
                    >
                      <LinearGradient
                        colors={[
                          Colors.primaryGradient,
                          Colors.secondryGradient,
                        ]}
                        start={[0.1, 0.1]}
                        end={[0.5, 0.5]}
                        style={styles.gradiant}
                      >
                        <Text style={cstyles.gradientButtonText}>
                          {item.Interest}
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}
            <View style={[cstyles.container, cstyles.mt_15]}>
              <Text style={styles.boldText}>Interests to Select..</Text>
              <View style={[cstyles.row, styles.buttonContainer]}>
                {interests &&
                  interests.map((interest) => (
                    <TouchableOpacity
                      key={interest}
                      style={styles.buttonStyle}
                      onPress={() => selectInterest(interest)}
                    >
                      <Text>{interest.Interest}</Text>
                    </TouchableOpacity>
                  ))}
              </View>
            </View>
            <ButtonGradient
              text="Save"
              style={{ marginTop: 20 }}
              onPress={() => {
                saveInterests();
              }}
              // onPress={() => props.navigation.navigate('Discover')}
            />
          </View>
        </ScrollView>
        {loader && <Loader />}
      </SafeAreaView>
    </Fragment>
  );
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    user: state.authReducer.user,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      getInterest,
      postInterest,
      getSavedInterest,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectStyles);

const styles = StyleSheet.create({
  input: {
    flex: 1,
    backgroundColor: "white",
    height: 40,
  },
  mainText: {
    fontSize: 30,
    fontWeight: "900",
  },
  subtitle: {
    fontSize: 15,
    color: "lightgrey",
  },
  boldText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexWrap: "wrap",
  },
  buttonStyle: {
    backgroundColor: "#dadfe3",
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 40,
    marginTop: 5,
    marginRight: 10,
  },
  gradiantButton: {
    padding: 0,
    marginTop: 5,
    marginRight: 10,
  },
  gradiant: {
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
});
