

export const Data = {
    profile: {
        name: "Halász Péter",
        ocupation: "Junior Full Stack Developer",
        location: "Budapest",
        email: "halaszpeter9814@gmail.com",
        telephone: "+36 30 722 5260",
        image: "images/profilepic.jpg",
    },
    aboutMe: {
        label: "Rólam",
        description:
            "27 éves Junior full stack developer vagyok, aki szeret új technológiákat megismerni és elsajátítani, emellett felhasználóbarát webalkalmazásokat létre hozni.",
    },
    skills: {
        technicalLabel: "Készségek",
        technicalSkills1: [
            "HTML",
            "CSS",
            "JS",
            "React",
            "NextJs",
            "TypeScript",
        ],
        technicalSkills2: [
            "Java",
            "Python",
            "Django",
            "C#",
            ".Net",
            "SQL",
        ]
    },
    socialMedia: {
        label: "SOCIAL",
        social: [
            {
                label: "Linkedin",
                name: "linkedin",
                url: "https://www.linkedin.com/in/hal%C3%A1sz-p%C3%A9ter-3ba656189/",
                className: "bxl-linkedin-square",
            },
            {
                label: "Github",
                name: "github",
                url: "https://github.com/danted9822",
                className: "bxl-github",
            },
            {
                label: "Portfolio",
                name: "twiiter",
                url: "https://hpeter-portfolio.netlify.app/",
                className: "bx-id-card",
            },
        ],
    },
    experience: {
        labelWorks: "TAPASZTALAT",
        works: [
            {
                title: "Junior Backend Developer",
                period: "2023.02 - ",
                company: "OVB Magyarország",
                description: [
                    "• Részvétel banki szoftverek fejlesztésében és karbantartásában.",
                    "• Django környezetben történő manuális tesztelés és hibajavítás.",
                    "• Alkalmazások optimalizálása és működésük biztosítása az üzleti igényeknek megfelelően."
                ],
            },    
            {
                title: "Szoftverfejlesztő",
                period: "2022.06 - 2022.08",
                company: "Interface Kft.",
                description: [
                    "Meglévő rendszer Java és Vue nyelvre való átírása."
                ],
            }, 
            {
                title: "Rendszergazda",
                period: "2019.07 - 2020.01",
                company: "Polgármesteri Hivatal Szerencs",
                description: [
                    "• Windows hálozat üzemeltetése-karbantartása",
                    "• Linux szerverek üzemeltetése",
                    "• Informatikai segítségnyújtás a kollégáknak"
                ],
            },
        ]
    },

    studies: {
        labelStudies: "TANULMÁNYOK",

        academic: [
            {
                career: "Full Stack Developer",
                date: "2020-2022",
                institution: "Codecool",
            },
            {
                career: "Rendszerüzemeltető OKJ",
                date: "2017-2019",
                institution: "Miskolci SZC Bláthy Ottó Villamosipari Technikum",
            },
            {
                career: "Érettségi",
                date: "2013-2017",
                institution: "Bocskai István Katolikus Gimnázium és Technikum",
            }
        ],
    },



    certificates: {
        certificateLabel: "Tanúsítványok",
        certificates: [
          {
            title: "Udemy: 2022 Complete Python Bootcamp From Zero to Hero in Python",
            link: "https://www.udemy.com/course/complete-python-bootcamp/"
          },
          {
            title: "Udemy: Build a Backend REST API with Python & Django - Advanced",
            link: "https://www.udemy.com/course/django-python-advanced/?couponCode=JUST4U02223"
          },
        ]
  },

    languages: {
        languageTitle: "Nyelvek",
        language: [
            {
                name: "Magyar"
            },
            {

                name: "Angol"
            }

        ]
    },

    hobbies: {
        hobbieTitle: "Hobbik",
        hobbie: [
            {
                label: "Zenehallgatás",
                name: "zenehallgatás",
                className: "bx-headphone",
            },
            {
                label: "Olvasás",
                name: "olvasás",
                className: "bx-book-alt",
            },
            {
                label: "Videójáték",
                name: "videójáték",
                className: "bxs-joystick",
            },
            {
                label: "Futás",
                name: "futás",
                className: "bx-run",
            }

        ]

    }
}

