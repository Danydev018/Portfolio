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
    {
        id: 6,
        title: "Contact",
        icon: <Mail size={25} color="#fff" strokeWidth={1} />,
        link: "/contact",
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
        description: `
            Arquitectura principal: Sistema de delivery basado en una base de datos orientada a grafos usando Neo4j.

    - Backend inteligente:

        Modela relaciones complejas entre clientes, repartidores, pedidos y rutas.

        Utiliza el algoritmo de Dijkstra para calcular rutas óptimas.

        Ejecuta consultas Cypher eficientes y actualiza la red logística en tiempo real.

    - Frontend interactivo:

        Desarrollado con React y Bootstrap.

        Ofrece una interfaz intuitiva y adaptable para administradores y clientes.

    - Funciones adicionales destacadas:

        Integración con APIs de geolocalización.

        Simulación de incidentes en rutas.

        Análisis de conectividad para optimizar la red de entregas.
        `,
        
    },
    {
        id: 2,
        title: "Business Assistant Bot",
        image: "/bab1.jpg",
        urlGithub: "https://github.com/Danydev018/Bussines_Assistant_Bot",
        description: `
        Plataforma: Sistema automatizado de atención al cliente sobre Telegram, con arquitectura de doble bot.

Estructura técnica:

    User Bot: Interactúa directamente con los clientes, gestionando mensajes y respuestas automáticas.

    Panel Bot: Administra conversaciones, permite seguimiento y control por parte del operador.

    Comunicación asíncrona entre ambos mediante una base de datos SQLite compartida.

Funciones clave:

    🧠 Sistema de Cola Inteligente: Asigna turnos secuenciales y permite a los usuarios consultar su posición en tiempo real.

    🗂️ Categorización Automática: Clasifica mensajes por temas (trabajo, familia, amigos, otros) usando palabras clave.

    🔄 Gestión de Estados: Control detallado del flujo conversacional (pendiente, atendido, seguimiento, archivado, pospuesto).

    🌴 Modo Vacaciones: Pausa notificaciones y envía respuestas automáticas durante ausencias del administrador.

    📇 Recomendación de Contactos: Envía datos de contacto sugeridos de forma automatizada.

    📢 Mensajería Masiva: Permite enviar comunicados a todos los clientes con estado pendiente.

    ⏳ Sistema de Posposición: Oculta temporalmente conversaciones sin alterar su posición en la cola.

    🔔 Notificaciones Automáticas: Informa a los primeros usuarios sobre su turno y tiempo estimado de espera.
        `,
        
    },
    {
        id: 3,
        title: "Music Recommender",
        image: "/ritmo-puro.jpg",
        urlGithub: "https://github.com/Danydev018/BDII_Prueba",
        description: `
        Propósito: Demostrar cómo tecnologías NoSQL, específicamente Cassandra, pueden soportar sistemas de recomendación simples sin recurrir a machine learning avanzado.

        Contexto: Inspirado en plataformas como Spotify y Deezer, que personalizan contenido según comportamiento del usuario (géneros, escuchas, ubicación).

        Arquitectura técnica:

            Base de datos Cassandra para manejo distribuido de datos y alto rendimiento en escrituras.

            Análisis OLAP simplificado para consultas agregadas como “canciones más populares por género y mes”.

            Modelo de datos escalable y flexible, ideal para registros frecuentes y no estructurados.

        Características clave:

            📊 Popularidad por género: Recomendaciones basadas en las canciones más escuchadas por categoría musical.

            🌍 Recomendación geográfica: Sugerencias según la ciudad del usuario.

            ⚙️ Consultas con CQL: Lenguaje similar a SQL, optimizado para entornos distribuidos.

            🧱 Modelo particionado: Evita cuellos de botella al distribuir eficientemente los datos.

        Ventajas destacadas:

            ✅ Simplicidad: No requiere filtrado colaborativo ni modelos predictivos complejos.

            💸 Eficiencia: Bajo costo computacional gracias a consultas directas y estructura ligera.
        `,
    },
    {
        id: 4,
        title: "Buscaminas Sockets",
        image: "/build-it2.jpg",
        urlGithub: "https://github.com/Danydev018/buscadminas",
        description: `
        Buscaminas con modos de un jugador y multijugador, optimizado para funcionar en Termux sobre Android, sin interfaz gráfica tradicional.

        Arquitectura flexible: Binario unificado que puede actuar como cliente, servidor o juego local, según la selección del usuario.

    🔌 Gestión de Sockets y Conexiones

        Arquitectura de red dual:

            Socket UDP (puerto 30000): Utilizado para descubrimiento automático de servidores en red local mediante broadcasting.

            Socket TCP (puerto 40000): Establece conexiones confiables para la comunicación en tiempo real durante el juego multijugador.

        Protocolos estructurados:

            Mensajes de descubrimiento con validación por número mágico.

            Estructuras de movimiento con verificación de coordenadas.

            Sincronización inicial del juego mediante semillas compartidas.

        Manejo robusto de buffers:

            Envío y recepción segura con control de transmisiones parciales y timeouts.

            Validación exhaustiva de datos recibidos para prevenir buffer overflows y corrupción de memoria.

        Sincronización entre hilos:

            Uso de variables atómicas para evitar condiciones de carrera.

            Validación estricta de movimientos y alternancia de turnos para mantener la integridad del estado compartido.

    🛠️ Ventajas técnicas:

        Alta portabilidad en entornos móviles.

        Comunicación eficiente y segura en redes locales.

        Arquitectura modular y adaptable para distintos roles de ejecución.
        `,
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Mario Valentin Rojas | CTO",
        description:
            "Tairon lideró el backend de nuestro Sistema de Optimización de Rutas con Neo4j. Su enfoque en modelado de grafos y APIs REST fue clave.",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Georgina Álvarez | Product Manager",
        description:
            "En el proyecto Business Assistant Bot, Tairon tradujo necesidades de negocio en entregables funcionales. Automatizamos respuestas y flujos internos, bajando tiempos de atención en 40%. Comunicación clara y entregas puntuales.",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "Javier Mendoza | Data Scientist",
        description:
            "Colaboramos en el Music Recommender. Tairon montó APIs limpias y escalables, y preparó pipelines que facilitaron experimentar con modelos de recomendación. Excelente criterio para performance y DX.",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Luis Fernando Paredes | Arquitecto de Software",
        description:
            "En Build IT, Tairon diseñó servicios backend robustos y un frontend limpio con Next.js. Su cuidado por la UX y los detalles de seguridad marcó la diferencia. Código mantenible y bien documentado.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carolina Ortega | COO",
        description:
            "Implementó nuestra API para análisis de zonas y centros de distribución. Estableció buenas prácticas (testing, CI, observabilidad) que agilizaron releases y evitaron regresiones. Muy recomendado.",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Prof. Ricardo Hernández | Universidad",
        description:
            "Guié su trabajo de fin de curso. Destacó por su dominio de Node/TypeScript, patrones de diseño y bases de datos. Entregas consistentes, pruebas sólidas y excelente actitud.",
        imageUrl: "/profile6.png",
    },
];