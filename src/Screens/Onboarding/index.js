import React, { useRef } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Assets } from '../../Assets';
import { styles } from './style';
import labels from '../../Assets/Labels';
import colors from '../../Config/Colors';
import Faded from '../../Components/FadedBackground';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../Components/Button';
import { navigate } from '../../Navigation/NavigationService';

const slides = [
    {
        key: 1,
        title: 'Begin Your Reading Adventure with us',
        text: 'Enjoy access to a curated collection of e-books and audiobooks, delivered straight to your device',
        image: Assets.onboarding1,
        backgroundColor: '#59b2ab',
    },
    {
        key: 2,
        title: 'Curated Wellness Boxes for you',
        text: 'Take care of your well-being with our selection of subscription boxes tailored to health and wellness',
        image: Assets.onboarding2,
        backgroundColor: '#febe29',
    },
    {
        key: 3,
        title: 'Purchase Quality Products',
        text: 'Our platform simplifies the purchasing process, allowing users to browse, select, and purchase products with ease.',
        image: Assets.onboarding3,
        backgroundColor: '#22bcb5',
    }
];
const OnboardingScreens = ({navigation}) => {
    const sliderRef = useRef()
    const _renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Image source={item.image} style={styles.imageStyle} />
                <View style={styles.metaData}>
                    <Faded color="#000000" height={Dimensions.get('screen').height / 2}>
                        <View style={styles.descriptionDetailContainer}>
                            <Text style={styles.greetingsTitle}>{labels.WelcomeToRennwrites}</Text>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.description}>{item.text}</Text>
                        </View>
                    </Faded>
                </View>
            </View>
        );
    }
    const _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        // this.setState({ showRealApp: true });
    }
    const renderPagination = (activeIndex) => {
        // console.log(ss)
        return <View style={styles.paginationContainer}>
            <SafeAreaView>
                <View style={styles.paginationDots}>
                    {slides.length > 1 &&
                        slides.map((_, i) => (
                            <TouchableOpacity
                                key={i}
                                style={[
                                    styles.dot,
                                    i === activeIndex
                                        ? { backgroundColor: colors.themeOrange, width: 20 }
                                        : { backgroundColor: '#8C8C8C' },
                                ]}
                                onPress={() => sliderRef.current?.goToSlide(i, true)}
                            />
                        ))}
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        label={activeIndex === 2 ? labels.GetStarted : labels.Next}
                        onPress={() => activeIndex === 2 ? navigation.navigate('SignIn') : sliderRef.current?.goToSlide(activeIndex + 1, true)}
                    />
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('SignUp')} style={styles.haveAccountContainer}>
                        <Text style={styles.haveAccountText}>{labels.DontHaveAnAccount}<Text style={styles.signUpText}>{" "+labels.SignUp}</Text></Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    }
    return (
        <AppIntroSlider
            renderItem={_renderItem}
            ref={sliderRef}
            data={slides}
            renderPagination={renderPagination}
            showNextButton={false}
            onDone={_onDone}
            contentContainerStyle={{ backgroundColor: colors.black, }}
        />
    )
}

export default OnboardingScreens;