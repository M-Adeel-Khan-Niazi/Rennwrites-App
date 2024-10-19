import { Dimensions, Image, StyleSheet, View } from "react-native";

const ListImageCarousel = ({
    data = null,
    index = 0
}) => {
    console.log(data, index, 'ddd')
    return(
        <View style={style.container}>
            <Image source={data?.image} style={style.imageStyle} />
        </View>
    )
}
export default ListImageCarousel;
const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width/1.5,
        height: Dimensions.get('screen').width/1.5
    }
})