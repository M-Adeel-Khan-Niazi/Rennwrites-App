import AboutUs from "../../Screens/AboutUs";
import BookDetail from "../../Screens/BookDetail";
import BooksList from "../../Screens/BooksList";
import Cart from "../../Screens/Cart";
import Checkout from "../../Screens/Checkout";
import ContactUs from "../../Screens/ContactUs";
import CookiePolicy from "../../Screens/CookiePolicy";
import PaymentDetails from "../../Screens/PaymentDetails";
import PrivacyPolicy from "../../Screens/PrivacyPolicy";
import ShopScreen from "../../Screens/ShopScreen";
import SideMenu from "../../Screens/SideMenu";
import SubscriptionBox from "../../Screens/SubscriptionBox";
import TermsCondition from "../../Screens/TermsCondition";
import ThankYou from "../../Screens/ThankYou";


export const mainRoutes = [
    {
        name: 'SideMenu',
        component: SideMenu
    },
    {
        name: 'TermsCondition',
        component: TermsCondition
    },
    {
        name: 'PrivacyPolicy',
        component: PrivacyPolicy
    },
    {
        name: 'CookiePolicy',
        component: CookiePolicy
    },
    {
        name: 'BooksList',
        component: BooksList
    },
    {
        name: 'BookDetail',
        component: BookDetail
    },
    {
        name: 'Cart',
        component: Cart
    },
    {
        name: 'Checkout',
        component: Checkout
    },
    {
        name: 'PaymentDetails',
        component: PaymentDetails
    },
    {
        name: "ShopScreen",
        component: ShopScreen
    },
    {
        name: 'ThankYou',
        component: ThankYou
    },
    {
        name: 'AboutUs',
        component: AboutUs
    },
    {
        name: 'ContactUs',
        component: ContactUs
    },
    {
        name: 'SubscriptionBox',
        component: SubscriptionBox
    }
];