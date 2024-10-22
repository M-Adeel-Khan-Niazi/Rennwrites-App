import React from 'react';
import { Dimensions, FlatList, Image, ImageBackground, ScrollView, StatusBar, Text, View } from 'react-native';
import { Assets } from '../../Assets';
import { styles } from './style';
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import labels from '../../Assets/Labels';
import Button from '../../Components/Button';
import { SvgXml } from 'react-native-svg';
import { playIcon } from '../../Assets/svgs';
import Header from '../../Components/Header';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { bookList, shopData } from '../../Assets/MockData';
import ListenBookCard from '../../Components/ListenBookCard';
import ReadBookCard from '../../Components/ReadBookCard';
import Carousel from 'react-native-reanimated-carousel';
import ListImageCarousel from '../../Components/ListImageCarousel';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../Config/Colors';
import QuantityComponent from '../../Components/QuantityComponent';
const BookDetail = ({ navigation, route }) => {
    const insets = useSafeAreaInsets()

    const { audio, shop } = route?.params
    const renderItem = ({ item, index }) => {
        return (
            <ReadBookCard
                onPress={() => navigation.navigate('BookDetail', { audio: false })}
                title={item.title}
                auther={item.auther}
                index={index}
                image={item.image}
            />
        )
    }
    const renderItemAudio = ({ item, index }) => {
        return (
            <ListenBookCard
                image={item.image}
                title={item.title}
                auther={item.auther}
                index={index}
                onPress={() => navigation.navigate('BookDetail', { audio: true })}
            />
        )
    }
    const renderShopImages = ({ item, index }) => {
        return (
            <ListImageCarousel
                data={item}
                index={index}
            />
        )
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} translucent={true} backgroundColor={'transparent'} />
            <ImageBackground source={shop ? Assets.shop : Assets.trackImage} style={styles.bannerImage} blurRadius={40}>
                <LinearGradient
                    colors={['#14141400', '#141414', '#000']}
                    style={styles.absolute}
                >
                    <Header onBack={() => navigation.goBack()} contentContainerStyle={[styles.headerContainer, { marginTop: insets.top }]} />
                    <ScrollView>
                        <View style={styles.bodyContainer}>
                            {
                                shop ?
                                    <View style={styles.shopImageContainer}>
                                        <Image source={Assets.backIcon} style={styles.backIcon} />
                                        <Carousel
                                            loop
                                            width={Dimensions.get('screen').width / 1.5}
                                            height={Dimensions.get('screen').width / 1.5}
                                            autoPlay={false}
                                            pagingEnabled
                                            data={shopData}
                                            scrollAnimationDuration={1000}
                                            onSnapToItem={(index) => console.log('current index:', index)}
                                            renderItem={renderShopImages}

                                        />
                                        {/* <View> */}
                                        <Image source={Assets.farwardIcon} style={styles.backIcon} />
                                        {/* </View> */}
                                    </View>
                                    :

                                    <View style={styles.trackImageContainer}>
                                        {
                                            audio ?
                                                <View style={styles.playIconContainer}>
                                                    <SvgXml
                                                        xml={playIcon}
                                                        width={32}
                                                        height={32}
                                                    />
                                                </View>
                                                :
                                                null
                                        }
                                        <Image source={Assets.trackImage} style={styles.trackImageStyle} />
                                        {
                                            audio ?
                                                <>
                                                    <View style={styles.barContainer}>
                                                        <Animated.View style={[styles.bar, { width: 50 }]} />
                                                    </View>
                                                    <Text style={styles.timerText}>24:00 - 01:58:00</Text>
                                                </>
                                                :
                                                null
                                        }
                                    </View>
                            }
                            <View>
                                <Text style={styles.title}>Nailed it!</Text>
                                <View style={styles.priceContainer}>
                                    <Text style={styles.priceLabel}>{labels.Price}: <Text style={styles.priceTag}>{'$20.50'}</Text></Text>
                                    {
                                        shop ?
                                            <Text style={styles.productRemainTag}>{'12 Products Remaining'}</Text>

                                            :
                                            <Text style={styles.priceLabel}>{labels.Chapters}: <Text style={styles.priceTag}>{'15'}</Text></Text>

                                    }
                                </View>
                                {
                                    shop ?
                                        <View style={styles.priceContainer}>
                                            <View style={styles.colorContainer}>
                                                <Text style={styles.priceLabel}>{labels.Color}:</Text>
                                                <View style={styles.paletteContainer}>
                                                    <View style={styles.colorPalet(colors.themeOrange)} />
                                                    <View style={styles.colorPalet(colors.grayColorPalette)} />
                                                    <View style={styles.colorPalet(colors.white)} />
                                                </View>
                                            </View>
                                            {/* <Text style={styles.priceLabel}>{labels.Price}: <Text style={styles.priceTag}>{'$20.50'}</Text></Text> */}
                                            <Text style={styles.priceLabel}>{labels.Size}: <Text style={styles.priceTag}>{'Small'}<MaterialCommunityIcons name='chevron-down' size={22} /></Text></Text>
                                        </View>
                                        :
                                        null
                                }
                                <View style={styles.descContainer}>
                                    <Text style={styles.descTitle}>{labels.Description}</Text>
                                    <Text style={styles.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</Text>
                                    {
                                        shop ?
                                            null
                                            :
                                            <>
                                                <Text style={styles.autherLabel}>{labels.Author}: <Text style={styles.autherName}>{'By Mychael T Renn'}</Text></Text>
                                                <Text style={styles.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</Text>
                                            </>
                                    }
                                </View>
                                <View style={styles.bottonContainer}>
                                    {
                                        shop ?
                                            <QuantityComponent

                                            />
                                            :
                                            <Button
                                                containerStyle={styles.lfcButtonStyle}
                                                label={audio ? labels.ListenFirstChapter : labels.ReadFirstChapter}
                                                labelStyle={styles.lfcButtonLabelStyle}
                                            />
                                    }
                                    <Button
                                        onPress={() => shop ? navigation.navigate('Cart') : null}
                                        containerStyle={styles.stlButtonStyle}
                                        label={shop ? labels.AddToCart : audio ? labels.SubscribeToListen : labels.SubscribeToRead}
                                        labelStyle={styles.stlButtonLabelStyle} />
                                </View>
                            </View>
                            {
                                audio ?
                                    <View style={styles.listContainer}>
                                        <FlatList
                                            key={'#'}
                                            keyExtractor={item => "#" + item.id}
                                            data={bookList}
                                            ItemSeparatorComponent={() => <View style={styles.divider} />}
                                            renderItem={renderItemAudio}
                                            horizontal={false}
                                        />
                                    </View>
                                    :
                                    <View style={styles.listContainer}>
                                        <FlatList
                                            key={'_'}
                                            data={bookList}
                                            keyExtractor={item => "_" + item.id}
                                            ItemSeparatorComponent={() => <View style={styles.divider} />}
                                            renderItem={renderItem}
                                            horizontal={true}
                                        />
                                    </View>
                            }
                        </View>

                    </ScrollView>

                </LinearGradient>
            </ImageBackground>
        </View>
    )
}
export default BookDetail