import  {view, text, ScrollView, SafeAreaView} from 'react-native'
import { useState } from 'react';
import {Stack, useRouter} from 'expo-router'

import {COLORS, icons, images, SIZES} from './constants'

import {nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from './components'

const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
        </SafeAreaView>
    )
}
export default Home;