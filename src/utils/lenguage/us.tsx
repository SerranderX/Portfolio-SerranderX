import { ENV } from "@config/config";
import { USIcon } from "@iconos/lenguage/us";
import { AppLenguageData } from "@interfaces/appLenguageData.interface";
import { getAuthorAge, workHistoryUS } from "@utils/Utils";

export const us: AppLenguageData = {
    lenguage: "us",
    lenguageName: "English",
    data: {
        header: {
            navbar: {
                about: "About",
                experience: "Experience",
                projects: "Projects",
                contact: "Contact",
                download: "Download Resume",
                cvhref: `cv/${ENV.resumehref}`,
            },
            resumeModal: {
                instruction: "Select the document lenguage",
                lenguages: {
                    english: "English",
                    spanish: "Spanish",
                },
            },
        },
        presentation: {
            title: "Portfolio of projects",
            greeting1: "Welcome,",
            greeting2: "I'm ",
            description:
                "Designer and software developer of Chilean nationality, known as @SerranderX on the internet, I am dedicated to software development and continuous learning of new technologies for the creation of IT solutions.",
        },
        experience: {
            title: "Experience",
            description:
                "In this section you will find some of the tools and technologies in which I frequently work in the development of projects.",
        },
        timeline: {
            title: "Work history",
            description: "Some of the projects in which I have participated.",
            workHistory: workHistoryUS.map((entry) => ({
                date: entry.date,
                title: entry.title,
                company: entry.company,
                description: entry.description,
            })),
        },
        projects: {
            title: "Projects",
            description: "Some of the projects that I have developed.",
            notFoundMessage1:
                "At the moment there are no projects for the selected filters",
            notFoundMessage2: "I am working on new projects for the future",
        },
        contact: {
            title: "Contact",
            description:
                "Send me a message with your email.\nIf you want to contact me. If you want to know more about me, I invite you to visit my social networks.",
            inputName: "Name",
            inputEmail: "Email",
            inputSubject: "Subject",
            inputMessage: "Message",
            inputSubmit: "Send",
            emailMessages: {
                success: "Your message sent successfully!",
                error: "Error sending message.\n Please try again latter.",
            },
            inputMessages: {
                title: "One or more values are invalids for send email:\n",
                name: "• The input 'Name' is required.\n",
                email: "• The input 'Email' is invalid or empty.\n",
                subject: "• The input 'Subject' is required.\n",
                message: "• The input 'Message' is required.\n",
            },
        },
        aboutme: {
            title: "About me",
            general: {
                title: "General",
                description: `I am ${getAuthorAge()} years old and I am originally from the city of Santiago, Chile. I work formally as a software developer since 2019.\nSince I was a child I have always liked technology and computing in general. I had the privilege of studying it at the University, where I obtained the degree of &apos;Computer Engineer&apos;, where I found my current vocation.\nI consider one of my greatest strength is perseverance and the ability to overcome any challenge that stands in front of the goals I set.`,
            },
            skills: {
                title: "Hobbies",
                description:
                    "I am passionate about video games in general since I can remember, however my favorites have always been the RPGs. I love reading and the fantasy genre, as well as literature as a whole when I find an interesting book. I also like music and since I was a teenager I like to consider myself an amateur musician, I play guitar since I was 12 years old in a self-taught way. In my Instagram you can see some of the songs I've recorded, although in this section you can find a cover I recorded some time ago.",
            },
        },
        footer: {
            navbar: {
                about: "About",
                experience: "Experience",
                projects: "Projects",
                contact: "Contact",
                cvhref: "",
            },
        },
        loadingMessage: "Cargando",
        alertContent: {
            closeButton: "Close",
            alertTitleType: {
                warning: "Warning",
                error: "Error",
                success: "Success",
            },
        },
    },
    flagIcon: USIcon,
};
