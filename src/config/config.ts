export const ENV = {
    developerData: {
        signature: "{ Powered by SerranderX }",
        name: "SerranderX",
        gitHub: String(process.env.NEXT_PUBLIC_GITHUB),
        linkedin: String(process.env.NEXT_PUBLIC_LINKEDIN),
        twitter: String(process.env.NEXT_PUBLIC_TWITTER),
        instagram: String(process.env.NEXT_PUBLIC_INSTAGRAM),
    },
    emailJSData: {
        publicKey: String(process.env.NEXT_PUBLIC_EMAILJSPUBLICKEY),
        emailjs_service: String(process.env.NEXT_PUBLIC_EMAILJSSERVICEID),
        emailjs_template: String(process.env.NEXT_PUBLIC_EMAILJSTEMPLATE),
    },
    cvhref: String(process.env.NEXT_PUBLIC_CVNAME),
    resumehref: String(process.env.NEXT_PUBLIC_RESUMENAME),
};
