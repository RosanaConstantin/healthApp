import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 25,
    },
    iconRow: {
        flex: 2,
        justifyContent: 'center',
    },
    smsIcon: {
        color: 'gray',
        fontSize: 30,
    },
    smsRow: {
        flex: 2,
        justifyContent: 'flex-start',
    },
    telIcon: {
        color: '#01C89E',
        fontSize: 30,
    },
    telNameColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    telNameText: {
        color: 'gray',
        fontSize: 14,
        fontWeight: '200',
    },
    telNumberColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 5,
    },
    telNumberText: {
        fontSize: 16,
    },
    telRow: {
        flex: 6,
        flexDirection: 'column',
        justifyContent: 'center',
    },
})

const Tel = ({
                 number,
                 onPressTel,
             }) => {
    return (
        <TouchableOpacity onPress={() => onPressTel(number)}>
            <View style={[styles.container]}>
                <View style={styles.iconRow}>
                        <Icon
                            name="call"
                            underlayColor="transparent"
                            iconStyle={styles.telIcon}
                            onPress={() => onPressTel(number)}
                        />
                </View>
                <View style={styles.telRow}>
                    <View style={styles.telNumberColumn}>
                        <Text style={styles.telNumberText}>{number}</Text>
                    </View>
                </View>
                <View style={styles.smsRow}>
                    <Icon
                        name="textsms"
                        underlayColor="transparent"
                        iconStyle={styles.smsIcon}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

Tel.propTypes = {
    number: PropTypes.string.isRequired,
    onPressTel: PropTypes.func.isRequired,
}

Tel.defaultProps = {
    containerStyle: {},
    name: null,
}

export default Tel