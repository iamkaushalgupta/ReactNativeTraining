const onboarding_screens = [
    {
        id: 1,
        backgroundImage: require("../assets/images/background_01.png"),
        bannerImage: require("../assets/images/favourite_food.png"),
        title: "Choose a Favourite Food",
        description: "When you oder Eat Steet, we’ll hook you up with exclusive coupon, specials and rewards",
        finalButton:false
    },
    {
        id: 2,
        backgroundImage: require("../assets/images/background_02.png"),
        bannerImage: require("../assets/images/hot_delivery.png"),
        title: "Hot Delivery to Home",
        description: "We make food ordering fasr, simple and free-no matter if you order online or cash",
        finalButton:false

    },
    {
        id: 3,
        backgroundImage: require("../assets/images/background_01.png"),
        bannerImage: require("../assets/images/great_food.png"),
        title: "Receive the Great Food",
        description: "You’ll receive the great food within a hour. And get free delivery credits for every order.",
        finalButton:true
    }

]

const settings=[
    {
        id:1,
        name:'Change Password',
        navigate:'Changepassword',
        icon:require('../assets/icons/changepassword.png')
    },
    {
        id:2,
        name:'Preferences',
        navigate:'Preferences',
        icon:require('../assets/icons/filter.png')
    },
    {
        id:3,
        name:'Notification',
        navigate:'Notification',
        icon:require('../assets/icons/notification.png')
    },    
    {
        id:4,
        name:'Data use',
        navigate:'Datause',
        icon:require('../assets/icons/datauseage.png')
    },
    {
        id:5,
        name:'Check Update',
        navigate:'Checkupdate',
        icon:require('../assets/icons/checkupdate.png')
    },
    {
        id:6,
        name:'Contact Us',
        navigate:'Contactus',
        icon:require('../assets/icons/phone.png')
    },
    {
        id:7,
        name:'Privacy Policy',
        navigate:'Privacypolicy',
        icon:require('../assets/icons/privacy.png')
    },
    {
        id:8,
        name:'Terms & Conditions',
        navigate:'TermsandConditons',
        icon:require('../assets/icons/terms.png')
    },
    {
        id:9,
        name:'Logout',
        navigate:'Logout',
        icon:require('../assets/icons/logout.png')
    },
    
]


const screens = {
    main_layout: "MainLayout",
    home: "Home",
    search: "Search",
    cart: "Cart",
    favourite: "Favourite",
    notification: "Notification",
    my_wallet: "My Wallet",
    settings:'Settings'
}

const keywords={
    skip:"Skip",
    next:"Next",
    letgetstarted:"Let's Get Started",
    letssignyouin:"Let's Sign You in",
    welcomebackyouvebeenmissed:"Welcome back, you've been missed",
    gettingstarted:"Getting Started",
    createanaccounttocontinue:'Create an account to continue!',
    signin:'Sign In',
    signup:'Sign Up',
    donthaveanaccount:"Don't have an account?",
    alreadyhaveanaccount:"Already have an account",
    forgetpassword:'Forget Password?',
    email:'Email',
    password:'Password',
    passwordrecovery:'Password Recovery',
    pleaseenteryouremailaddresstorecoveryourpassword: "Please enter your email addressto recover your password",
    sendemail:'Send Email',
    otpauthentication:'OTP Authentication',
    anauthenticationcodehasbeensenttoregesiteredemailid:'An authentication code has been sent to registered Email ID',
    continue:'Continue',
    bysigningupyouagreetoour:'By signing up, you agree to our.',
    termsandcondition:'Terms and Conditions'
}

const bottom_tabs = [
    {
        id: 0,
        label: screens.home,
    },
    {
        id: 1,
        label: screens.search,
    },
    {
        id: 2,
        label: screens.cart,
    },
    {
        id: 3,
        label: screens.favourite,
    },
    {
        id: 4,
        label: screens.notification,
    },
]

const delivery_time = [
    {
        id: 1,
        label: "10 Mins",
    },
    {
        id: 2,
        label: "20 Mins"
    },
    {
        id: 3,
        label: "30 Mins"
    }
]

const ratings = [
    {
        id: 1,
        label: 1,
    },
    {
        id: 2,
        label: 2,
    },
    {
        id: 3,
        label: 3,
    },
    {
        id: 4,
        label: 4,
    },
    {
        id: 5,
        label: 5,
    }
]

const tags = [
    {
        id: 1,
        label: "Burger"
    },
    {
        id: 2,
        label: "Fast Food"
    },
    {
        id: 3,
        label: "Pizza"
    },
    {
        id: 4,
        label: "Asian"
    },
    {
        id: 5,
        label: "Dessert"
    },
    {
        id: 6,
        label: "Breakfast"
    },
    {
        id: 7,
        label: "Vegetable"
    },
    {
        id: 8,
        label: "Taccos"
    }
]

export default {
    onboarding_screens,
    screens,
    bottom_tabs,
    delivery_time,
    ratings,
    tags,
    keywords,
    settings
}

