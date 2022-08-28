export const imageVariants = (src:any) => ({
    focus: {
        background: `radial-gradient(circle, transparent 65%, black 100%), url(${src}) `,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        filter: 'brightness(0.1)',
        maxWidth: '936px'
        
    },
    blur: { 
        background: `radial-gradient(circle, transparent 25%, #000000a0 100%), url(${src}) `,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        filter: 'brightness(1)',
        maxWidth: '936px'
    },
})