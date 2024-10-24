import labels from "../../Assets/Labels";
import { aboutUsProfile, booksProfile, contactUsProfile, homeIconProfile, logoutProfile, myAccountProfile, shopProfile, subscriptionBoxProfile, termConditionProfile } from "../../Assets/svgs";

export const profileMenuList = [
    {
        id: 0,
        name: labels.Home,
        icon: homeIconProfile,
        navigate: ''
    },
    {
        id: 1,
        name: labels.MyAccount,
        icon: myAccountProfile,
        navigate: 'MyAccount'
    },
    {
        id: 2,
        name: labels.AboutUs,
        icon: aboutUsProfile,
        navigate: 'AboutUs'
    },
    {
        id: 3,
        name: labels.shop,
        icon: shopProfile,
        navigate: 'ShopScreen'
    },
    {
        id: 4,
        name: labels.Books,
        icon: booksProfile,
        navigate: 'BooksList'
    },
    {
        id: 5,
        name: labels.SubscriptionBox,
        icon: subscriptionBoxProfile,
        navigate: 'SubscriptionBox'
    },
    {
        id: 6,
        name: labels.ContactUs,
        icon: contactUsProfile,
        navigate: 'ContactUs'
    },
    {
        id: 7,
        name: labels.TermsConditions,
        icon: termConditionProfile,
        navigate: 'TermsCondition'
    },
    {
        id: 8,
        name: labels.PrivacyPolicy,
        icon: termConditionProfile,
        navigate: 'PrivacyPolicy'
    },
    {
        id: 9,
        name: labels.CookiePolicy,
        icon: termConditionProfile,
        navigate: 'CookiePolicy'
    },
    {
        id: 10,
        name: labels.Logout,
        icon: logoutProfile,
        navigate: 'SignIn'
    }
]