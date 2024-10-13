import CookiePolicy from "../../Screens/CookiePolicy";
import PrivacyPolicy from "../../Screens/PrivacyPolicy";
import SideMenu from "../../Screens/SideMenu";
import TermsCondition from "../../Screens/TermsCondition";


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
    }
];