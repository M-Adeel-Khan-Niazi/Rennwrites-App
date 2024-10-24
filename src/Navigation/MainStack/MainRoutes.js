import AboutUs from "../../Screens/AboutUs";
import AddNewAddress from "../../Screens/AddNewAddress";
import AddNewCreditCard from "../../Screens/AddNewCard";
import BookDetail from "../../Screens/BookDetail";
import BooksList from "../../Screens/BooksList";
import Cart from "../../Screens/Cart";
import ChangePassword from "../../Screens/ChangePassword";
import Checkout from "../../Screens/Checkout";
import ContactUs from "../../Screens/ContactUs";
import CookiePolicy from "../../Screens/CookiePolicy";
import CreditCardDetail from "../../Screens/CreditCardDetail";
import EditProfile from "../../Screens/EditProfile";
import MyOrders from "../../Screens/MyOrder";
import MyOrderDetail from "../../Screens/MyOrderDetail";
import MySubscription from "../../Screens/MySubscription";
import PaymentDetails from "../../Screens/PaymentDetails";
import PrivacyPolicy from "../../Screens/PrivacyPolicy";
import ProfileDetail from "../../Screens/ProfileDetail";
import SaveAddressList from "../../Screens/SaveAddressList";
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
    },
    {
        name: 'ProfileDetail',
        component: ProfileDetail
    },
    {
        name: 'EditProfile',
        component: EditProfile
    },
    {
        name: 'ChangePassword',
        component: ChangePassword
    },
    {
        name: 'SaveAddressList',
        component: SaveAddressList
    },
    {
        name: 'AddNewAddress',
        component: AddNewAddress
    },
    {
        name: 'MySubscription',
        component: MySubscription
    },
    {
        name: 'MyOrders',
        component: MyOrders
    },
    {
        name: 'MyOrderDetail',
        component: MyOrderDetail
    },
    {
        name: 'CreditCardDetail',
        component: CreditCardDetail
    },
    {
        name: 'AddNewCreditCard',
        component: AddNewCreditCard
    }
];