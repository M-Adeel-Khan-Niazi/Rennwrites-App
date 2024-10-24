import { StyleSheet, Text, View } from 'react-native';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import colors from '../../Config/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { fonts } from '../../Assets';
const PopupMenuComp = ({
    selectedLabel = 'All',
    menuList = [],
    onSelectItem = () => {}
}) => (
    <Menu style={styles.menuStyle} >
        <MenuTrigger  >
            <View style={styles.placeholderContainer}>
                <View style={styles.selectedItemContainer}>
                    <Text style={styles.triggeredText}>{selectedLabel}</Text>
                </View>
                <MaterialCommunityIcons name='chevron-down' color={colors.themeOrange} size={30} />
            </View>
        </MenuTrigger>
        <MenuOptions style={styles.menuOptionsStyle}>
            {
                menuList.map((t,i) => (
            <MenuOption key={i} style={styles.optionItemContainer(i)} onSelect={() => onSelectItem(t)} >
                <Text style={styles.optionText}>{t}</Text>
            </MenuOption>
                ))
            }
          
        </MenuOptions>
    </Menu>
);
export default PopupMenuComp;
const styles = StyleSheet.create({
    selectedItemContainer: {
        backgroundColor: colors.themeOrange,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 8
    },
    placeholderContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    triggeredText: {
        color: colors.white,
        fontSize: 14,
        lineHeight: 15,
        fontFamily: fonts.SherikaMedium,
        fontWeight: '500',
        textAlign: 'center'
    },
    optionText: {
        color: colors.themeTitleOrangeShade
    },
    optionItemContainer: (index) => ({
        borderTopWidth: index ? 1 : 0,
        marginTop: index ? 5 : 0,
        borderTopColor: colors.modalFooterBorderColor
    }),
    menuOptionsStyle: {
        backgroundColor: colors.collapseBackground,
        // borderRadius: 16
    }
})