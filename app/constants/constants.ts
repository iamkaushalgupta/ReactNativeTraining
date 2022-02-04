const walkthrough = [
    {
        id: 0,
        title: "Explore Online Courses",
        sub_title: "All types of educational & professional courses available online.",
        image: require("../assets/images/work.png")
    },
    {
        id: 1,
        title: "Explore Online Courses",
        sub_title: "All types of educational & professional courses available online.",
        image: require("../assets/images/work.png")
    },
    {
        id: 2,
        title: "Explore Online Courses",
        sub_title: "All types of educational & professional courses available online.",
        image: require("../assets/images/work.png")
    },
]

const categories = [
    {
        id: 0,
        label: "Mobile Design",
        icon: require("../assets/icons/mobile.png")
    },
    {
        id: 1,
        label: "3D Modeling",
        icon: require("../assets/icons/model_3d.png")
    },
    {
        id: 2,
        label: "Web Designing",
        icon: require("../assets/icons/web_design.png")
    },
    {
        id: 3,
        label: "Illustrations",
        icon: require("../assets/icons/illustration.png")
    },
    {
        id: 4,
        label: "Drawing",
        icon: require("../assets/icons/drawing.png")
    },
    {
        id: 5,
        label: "Animation",
        icon: require("../assets/icons/animation.png")
    },
    {
        id: 6,
        label: "Education",
        icon: require("../assets/icons/education.png")
    },
    {
        id: 7,
        label: "Networking",
        icon: require("../assets/icons/networking.png")
    },
    {
        id: 8,
        label: "Coding",
        icon: require("../assets/icons/coding.png")
    },
]

const screens = {
    home: "Home",
    search: "Search",
    profile: "Profile",
    login:'Login',
    Register:'Register',
    ChooseCategory:'Choose Category',
    Notification:'Notification'
}

const bottom_tabs = [
    {
        id: 0,
        label: screens.home,
        icon: require("../assets/icons/home.png")
    },
    {
        id: 1,
        label: screens.search,
        icon: require("../assets/icons/search.png")
    },
    {
        id: 2,
        label: screens.profile,
        icon: require("../assets/icons/profile.png")
    }
]

const class_types = [
    {
        id: 0,
        label: "All",
        icon: require("../assets/icons/all.png")
    },
    {
        id: 1,
        label: "Staff Pick",
        icon: require("../assets/icons/staff_pick.png")
    },
    {
        id: 2,
        label: "Original",
        icon: require("../assets/icons/original.png")
    },
]

const class_levels = [
    {
        id: 0,
        label: "Beginner"
    },
    {
        id: 1,
        label: "Intermediate"
    },
    {
        id: 2,
        label: "Advanced"
    }
]

const created_within = [
    {
        id: 0,
        label: "All Time"
    },
    {
        id: 1,
        label: "This Month"
    },
    {
        id: 2,
        label: "This Week"
    },
    {
        id: 3,
        label: "This Day"
    },
    {
        id: 4,
        label: "2 Months"
    },
    {
        id: 5,
        label: "4 Months"
    }
]

const keywords ={
    all:'All',
    staffPick:'Staff Pick',
    original:"Original",
    classType:'Class Type',
    classLevel:'Class Level',
    createdWithin:'Created Within',
    Beginner:'Begineer',
    intermediate:'Intermediate',
    allTime:'All Time',
    ThisWeek:'This Week',
    ThisMonth:'This Month',
    ThisDay:'This Day',
    twoMonths:'2 Months',
    fourMonths:'4 Months',
    classLength:"Class Length",
    reset:'Reset',
    apply:'Apply',
    expert:'Expert',
    filters:'Filter',
    cancel:'Cancel',
    bestOffer:'Best Offer',
    unlimitedStudyAnywhereAnytime:'Unlimited Study Anywhere Anytime',
    chooseaPlan:"Choose a plan",
    memberShip:"Membership",
    username:'Username',
    email:'Email',
    userNameorEmail:'Username or Email',
    password:'Password',
    LOGIN:'LOGIN',
    Login:'Login',
    createAccount:'CREATE ACCOUNT',
    orloginwith:'or login with',
    orSignUpWith:'or sign up with',
    google:'Google',
    facebook:'Facebook',
    newUser:'New User?',
    alreadyUser:'Already a User?',
    signUpNow:'Sign Up Now',
    iama:'I am a',
    student:'STUDENT',
    teacher:'TEACHER',
    next:'Next',
    letsgetstarted:"Let's get started",
    continue:'CONTINUE',
    Hello:'Hello',
    Categories:'Categories',
    seeAll:'See All',
    PopularCourses:'Popular Courses',
    By:'By',
    searchfortopiccoursesandeducators:'Search for Topics, Courses & Educators',
    TopSearches:'Top Searches',
    BrowseCategories:'Browse Categories',
    OverallProgress:'Overall Progress',
    BecomeMember:'+ Become Member',
    pages:'Pages',
    newCourseNotification:'New Course Notification',
    studyeReminder:'Study Reminder',
    HOWTO:'HOW TO',
    MakeYourBandVisible:'Make your brand more visible with our checklist',
    KaushalGupta:'Kaushal Gupta',
    MobileDesign:'Mobile Design',
    numberOfResults:'5763 Results',
    Chapters:"Chapters",
    Files:"Files",
    Discussions:"Discussions",
    videoUrl:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailURL:'https://i.picsum.photos/id/866/1600/900.jpg',
    follow:'Follow +',
    Students:'Students',
    ViewAll:'View All',
    reply:'Reply',
    likes:'Likes',
    Followers:'Followers',
    Reviews:'Reviews',
    TotalStudents:'Total Students',
    Aboutme:'About Me',
    MyCourses:'My Courses',
    studentReviews:'Student Reviews',
    connectHere:'Connect Here',
    linkedIn:'LinkedIn',
    twitter:'Twitter'
}

export default {
    walkthrough,
    categories,
    screens,
    bottom_tabs,
    class_types,
    class_levels,
    created_within,
    keywords
}