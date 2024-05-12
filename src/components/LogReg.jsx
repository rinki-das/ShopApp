import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const LogReg = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isCreateAccount, setIsCreateAccount] = useState(false);

  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [phoneNumberValid, setPhoneNumberValid] = useState(true);
  const navigation = useNavigation();
  const handleLogin = () => {
    // Logic for handling login
    console.log('Logging in with:', email, password);
  };

  const handleCreateAccount = () => {
    // Logic for handling account creation
    console.log('Creating account with:', email, password, phoneNumber, firstName, lastName);
  };

  const validateEmail = (text) => {
    setEmail(text);
    setEmailValid(text === '' || text.endsWith('@gmail.com'));
  };

  const validatePassword = (text) => {
    setPassword(text);
    setPasswordValid(text === '' || (text.length > 6 && /[!@#$%^&*(),.?":{}|<>]/.test(text)));
  };

  const validatePhoneNumber = (text) => {
    setPhoneNumber(text);
    setPhoneNumberValid(text === '' || /^\d{0,10}$/.test(text));
  };
  
  const handleExploreAsGuest = () => {
    // Navigate to the homepage
    navigation.navigate('Home');
  };


  return (
    <View style={styles.container}>
    <Text style={styles.title}>Welcome!</Text>
    <TouchableOpacity onPress={() => setIsCreateAccount(false)}>
      <Text style={[styles.option, !isCreateAccount && styles.selected]}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setIsCreateAccount(true)}>
      <Text style={[styles.option, isCreateAccount && styles.selected]}>Create New Account</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={handleExploreAsGuest}>
      <Text style={styles.option}>Explore as Guest</Text>
    </TouchableOpacity>

      <View style={styles.formContainer}>
        {isCreateAccount ? (
          <View>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={validateEmail}
                style={[styles.input, !emailValid && styles.error]}
              />
              {email !== '' && (emailValid ? <FontAwesome name="check" size={16} color="green" style={styles.icon} /> : <FontAwesome name="times" size={16} color="red" style={styles.icon} />)}
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={validatePhoneNumber}
                style={[styles.input, !phoneNumberValid && styles.error]}
              />
              {phoneNumber !== '' && (phoneNumberValid ? <FontAwesome name="check" size={16} color="green" style={styles.icon} /> : <FontAwesome name="times" size={16} color="red" style={styles.icon} />)}
            </View>

            <View>
  <TextInput
    placeholder="First Name"
    value={firstName}
    onChangeText={setFirstName}
    style={[styles.input, styles.marginBottom]} // Apply marginBottom style
  />
  <TextInput
    placeholder="Last Name"
    value={lastName}
    onChangeText={setLastName}
    style={styles.input}
  />
</View>


            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={validatePassword}
                secureTextEntry
                style={[styles.input, !passwordValid && styles.error,styles.marginTop]}
              />
              {password !== '' && (passwordValid ? <FontAwesome name="check" size={16} color="green" style={styles.icon} /> : <FontAwesome name="times" size={16} color="red" style={styles.icon} />)}
            </View>

            <TouchableOpacity onPress={handleCreateAccount} style={styles.button}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={validateEmail}
                style={[styles.input, !emailValid && styles.error]}
              />
              {email !== '' && (emailValid ? <FontAwesome name="check" size={16} color="green" style={styles.icon} /> : <FontAwesome name="times" size={16} color="red" style={styles.icon} />)}
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={validatePassword}
                secureTextEntry
                style={[styles.input, !passwordValid && styles.error]}
              />
              {password !== '' && (passwordValid ? <FontAwesome name="check" size={16} color="green" style={styles.icon} /> : <FontAwesome name="times" size={16} color="red" style={styles.icon} />)}
            </View>

            <TouchableOpacity onPress={handleLogin} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#1A120B', // Background color
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#D5CEA3', // Title color
    },
    option: {
      fontSize: 18,
      marginBottom: 10,
      color: '#D5CEA3', 
      marginBottom: 20,// Option color
    },
    selected: {
      color: 'black',
    },
    marginBottom: {
      marginBottom: 10, // Adjust this value according to your preference
    },
    marginTop: {
      marginTop: 10,
    },
    formContainer: {
      width: '100%',
    },
    inputContainer: {
      position: 'relative',
      marginBottom: 10,
    },
    input: {
      width: '100%',
      height: 40,
      borderWidth: 1,
      borderColor: '#3C2A21', // Input border color
      borderRadius: 4,
      paddingLeft: 30,
      color: '#E5E5BC', // Input text color
      backgroundColor: '#3C2A21', // Input background color
    },
    error: {
      borderColor: 'red',
    },
    button: {
      backgroundColor: '#3C2A21', // Button background color
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop: 10,
    },
    buttonText: {
      color: '#D5CEA3', // Button text color
      fontWeight: 'bold',
      textAlign: 'center',
    },
    icon: {
      position: 'absolute',
      right: 10,
      top: 12,
    },
  });
  
export default LogReg;
