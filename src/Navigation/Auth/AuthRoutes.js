import ForgotPasswordConfirmPassScreen from "../../Screens/ForgotPassword/ConfirmPassword";
import ForgotPasswordEmailScreen from "../../Screens/ForgotPassword/EnterEmail";
import ForgotPasswordOTPScreen from "../../Screens/ForgotPassword/OTPScreen";
import OnboardingScreens from "../../Screens/Onboarding";
import SignIn from "../../Screens/SignIn";
import SignUp from "../../Screens/SignUp";

export const authRoutes = [
    {
        name: "OnboardingScreens",
        component: OnboardingScreens
    },
    
    {
        name: "SignIn",
        component: SignIn
    },
    {
        name: "SignUp",
        component: SignUp
    },
    {
        name: 'ForgotPasswordEmailScreen',
        component: ForgotPasswordEmailScreen
    },
    {
        name: 'ForgotPasswordOTPScreen',
        component: ForgotPasswordOTPScreen
    },
    {
        name: 'ForgotPasswordConfirmPassScreen',
        component: ForgotPasswordConfirmPassScreen
    }
];