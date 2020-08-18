import React, { Component } from "react";
import { View, Alert, Modal, TouchableOpacity } from "react-native";
// import Theme from "../constants/Theme";
import cstyles from "../constants/cstyles";
import { Icon, Text } from "native-base";
import { userActions } from "../_actions/user.action";
import { connect } from "react-redux";
import Colors from "../constants/Colors";

class EmailVerificationModal extends React.Component {
    state = {
        sendingEmail: false,
        resendEmailCount: 0
    }
    constructor(props) {
        super(props);
    }
    handleResendEmail = () => {
        if (this.state.resendEmailCount < 2) {
            if (!this.state.sendingEmail) {
                this.setState({ sendingEmail: true, resendEmailCount: this.state.resendEmailCount + 1 })
                this.props.dispatch(userActions.SendVerificationEmail(this.props.data)).then(res => {
                    this.setState({ sendingEmail: false })
                }).catch(e => {
                    this.props.onLoginPress()
                })
            }
        }

    }
    render() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.modalVisible}
            // onRequestClose={() => {
            //     Alert.alert('Modal has been closed.');
            // }}
            >
                <View style={[cstyles.flexCenter, { padding: 20 }]}>

                    <Icon name='paper-plane' style={{ fontSize: 120 }} fill={Colors.dark} />

                    {
                        this.props.type == 'register-success' && <View style={{ marginTop: 35 }}>
                            <Text style={[cstyles.textCenter, { fontSize: 22 }]}>Almost Done!</Text>

                            <Text style={[cstyles.textCenter, { fontSize: 12 }]}>We've emailed a verification link to:</Text>
                            <Text style={[cstyles.textCenter, { fontSize: 18 }]}>{this.props.data && this.props.data}</Text>
                            <Text style={[cstyles.textCenter, { fontSize: 10 }]}>Click the link in email to finish creating your account.</Text>

                            <Text style={[cstyles.textCenter, { fontSize: 14, marginTop: 10 }]}>Didn't receive a link?</Text>
                            <TouchableOpacity onPress={this.handleResendEmail}>
                                <Text style={[cstyles.textCenter, { fontSize: 16, color: '#007ACC' }]}>{this.state.sendingEmail ? "Sending.." : "Resend Email"}</Text>
                            </TouchableOpacity>

                            <Text style={[cstyles.textCenter, { fontSize: 14, marginTop: 20 }]}>Confirmed?</Text>
                            <TouchableOpacity onPress={() => { this.props.onLoginPress() }}>
                                <Text style={[cstyles.textCenter, { fontSize: 16, color: '#007ACC' }]}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    }

                    {
                        this.props.type == 'unverified-email' && <View style={{ marginTop: 35 }}>
                            <Text style={[cstyles.textCenter, { fontSize: 22 }]}>Error!</Text>

                            <Text style={[cstyles.textCenter, { fontSize: 12 }]}>We've emailed a verification link to:</Text>
                            <Text style={[cstyles.textCenter, { fontSize: 18 }]}>{this.props.data && this.props.data}</Text>
                            <Text style={[cstyles.textCenter, { fontSize: 10 }]}>Click the link in email to login your account.</Text>

                            <Text style={[cstyles.textCenter, { fontSize: 14, marginTop: 10 }]}>Didn't receive a link?</Text>
                            <TouchableOpacity onPress={this.handleResendEmail}>
                                <Text style={[cstyles.textCenter, { fontSize: 16, color: '#007ACC' }]}>{this.state.sendingEmail ? "Sending.." : "Resend Email"}</Text>
                            </TouchableOpacity>

                            <Text style={[cstyles.textCenter, { fontSize: 14, marginTop: 20 }]}>Confirmed?</Text>
                            <TouchableOpacity onPress={() => { this.props.onLoginPress() }}>
                                <Text style={[cstyles.textCenter, { fontSize: 16, color: '#007ACC' }]}>Back to Login</Text>
                            </TouchableOpacity>
                        </View>
                    }


                </View>
            </Modal>
        )
    }
}
// export default EmailVerificationModal;

function mapStateToProps(state) {
    return {

    }
    // const { loggedIn, token, user } = state.authentication;
    // return { loggedIn, token, user };
}

export default connect(mapStateToProps)(EmailVerificationModal);
