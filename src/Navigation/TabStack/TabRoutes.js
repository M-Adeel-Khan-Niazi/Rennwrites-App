import { Assets } from "../../Assets";
import labels from "../../Assets/Labels";
import BrowseScreen from "../../Screens/Browse";
import ChatBot from "../../Screens/ChatBot";
import Home from "../../Screens/Home";
import ShopScreen from "../../Screens/ShopScreen";


export const tabRoutes = [
    {
        label: labels.Home,
        name: "Home",
        component: Home,
        icon: Assets.homeOrange
    },
    {
        name: "BrowseScreen",
        label: labels.Browse,
        component: BrowseScreen,
        icon: Assets.browseGray
    },
    {
        label: labels.Chatbot,
        name: 'chatBot',
        icon: Assets.chatBotGray,
        component: ChatBot
    },
    {
        label: labels.shop,
        icon: Assets.shopGray,
        name: "ShopScreen",
        component: ShopScreen
    }
];