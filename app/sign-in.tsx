import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';
import { login } from '@/lib/appwrite';
import { useGlobalContext } from '@/lib/global-provider';
import { Redirect } from 'expo-router';

const SignIn = () => {
  const {refetch, loading,isLogged }= useGlobalContext();
  if (!loading && isLogged) {
    return <Redirect href="/" />;
  }
  const handleLogin = async() => {
    const result= await login();
    if (result) {
      console.log('Login successful:', result);
      refetch({});
      // Optionally, you can navigate to a different screen or perform other actions here
    } else {
      console.error('Login failed');
      Alert.alert(
        'Login Failed', 
        'There was an error logging you in. Please try again later.',
        [{ text: 'OK' }]
      );
      // Optionally, you can navigate to a different screen or perform other actions here
    }

    
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerClassName="flex-grow justify-between pb-10">
        {/* Banner Image */}
        <Image
          source={images.onboarding}
          className="w-full h-[60vh] mt-5"
          resizeMode="contain"
        />

        {/* Welcome Section */}
        <View className="px-8">
          <Text className="text-base text-center uppercase font-rubik text-zinc-500">
            Welcome To Real Scout
          </Text>

          <Text className="text-3xl font-rubik-bold text-center mt-2 text-black">
            Let&#39;s Get You Closer To{'\n'}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>

          <Text className="text-lg font-rubik text-zinc-500 text-center mt-10">
            Login to Real Scout with Google
          </Text>

          {/* Google Button */}
          <TouchableOpacity
            onPress={handleLogin}
            accessibilityRole="button"
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View className="flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium text-black ml-2">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
