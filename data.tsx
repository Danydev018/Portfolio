import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Mail, Github } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "https://www.youtube.com/@Flexcode_Live",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/tairon-rojas-dev007",
    },
    {
        id: 3,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/Danydev018",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Full Stack Developer",
        subtitle: "Sistema de Optimizacion de Rutas",
        description: `Desarrollo de un sistema de gestión y optimización de rutas de entrega utilizando Neo4j como base de datos de grafos.
                      Implementación de APIs REST para análisis de rutas, gestión de zonas y centros de distribución.`,
        date: "Ago 2025 ",
    },
    {
        id: 2,
        title: "",
        subtitle: "Business Assistant Bot",
        description: `Bot multiplataforma para gestionar bandejas de entrada de PyMEs, reduciendo
                      cuellos de botella en atención al cliente. Integración con APIs de mensajería y diseño de interfaz intuitiva. Modelo de negocio definido y estrategia de lanzamiento inicial.`,
        date: "May 2025",
    },
    {
        id: 3,
        title: "",
        subtitle: "Sistema de Recomendacion de Musica",
        description: `Desarrollado con Python y Flask, aplicando algoritmos de búsqueda y análisis de datos. Usa Cassandra-DB para almacenamiento de datos y Jinja2 para renderizado de plantillas.`,
        date: "Mar 2025",
    },
    {
        id: 4,
        title: "Frontend Developer",
        subtitle: "Medical App",
        description: "Desarrollado en React con Next.js, TailwindCSS y Nest.js para el backend. Implementación de autenticación, Administracion de inventario y citas. Usa Postgre SQL como base de datos desplegada en supabase.",
        date: "Dic 2024",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 4,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 30,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 35,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 10,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];


export const dataPortfolio = [
    {
        id: 1,
        title: "Neo4J - Delivery",
        image: "/neo4j.jpg",
        urlGithub: "https://github.com/Danydev018/neo4j-delivery",
        
    },
    {
        id: 2,
        title: "Business Assistant Bot",
        image: "/bab1.jpg",
        urlGithub: "https://github.com/Danydev018/Bussines_Assistant_Bot",
        
    },
    {
        id: 3,
        title: "Music Recommender",
        image: "/ritmo-puro.jpg",
        urlGithub: "https://github.com/Danydev018/BDII_Prueba",
        
    },
    {
        id: 4,
        title: "Build IT",
        image: "/build-it2.jpg",
        urlGithub: "https://github.com/Danydev018/House_Estructure_Generator",
        
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];