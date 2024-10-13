import labels from "../../Assets/Labels";
import { aboutUsProfile, booksProfile, contactUsProfile, homeIconProfile, logoutProfile, myAccountProfile, shopProfile, subscriptionBoxProfile, termConditionProfile } from "../../Assets/svgs";

export const profileMenuList = [
    {
        name: labels.Home,
        icon: homeIconProfile,
        navigate: ''
    },
    {
        name: labels.MyAccount,
        icon: myAccountProfile,
        navigate: ''
    },
    {
        name: labels.AboutUs,
        icon: aboutUsProfile,
        navigate: ''
    },
    {
        name: labels.shop,
        icon: shopProfile,
        navigate: ''
    },
    {
        name: labels.Books,
        icon: booksProfile,
        navigate: ''
    },
    {
        name: labels.SubscriptionBox,
        icon: subscriptionBoxProfile,
        navigate: ''
    },
    {
        name: labels.ContactUs,
        icon: contactUsProfile,
        navigate: ''
    },
    {
        name: labels.TermsConditions,
        icon: termConditionProfile,
        navigate: 'TermsCondition'
    },
    {
        name: labels.PrivacyPolicy,
        icon: termConditionProfile,
        navigate: 'PrivacyPolicy'
    },
    {
        name: labels.CookiePolicy,
        icon: termConditionProfile,
        navigate: 'CookiePolicy'
    },
    {
        name: labels.Logout,
        icon: logoutProfile,
        navigate: ''
    }
]