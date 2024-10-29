import { SafeAreaView } from "react-native-safe-area-context"
import FocusAwareStatusBar from "../../Components/FocusAwareStatusBar";
import colors from "../../Config/Colors";

const SellerInventory = () => {
    return(
        <SafeAreaView>
            <FocusAwareStatusBar barStyle={'light-content'} backgroundColor={colors.themeOrange} />

        </SafeAreaView>
    )
}
export default SellerInventory;