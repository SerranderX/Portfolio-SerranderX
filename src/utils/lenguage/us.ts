import { USIcon } from '@iconos/lenguage/us';
import { AppLenguageData } from '@interfaces/appLenguageData.interface';

export const us: AppLenguageData = {
    lenguage: "us",
    lenguageName: "English",
    data:{
        header: {
            navbar: {
                about: "About",
                experience: "Experience",
                projects: "Projects",
                contact: "Contact",
            }
        },
        presentation: {
            title: "Portfolio of projects",
            greeting1: "Welcome,",
            greeting2: "I'm ",
            description: "Designer and software developer of Chilean nationality, dedicated to continuous learning and the creation of new projects.",
        },
        experience: {
            title: "Experience",
            description: "In this section you will find some of the tools and technologies in which I frequently work in the development of projects."
        },
        projects: {
            title: "Projects",
            description: "Some of the projects that I have developed.",
        },
        contact: {
            title: "Contact",
            description: "Send me a message with your email if you want to work with me. If you want to know more about me, you can visit my social networks.",
            inputName: "Name",
            inputEmail: "Email",
            inputSubject: "Subject",
            inputMessage: "Message",
            inputSubmit: "Send",
        },
        aboutme: {
            title: "About me",
            general: {
                title: "General",
                description: "I am originally from the city of Santiago, Chile. I am 26 years old and since 2019 I work formally as a software developer. Since I was a child I have always liked technology and computing, I had the privilege of studying it at the University, where I obtained the degree of 'Computer Engineer' where I found my vocation. I consider that my greatest strength is perseverance and the ability to overcome any challenge that gets in the way of my goals."
            },
            skills: {
                title: "Hobbies",
                description: "I am passionate about video games for as long as I can remember, my favorites are the RPGs. I really like reading and the fantasy genre, as well as literature in general. I also like music and since I was a teenager I like to consider myself an amateur musician, in my Instagram you can see some of the songs I have recorded. ",
            }
        },
        footer: {},
    },
    flagIcon: USIcon,
}