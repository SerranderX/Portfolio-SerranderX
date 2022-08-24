import AndroidIcon from "@iconos/skills/Android";
import AngularIcon from "@iconos/skills/Angular";
import DockerIcon from "@iconos/skills/Docker";
import CplusplusIcon from "@iconos/skills/Cplusplus";
import JestIcon from "@iconos/skills/Jest";
import JavaIcon from "@iconos/skills/Java";
import JavaScriptIcon from "@iconos/skills/Javascript";
import KubernetesIcon from "@iconos/skills/Kubernetes";
import MongoIcon from "@iconos/skills/Mongo";
import NestIcon from "@iconos/skills/Nestjs";
import NextIcon from "@iconos/skills/Nextjs";
import NodeIcon from "@iconos/skills/Nodejs";
import CsharpIcon from "@iconos/skills/Csharp";
import BootstrapIcon from "@iconos/skills/Bootstrap";
import PostgresIcon from "@iconos/skills/Postgresql";
import ReactIcon from "@iconos/skills/Reactjs";
import SpringIcon from "@iconos/skills/Spring";
import StyledComponentIcon from "@iconos/skills/StyledComponents";
import LinuxIcon from "@iconos/skills/Linux";
import OracleIcon from "@iconos/skills/Oracle";
import SassIcon from "@iconos/skills/Sass";
import MysqlIcon from "@iconos/skills/Mysql";
import WebpackIcon from "@iconos/skills/Webpack";
import PythonIcon from "@iconos/skills/Python";
import FramerMotionIcon from "@iconos/skills/FramerMotion";
import { ExperienceItems } from '@interfaces/experienceItems.interface';
import { ProjectInterface } from '@interfaces/project.interface';
import { SocialIconsDataInterface } from '@interfaces/socialIconsData.interface';
import PokecardexjsSS from '@images/projects/pokecardexjs.jpg';
import PetgramSS from '@images/projects/petgram.jpg';
import TodoMachineSS from '@images/projects/todo-machine.jpg';
import { ToolsTypes } from "@hooks/useCarouselFilters/ToolsTypes";
import { ENV } from '@config/config';
import { InstagramIcon } from '@iconos/social/instagram';
import { GitHubIcon } from '@iconos/social/github';
import { TwitterIcon } from '@iconos/social/twitter';
import { LinkedinIcon } from '@iconos/social/linkedin';

export const ExperienceIcons: ExperienceItems[] = [
    {
        name: "Android",
        url: "https://developer.android.com",
        icon: AndroidIcon,
    },
    {
        name: ToolsTypes.JAVA,
        url: "https://www.java.com",
        icon: JavaIcon,
    },
    {
        name: ToolsTypes.SPRING,
        url: "https://spring.io",
        icon: SpringIcon,
    },
    {
        name: ToolsTypes.JAVASCRIPT,
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: JavaScriptIcon,
    },
    {
        name: ToolsTypes.REACTJS,
        url: "https://reactjs.org/",
        icon: ReactIcon,
    },
    {
        name: ToolsTypes.NEXTJS,
        url: "https://nextjs.org",
        icon: NextIcon,
    },
    {
        name: ToolsTypes.ANGULAR,
        url: "https://angular.io/",
        icon: AngularIcon,
    },
    {
        name: ToolsTypes.NESTJS,
        url: "https://nestjs.com",
        icon: NestIcon,
    },
    {
        name: ToolsTypes.NODEJS,
        url: "https://nodejs.org",
        icon: NodeIcon,
    },
    {
        name: "Bootstrap",
        url: "https://getbootstrap.com/",
        icon: BootstrapIcon,
    },
    {
        name: "C#",
        url: "https://www.cprogramming.com/",
        icon: CsharpIcon,
    },
    {
        name: "C++",
        url: "https://www.w3schools.com/cs/",
        icon: CplusplusIcon,
    },
    {
        name: "Jest",
        url: "https://www.jestjs.io/",
        icon: JestIcon,
    },
    {
        name: "Mysql",
        url: "https://www.mysql.com/",
        icon: MysqlIcon,
    },
    {
        name: "Postresql",
        url: "https://www.postgresql.org/",
        icon: PostgresIcon,
    },
    {
        name: "Oraclesql",
        url: "https://www.oracle.com/",
        icon: OracleIcon,
    },
    {
        name: "Mongodb",
        url: "https://www.mongodb.com/",
        icon: MongoIcon,
    },
    {
        name: "Python",
        url: "https://www.python.org",
        icon: PythonIcon,
    },
    {
        name: "Webpack",
        url: "https://webpack.js.org",
        icon: WebpackIcon,
    },
    {
        name: "Linux",
        url: "https://es.wikipedia.org/wiki/GNU/Linux",
        icon: LinuxIcon,
    },
    {
        name: ToolsTypes.STYLEDCOMPONENTS,
        url: "https://www.styled-components.com",
        icon: StyledComponentIcon,
    },
    {
        name: "Sass",
        url: "https://sass-lang.com",
        icon: SassIcon,
    },
    {
        name: "FMotion",
        url: "https://framer.com/motion",
        icon: FramerMotionIcon,
    },
    {
        name: "Docker",
        url: "https://www.docker.com",
        icon: DockerIcon,
    },
    {
        name: "Kubernetes",
        url: "https://kubernetes.io/es/",
        icon: KubernetesIcon,
    },
];

export const ProjectsData: ProjectInterface[] = [
    {
        name: "PokecarddexJS",
        description: [
            {
                lenguage: "es",
                data: "Una simple y rapida pokedex inspirada en el juego de cartas de Pokemon."
            },
            {
                lenguage: "us",
                data: "A simple and fast pokedex inspired in the Pokemon trading card game."
            }
        ],
        url: "https://pokecarddexjs.com",
        image: PokecardexjsSS,
        technologies: [ToolsTypes.REACTJS, ToolsTypes.JAVASCRIPT, ToolsTypes.FRAMERMOTION],
        icons: [ReactIcon, JavaScriptIcon, FramerMotionIcon],
    },
    {
        name: "Petgram",
        description: [
            {
                lenguage: "es",
                data: "Un clon de instagram enfocado en mascotas con una API de imagenes."
            },
            {
                lenguage: "us",
                data: "A clone of instagram focused on pets with an API of images."
            }
        ],
        url: "https://petgram-4tsdddk6c-serranderx.vercel.app",
        image: PetgramSS,
        technologies: [ToolsTypes.REACTJS, ToolsTypes.JAVASCRIPT, ToolsTypes.STYLEDCOMPONENTS],
        icons: [ReactIcon, JavaScriptIcon, StyledComponentIcon],
    },
    {
        name: "ToDo Machine",
        description: [
            {
                lenguage: "es",
                data: "Una aplicacion que permite crear una lista de tareas y realizarlas."
            },
            {
                lenguage: "us",
                data: "An application that allows you to create a list of tasks and do them."
            }
        ],
        url: "https://SerranderX.github.io/ToDo-Machine",
        image: TodoMachineSS,
        technologies: [ToolsTypes.REACTJS, ToolsTypes.JAVASCRIPT],
        icons: [ReactIcon, JavaScriptIcon],
    },
];

export const SocialIconsData: SocialIconsDataInterface[] = [
    {
        name: "GitHub",
        url: ENV.developerData.gitHub,
        Icon: GitHubIcon,
        nickname: "@SerranderX"
    },
    {
        name: "Linkedin",
        url: ENV.developerData.linkedin,
        Icon: LinkedinIcon,
        nickname: "@Fdiazalburquenque"
    },
    {
        name: "Instagram",
        url: ENV.developerData.instagram,
        Icon: InstagramIcon,
        nickname: "@Serrander.diaz"
    },
    {
        name: "Twitter",
        url: ENV.developerData.twitter,
        Icon: TwitterIcon,
        nickname: "@SerranderX"
    },
]

export const getAuthorAge = () => {
    var hoy = new Date();
    var cumpleanos = new Date('1996/04/30');
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}

export const VideoURL:string = "https://youtu.be/PaXH_S2AqDg";