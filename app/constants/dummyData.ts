const categories = [
    {
        id: 0,
        title: "Mobile Design",
        thumbnail: require("../assets/images/bg_1.png")
    },
    {
        id: 1,
        title: "3D Modeling",
        thumbnail: require("../assets/images/bg_2.png")
    },
    {
        id: 2,
        title: "Web Designing",
        thumbnail: require("../assets/images/bg_3.png")
    },
    {
        id: 3,
        title: "Illustrations",
        thumbnail: require("../assets/images/bg_4.png")
    },
    {
        id: 4,
        title: "Drawing",
        thumbnail: require("../assets/images/bg_5.png")
    },
    {
        id: 5,
        title: "Animation",
        thumbnail: require("../assets/images/bg_6.png")
    }
]

const courses_list_1 = [
    {
        id: 0,
        title: "Canava Graphic Design Course - Beginner",
        duration: "2h 30m",
        thumbnail: require("../assets/images/thumbnail_1.png")
    },
    {
        id: 1,
        title: "The Complete Presentation and speech",
        duration: "1h 30m",
        thumbnail: require("../assets/images/thumbnail_2.png")
    }
]

const courses_list_2 = [
    {
        id: 0,
        title: "The Ultimate Ui/Ux Course Beginner to Advanced",
        duration: "2h 30m",
        instructor: "James Morris",
        ratings: 4.9,
        price: 75,
        is_favourite: true,
        thumbnail: require("../assets/images/thumbnail_1.png")
    },
    {
        id: 1,
        title: "The Ultimate Ui/Ux Course Beginner to Advanced",
        duration: "2h 30m",
        instructor: "James Morris",
        ratings: 4.9,
        price: 75,
        is_favourite: false,
        thumbnail: require("../assets/images/thumbnail_2.png")
    },
    {
        id: 2,
        title: "The Ultimate Ui/Ux Course Beginner to Advanced",
        duration: "2h 30m",
        instructor: "James Morris",
        ratings: 4.9,
        price: 75,
        is_favourite: true,
        thumbnail: require("../assets/images/thumbnail_3.png")
    },
    {
        id: 3,
        title: "The Ultimate Ui/Ux Course Beginner to Advanced",
        duration: "2h 30m",
        instructor: "James Morris",
        ratings: 4.9,
        price: 75,
        is_favourite: false,
        thumbnail: require("../assets/images/thumbnail_4.png")
    },
    {
        id: 4,
        title: "The Ultimate Ui/Ux Course Beginner to Advanced",
        duration: "2h 30m",
        instructor: "James Morris",
        ratings: 4.9,
        price: 75,
        is_favourite: false,
        thumbnail: require("../assets/images/thumbnail_4.png")
    },
    {
        id: 5,
        title: "The Ultimate Ui/Ux Course Beginner to Advanced",
        duration: "2h 30m",
        instructor: "James Morris",
        ratings: 4.9,
        price: 75,
        is_favourite: false,
        thumbnail: require("../assets/images/thumbnail_4.png")
    }
]

const top_searches = [
    {
        id: 0,
        label: "Sketch"
    },
    {
        id: 1,
        label: "Modeling"
    },
    {
        id: 2,
        label: "UI/UX"
    },
    {
        id: 3,
        label: "Web"
    },
    {
        id: 4,
        label: "Mobile"
    },
    {
        id: 5,
        label: "Animation"
    },
]

const course_details = {
    id: 0,
    title: "The Ultimate Ui/Ux Course Beginner to Advanced",
    number_of_students: "33.5k Students",
    duration: "2h 30m",
    instructor: {
        name: "ByProgrammers",
        title: "Full Stack Programmer"
    },
    videos: [
        {
            title: "1. Introduction",
            duration: "1:37",
            size: "10 MB",
            progress: "100%",
            is_playing: false,
            is_complete: true,
            is_lock: false,
            is_downloaded: false,
        },
        {
            title: "2. User Interface",
            duration: "1:15:00",
            size: "200 MB",
            progress: "100%",
            is_playing: true,
            is_complete: false,
            is_lock: false,
            is_downloaded: true,
        },
        {
            title: "3. User Experience",
            duration: "1:27:00",
            size: "230 MB",
            progress: "0%",
            is_playing: false,
            is_complete: false,
            is_lock: true,
            is_downloaded: false,
        }
    ],
    students: [
        {
            id: 0,
            name: "Student 1",
            thumbnail: require("../assets/images/student_1.png")
        },
        {
            id: 1,
            name: "Student 2",
            thumbnail: require("../assets/images/student_2.png")
        },
        {
            id: 2,
            name: "Student 3",
            thumbnail: require("../assets/images/student_3.png")
        },
        {
            id: 3,
            name: "Student 3",
            thumbnail: require("../assets/images/student_3.png")
        }
    ],
    files: [
        {
            id: 0,
            name: "UI Fundamentals",
            author: "Shared by ByProgrammers",
            upload_date: "13th Sep 2021",
            thumbnail: require("../assets/images/pdf.png")
        },
        {
            id: 1,
            name: "UX Checklist",
            author: "Shared by ByProgrammers",
            upload_date: "11th Sep 2021",
            thumbnail: require("../assets/images/doc.png")
        },
        {
            id: 2,
            name: "Sketch File",
            author: "Shared by ByProgrammers",
            upload_date: "7th Sep 2021",
            thumbnail: require("../assets/images/sketch.png")
        }
    ],
    discussions: [
        {
            id: 0,
            profile: require("../assets/images/profile.png"),
            name: "ByProgrammers",
            no_of_comments: "11 comments",
            no_of_likes: "72 likes",
            posted_on: "5 days ago",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            replies: [
                {
                    id: 0,
                    profile: require("../assets/images/student_1.png"),
                    name: "ByProgrammers",
                    posted_on: "4 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
                {
                    id: 1,
                    profile: require("../assets/images/student_1.png"),
                    name: "ByProgrammers",
                    posted_on: "4 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
                {
                    id: 2,
                    profile: require("../assets/images/student_1.png"),
                    name: "ByProgrammers",
                    posted_on: "4 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
                {
                    id: 3,
                    profile: require("../assets/images/student_1.png"),
                    name: "ByProgrammers",
                    posted_on: "4 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
            ]
        },
        {
            id: 1,
            profile: require("../assets/images/profile.png"),
            name: "ByProgrammers",
            no_of_comments: "21 comments",
            no_of_likes: "372 likes",
            posted_on: "14 days ago",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            replies: [
                {
                    id: 0,
                    profile: require("../assets/images/student_1.png"),
                    name: "ByProgrammers",
                    posted_on: "7 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
                {
                    id: 1,
                    profile: require("../assets/images/student_1.png"),
                    name: "ByProgrammers",
                    posted_on: "7 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
                {
                    id: 2,
                    profile: require("../assets/images/student_1.png"),
                    name: "ByProgrammers",
                    posted_on: "7 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
            ]
        }
    ]
}

const notificationByDays = [
    {
        title: "Today",
        data: [
            {
                id: 1,
                avatar: require("../assets/images/student_1.png"),
                name: "Admin",
                created_at: "2h 47m ago",
                message: "Asked to join online courses regarding professional web designing."
            },
            {
                id: 2,
                avatar: require("../assets/images/student_2.png"),
                name: "Customer Care",
                created_at: "3h 02m ago",
                message: "Your 50% discount code is: ON50DIS. Apply on checkout."
            },
            {
                id: 3,
                avatar: require("../assets/images/student_3.png"),
                name: "Lilian Ellis",
                created_at: "4h 32m ago",
                message: "Asked assiged you to watch professional videography course."
            }
        ],

    },
    {
        title: "Yesterday",
        data: [
            {
                id: 4,
                avatar: require("../assets/images/student_1.png"),
                name: "Admin",
                created_at: "16h 47m ago",
                message: "You just signed in from another device check inbox for more details."
            },
            {
                id: 5,
                avatar: require("../assets/images/student_2.png"),
                name: "Customer Care",
                created_at: "20h 02m ago",
                message: "Your 50% discount code is: ON50DIS. Apply on checkout."
            },
        ],

    },
]

const personal_details=[
    {
        id:0,
        label:'name',
        value:'Kaushal Gupta'
    },
    {
        id:1,
        label:'ProfilePic',
        value:require('../assets/images/profile.png')
    },
    {
        id:2,
        label:'Post',
        value:'React Native Developer'
    },

]

const Profile_details=[
    {
        id:0,
        label:'Name',
        value:'Kaushal Gupta',
        icon:require('../assets/icons/profile.png')
    },
    {
        id:1,
        label:'Email',
        value:'Kaushalgupta198@gmail.com',
        icon:require('../assets/icons/email.png')
    },
    {
        id:2,
        label:'Password',
        value:'Updated 2 weeks ago',
        icon:require('../assets/icons/lock.png')
    },
    {
        id:3,
        label:'Contact',
        value:'+91 8860393547',
        icon:require('../assets/icons/call.png')
    },

]
const instructor_profile = {
    id: 0,
    name: "Kaushal Gupta",
    post: "React Native Developer",
    followers: "8.8M",
    reviews:'1.8k',
    totalstudents:'180M',
    about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',   
    courses: [
        {
            id: 0,
            title: "The Ultimate Ui/Ux Course Beginner to Advanced",
            duration: "2h 30m",
            instructor: "James Morris",
            ratings: 4.9,
            price: 75,
            is_favourite: true,
            thumbnail: require("../assets/images/thumbnail_1.png")
        },
        {
            id: 1,
            title: "The Ultimate Ui/Ux Course Beginner to Advanced",
            duration: "2h 30m",
            instructor: "James Morris",
            ratings: 4.9,
            price: 75,
            is_favourite: false,
            thumbnail: require("../assets/images/thumbnail_2.png")
        },
        {
            id: 2,
            title: "The Ultimate Ui/Ux Course Beginner to Advanced",
            duration: "2h 30m",
            instructor: "James Morris",
            ratings: 4.9,
            price: 75,
            is_favourite: true,
            thumbnail: require("../assets/images/thumbnail_3.png")
        },
        {
            id: 3,
            title: "The Ultimate Ui/Ux Course Beginner to Advanced",
            duration: "2h 30m",
            instructor: "James Morris",
            ratings: 4.9,
            price: 75,
            is_favourite: false,
            thumbnail: require("../assets/images/thumbnail_4.png")
        },
    ],

    totalrating:'79%',
    studentRating:[
        {
            id:0,
            label:'Very Satisfied',
            number:587,
        },
        {
            id:1,
            label:'Satisfied',
            number:327,
        },
        {
            id:2,
            label:'Neutral',
            number:200,
        },
        {
            id:3,
            label:'Poor',
            number:44,
        },
    
    ],
    studentReviews:[
        {
            id: 0,
            name: "John Wick",
            ago:'2 days ago',
            thumbnail: require("../assets/images/student_1.png"),
            review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        },
        {
            id: 1,
            name: "John Wick",
            ago:'2 days ago',
            thumbnail: require("../assets/images/student_2.png"),
            review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        },
        {
            id: 2,
            name: "John Wick",
            ago:'2 days ago',
            thumbnail: require("../assets/images/student_3.png"),
            review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        },
        {
            id: 3,
            name: "John Wick",
            ago:'2 days ago',
            thumbnail: require("../assets/images/student_3.png"),
            review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        }
    ]
}

const memberShipPlans=[
    {
        price:'$99',
        month:'Month',
        label:'Get 7 days free trail',
        bestOffer:true
    },
    {
        price:'$39',
        month:'3months',
        label:'$13/month Billed quaterly',
        bestOffer:false
    },
    {
        price:'$68',
        month:'6months',
        label:'$11.33/month Billed half-yearly',
        bestOffer:false
    },
    {
        price:'$115',
        month:'Year',
        label:"Pay once and don't worry for one year",
        bestOffer:false
    },

]

export default {    
    categories,
    courses_list_1,
    courses_list_2,
    top_searches,
    course_details,
    notificationByDays,
    personal_details,
    Profile_details,
    instructor_profile,
    memberShipPlans
}