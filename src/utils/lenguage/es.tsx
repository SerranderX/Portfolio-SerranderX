import { ENV } from "@config/config";
import { ESIcon } from "@iconos/lenguage/es";
import { AppLenguageData } from "@interfaces/appLenguageData.interface";
import { getAuthorAge } from "@utils/Utils";

export const es: AppLenguageData = {
    lenguage: "es",
    lenguageName: "Español",
    data: {
        header: {
            navbar: {
                about: "Sobre mi",
                experience: "Experiencia",
                projects: "Proyectos",
                contact: "Contacto",
                download: "Descargar CV",
                cvhref: `cv/${ENV.cvhref}`,
            },
            resumeModal: {
                instruction: "Seleccione el idioma del documento",
                lenguages: {
                    english: "Ingles",
                    spanish: "Español",
                },
            },
        },
        presentation: {
            title: "Portafolio de proyectos",
            greeting1: "Bienvenido,",
            greeting2: "Yo soy ",
            description:
                "Diseñador y desarrollador de software de nacionalidad Chilena, conocido como @SerranderX en internet. Me dedico al aprendizaje continuo de nuevas tecnologías para la creacion de soluciones TI.",
        },
        experience: {
            title: "Experiencia",
            description:
                "En esta seccion se encuentran algunas de las herramientas y tecnologias en las cuales me desempeño con frecuencia en el desarrollo de proyectos.",
        },
        projects: {
            title: "Proyectos",
            description: "Algunos de los proyectos que he desarrollado.",
            notFoundMessage1:
                "De momento no se encuentran proyectos para los filtros seleccionados",
            notFoundMessage2:
                "Estoy trabajando en nuevos proyectos para el futuro",
        },
        contact: {
            title: "Contacto",
            description:
                "Enviame un mensaje con tu correo electronico si quieres contactar conmigo.\nSi quieres saber mas sobre mi, te invito a visitar mis redes sociales.",
            inputName: "Nombre",
            inputEmail: "Correo electronico",
            inputSubject: "Asunto",
            inputMessage: "Mensaje",
            inputSubmit: "Enviar",
            emailMessages: {
                success: "¡Tu mensaje enviado con exito!",
                error: "Error al enviar el mensaje.\n Por favor intentalo de nuevo mas tarde.",
            },
            inputMessages: {
                title: "Uno o mas campos son requeridos para poder enviar el email:\n",
                name: "• El campo 'Nombre' es requerido.\n",
                email: "• El campo 'Email' es invalido o se encuentra vacio.\n",
                subject: "• El campo 'Asunto' es requerido.\n",
                message: "• El campo 'Mensaje' es requerido.\n",
            },
        },
        aboutme: {
            title: "Sobre mi",
            general: {
                title: "General",
                description: `Tengo ${getAuthorAge()} años y soy originario de la ciudad de Santiago, de Chile. Me desempeño formalmente como desarrollador de software desde el año 2019.\nDesde pequeño siempre me ha gustado la tecnología y la computacion en general. Tuve el privilegio de estudiarla en la Universidad, donde obtuve el grado de &apos;Ingeniero en informática&apos;, en donde encontré mi actual vocación.\nConsidero que mi mayor fortaleza es la perseverancia y la capacidad de sobreponerme ante cualquier reto que se interponga ante los objetivos que me propongo.`,
            },
            skills: {
                title: "Hobbies e intereses",
                description:
                    "Soy un apasionado por los videojuegos en general desde que tengo memoria, sin embargo mis favoritos siempre han sido los RPG. Me gusta mucho leer y el genero de la fantasía así como la literatura en su totalidad, sobre todo cuando encuentro algun libro interesante que capte mi atención. También me gusta la música, toco guitarra desde los 12 años de manera autodidacta y desde mi adolescencia me gusta considerarme un musico amateur. En mi Instagram podrán ver algunas de las canciones que he grabado, aunque de todas maneras en esta seccion quize dejar un cover que grabe hace algun tiempo.",
            },
        },
        footer: {
            navbar: {
                about: "Sobre mi",
                experience: "Experiencia",
                projects: "Proyectos",
                contact: "Contacto",
                cvhref: "",
            },
        },
        loadingMessage: "Cargando",
        alertContent: {
            closeButton: "Cerrar",
            alertTitleType: {
                warning: "Advertencia",
                error: "Error",
                success: "Felicidades",
            },
        },
    },
    flagIcon: ESIcon,
};
