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

const notification_tab=[
    {
        title:'Today',
        data:[
            {
                icon:require("../assets/dummyData/dominos.png"),
                title:"Domino's -Buy 1 get 1 free",
                text:"Buy 1 get 1 free for small sizes",
                untilText:"until Nov 30, 2021",
                timeago:'a few seconds ago'
            },
            {
                icon:require('../assets/dummyData/veg_biryani.png'),
                title:"Veg Biryani - 35% sale today",
                text:"Buy 1 get 1 free for small sizes",
                untilText:"until Nov 30, 2021",
                timeago:'5 mins ago'
            }
        ],
    },
    {
        title:'Yesterday',
        data:[
            {
                icon:require("../assets/dummyData/dominos.png"),
                title:"Domino's -Buy 1 get 1 free",
                text:"Buy 1 get 1 free for small sizes",
                untilText:"until Nov 30, 2021",
                timeago:'1 day ago'
            },
            {
                icon:require('../assets/dummyData/veg_biryani.png'),
                title:"Veg Biryani - 35% sale today",
                text:"Buy 1 get 1 free for small sizes",
                untilText:"until Nov 30, 2021",
                timeago:'1 day ago'
            }
        ],
    }
]

const Detailhamburger = {
    id: 1,
    name: "Hamburger",
    description: "A popular spice and vegetables mixed favoured rice dish which is typically prepared by layering the briyani gravy and basmati rice flat bottom vessel. ",
    price: "$15.99",
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/hamburger.png"),
    rating:'4.5',
    time:'30 Mins',
    shipping:'Free shipping',
    sizes:['12"','14"','16"','18"'],
    
}

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
        navigate:'NotificationSetting',
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
    Mycart: "Cart",
    favourite: "Favourite",
    notification: "Notification",
    my_wallet: "My Wallet",
    settings:'Settings',
    changepassword:'Change Password',
    details:'Details'

}

const keywords={
    congratulations:'Congratulations',
    paymentSuccesfullyMade:'Payment was Successfully Made!', 
    done:'Done',
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
    termsandcondition:'Terms and Conditions',
    deliveryto:'DELIVERY TO',
    address:'No. 88, JIn Padungan, Kuching',
    populatnearyou:'Popular Near You',
    showall:'Show All',
    calories:'Calories',
    filteryoursearch:'Filter Your Search',
    distance:'Distance',
    deliverytime:'Delivery Time',
    pricerange:'Price Range',
    tags:'Tags',
    ratings:'Ratings',
    applyfilter:'Apply Filter',
    sizes:'Sizes',
    companyName:'By Successive Technologies',
    distanceApart:'1.2 KM away from you',
    buyNow:'Buy Now',
    shippingFee:'Shipping Fee',
    subtotal:'Sub Total',
    total:'Total:',
    shippingfeevalue:'$0.00',
    subtotalvalue:'$37.97',
    placeyourorder:'Place your Order',
    home:'Home',
    search:'Search',
    cart:"Cart",
    favourite:'Favourite',
    notification:'Notification'
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
        label: screens.Mycart,
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
        label: "Burger",
        icon: require('../assets/dummyData/hamburger.png'),
        text:'Chicken Party Hamburger',
        cost:'$15.11',
        calories:'78'
    },
    {
        id: 2,
        label: "Fast Food",
        icon: require('../assets/dummyData/hot_tacos.png'),
        text:'Mexican Party Hot Tacos',
        cost:'$11.13',
        calories:'66'
    },
    {
        id: 3,
        label: "Pizza",
        icon: require('../assets/dummyData/veg_biryani.png'),
        text:'Mexican Party Hot Tacos',
        cost:'$11.13',
        calories:'86'
    },
    {
        id: 4,
        label: "Asian",
        icon: require('../assets/dummyData/wrap_sandwich.png'),
        text:'Chicken Party Hamburger',
        cost:'$15.11',
        calories:'88'
    },
    {
        id: 5,
        label: "Dessert",
        icon: require('../assets/dummyData/hamburger.png'),
        text:'Mexican Party Hot Tacos',
        cost:'$11.13',
        calories:'98'

    },
    {
        id: 6,
        label: "Breakfast",
        icon: require('../assets/dummyData/hot_tacos.png'),
        text:'Chicken Party Hamburger',
        cost:'$15.11',
        calories:'78'
    },
    {
        id: 7,
        label: "Vegetable",
        icon: require('../assets/dummyData/veg_biryani.png'),
        text:'Mexican Party Hot Tacos',
        cost:'$11.13',
        calories:'76'
   
    },
    {
        id: 8,
        label: "Taccos",
        icon: require('../assets/dummyData/wrap_sandwich.png'),
        text:'Chicken Party Hamburger',
        cost:'$15.11',
        calories:'78'
    }
]

const notification_setting=[
    {
        id:1,
        name:'Notification',
        text:'You will receive daily updates',
        icon:require('../assets/icons/notification.png')
    },
    {
        id:2,
        name:'Promotional Notifications',
        text:'You will receive daily updates',
        icon:require('../assets/icons/notification.png')
    }
]

const mycart_data =[
    {
        id:1,
        name:'Hamburger',
        quanity:3,
        price:'$15.99',
        icon:require('../assets/dummyData/hamburger.png')
    },
    {
        id:2,
        name:'Hot Tacos',
        quanity:2,
        price:'$10.99',
        icon:require('../assets/dummyData/hot_tacos.png')
    },
    {
        id:3,
        name:'Veg Biryani',
        quanity:1,
        price:'$10.99',
        icon:require('../assets/dummyData/veg_biryani.png')
    },
    {
        id:4,
        name:'Hamburger',
        quanity:3,
        price:'$15.99',
        icon:require('../assets/dummyData/hamburger.png')
    },
    {
        id:5,
        name:'Hamburger',
        quanity:3,
        price:'$15.99',
        icon:require('../assets/dummyData/hamburger.png')
    },
    {
        id:6,
        name:'Hamburger',
        quanity:3,
        price:'$15.99',
        icon:require('../assets/dummyData/hamburger.png')
    },
]

export default {
    onboarding_screens,
    screens,
    bottom_tabs,
    delivery_time,
    ratings,
    tags,
    keywords,
    settings,
    notification_setting,
    Detailhamburger,
    mycart_data,
    notification_tab,
}

