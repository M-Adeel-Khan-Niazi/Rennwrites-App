import { SafeAreaView } from "react-native-safe-area-context"
import { style } from "./style"
import Header from "../../Components/Header";
import labels from "../../Assets/Labels";

const Checkout = () => {
    return (
        <SafeAreaView style={style.container}>
            <Header title={labels.Checkout} />
        </SafeAreaView>
    )
}
export default Checkout;