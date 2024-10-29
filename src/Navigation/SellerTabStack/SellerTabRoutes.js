import { Assets } from "../../Assets";
import labels from "../../Assets/Labels";
import BrowseScreen from "../../Screens/Browse";
import ChatBot from "../../Screens/ChatBot";
import Home from "../../Screens/Home";
import MyAccount from "../../Screens/MyAccount";
import SellerBooks from "../../Screens/SellerBooks";
import SellerHome from "../../Screens/SellerHome";
import SellerInventory from "../../Screens/SellerInventory";
import ShopScreen from "../../Screens/ShopScreen";


export const sellerTabRoutes = [
    {
        label: labels.Home,
        name: "SellerHome",
        component: SellerHome,
        icon: Assets.homeOrange
    },
    {
        label: labels.Inventory,
        name: 'Inventory',
        icon: Assets.inventoryIcon,
        component: SellerInventory
    },
    {
        label: labels.Books,
        icon: Assets.shopGray,
        name: "SellerBooks",
        component: SellerBooks
    },
    {
        label: labels.Account,
        icon: Assets.accountIcon,
        name: "MyAccount",
        component: MyAccount
    }
];