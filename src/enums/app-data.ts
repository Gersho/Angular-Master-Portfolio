import { EducationSection } from "../interfaces/education.interface";
import { ExternalSite } from "../interfaces/external-site.interface"
import { ProjectSection } from "../interfaces/project.interface";
import { SkillSection } from "../interfaces/skill-section.interface";
import { ExperienceSection } from "../interfaces/work-experience.interface";
import { AssetPaths } from "./asset-paths.enum";

// Social media links to show
const SocialMediaLinks: ExternalSite[] = [
    {
        name: "Github",
        link: "https://github.com/Gersho",
        simpleIconName: "github",
        backgroundColor: "#181717",
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/karim-zennoune-1354b8192/",
        simpleIconName: "linkedin", // this icon is not available in simple icon v14
        backgroundColor: "#0066c8", // manually checked
    },
    // {
    //     name: "LeetCode",
    //     link: "https://leetcode.com/dhruvilrathod/",
    //     simpleIconName: "LeetCode",
    //     backgroundColor: "#FFA116",
    // },
    {
        name: "Mail",
        link: "mailto:zennoune.karim@outlook.fr",
        simpleIconName: "gmail",
        backgroundColor: "#EA4335",
    },
    // {
    //     name: "Instagram",
    //     link: "https://www.instagram.com/dhruvil.rthd/",
    //     simpleIconName: "Instagram",
    //     backgroundColor: "#FF0069",
    // }
]

// Fullstack skills
const FullstackSkills: ExternalSite[] = [
    // {
    //     name: "Angular",
    //     link: "https://angular.dev/",
    //     simpleIconName: "angular",
    //     backgroundColor: "#ea2848",
    // },
    {
        name: "HTML5",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        simpleIconName: "html5",
        backgroundColor: "#E34F26",
    },
    {
        name: "CSS3",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        simpleIconName: "css3",
        backgroundColor: "#1572B6",
    },
    {
        name: "React",
        link: "https://react.dev/",
        simpleIconName: "react",
        backgroundColor: "#087ea4",
    },
    // {
    //     name: "NodeJS",
    //     link: "https://nodejs.org/",
    //     simpleIconName: "Node.js",
    //     backgroundColor: "#5FA04E",
    // },
    // {
    //     name: "JavaScript",
    //     link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    //     simpleIconName: "javascript",
    //     backgroundColor: "#F7DF1E",
    // },
    // {
    //     name: "expressJS",
    //     link: "https://expressjs.com/",
    //     simpleIconName: "express",
    //     backgroundColor: "#000000",
    // },
    // {
    //     name: "ThreeJS",
    //     link: "https://threejs.org/",
    //     simpleIconName: "Three.js",
    //     backgroundColor: "#000000",
    // },
    {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/",
        simpleIconName: "Tailwind CSS",
        backgroundColor: "#06B6D4",
    },
    {
        name: "Bootstrap",
        link: "https://getbootstrap.com/",
        simpleIconName: "bootstrap",
        backgroundColor: "#7952B3",
    },
    // {
    //     name: "Java",
    //     link: "https://java.com/",
    //     simpleIconName: "Java_Logo",
    //     backgroundColor: "#000000",
    // },
];

// Fullstack section
const FullstackSection: SkillSection = {
    sectionTitle: "FrontEnd",
    imagePath: AssetPaths.FULL_STACK_DEVELOPMENT_SVG,
    skillLinks: FullstackSkills,
    skillsList: [
"HTML5, CSS3, JavaScript, Typescript, React.",

"Tailwind CSS, intégration responsive et conformité aux normes d'accessibilité (RGAA).",
 "Synchronisation d'interfaces via WebSockets (prédiction client, interpolation)."
    ]
}

// Could skills
const CloudSkills: ExternalSite[] = [
    {
        name: "NodeJS",
        link: "https://nodejs.org/",
        simpleIconName: "Node.js",
        backgroundColor: "#5FA04E",
    },
    {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        simpleIconName: "javascript",
        backgroundColor: "#F7DF1E",
    },
    {
        name: "expressJS",
        link: "https://expressjs.com/",
        simpleIconName: "express",
        backgroundColor: "#000000",
    },
    {
        name: "Java",
        link: "https://java.com/",
        simpleIconName: "Java_Logo",
        backgroundColor: "#f7f7f7",
    },
    {
        name: "PHP",
        link: "https://php.net/",
        simpleIconName: "php",
        backgroundColor: "#4f5b93",
    },
        {
        name: "MySQL",
        link: "https://www.mysql.com/",
        simpleIconName: "mysql",
        backgroundColor: "#3e6e93",
    },
    // {
    //     name: "GCP",
    //     link: "https://cloud.google.com/",
    //     simpleIconName: "Google Cloud",
    //     backgroundColor: "#4285F4",
    // },
    // {
    //     name: "AWS",
    //     link: "https://aws.amazon.com/",
    //     simpleIconName: "Amazon Web Services",
    //     backgroundColor: "#232F3E",
    // },
    // {
    //     name: "Firebase",
    //     link: "https://firebase.google.com/",
    //     simpleIconName: "Firebase",
    //     backgroundColor: "#FFCA28",
    // },
    // {
    //     name: "PostgreSQL",
    //     link: "https://www.postgresql.org/",
    //     simpleIconName: "PostgreSQL",
    //     backgroundColor: "#336791",
    // },
    // {
    //     name: "MongoDB",
    //     link: "https://www.mongodb.com/",
    //     simpleIconName: "MongoDB",
    //     backgroundColor: "#47A248",
    // },
    // {
    //     name: "Docker",
    //     link: "https://www.docker.com/",
    //     simpleIconName: "Docker",
    //     backgroundColor: "#1488C6",
    // },
    // {
    //     name: "Render",
    //     link: "https://render.com/",
    //     simpleIconName: "Render",
    //     backgroundColor: "#000000",
    // },
    // {
    //     name: "Heroku",
    //     link: "https://www.heroku.com/",
    //     simpleIconName: "Heroku",
    //     backgroundColor: "#430098",
    // },
];

// Could section
const CloudSection: SkillSection = {
    sectionTitle: "BackEnd",
    imagePath: AssetPaths.BACKEND_PNG,
    skillLinks: CloudSkills,
    skillsList: [
"Java, PHP, JavaScript (Node.js/Express)",
"Conception d'API RESTful, architecture microservices, programmation orientée objet (POO)",
"Modélisation (UML, Merise), gestion de bases de données SQL (MySQL) et persistance avec ORM (Jakarta JPA/Hibernate)."
    ]
}

// Design skills
const DesignSkills: ExternalSite[] = [
    {
        name: "C",
        link: "https://www.c-language.org/",
        simpleIconName: "c",
        backgroundColor: "#fff6ee",
    },
    {
        name: "C++",
        link: "https://isocpp.org/",
        simpleIconName: "cplusplus",
        backgroundColor: "#00589c",
    },
    {
        name: "Rust",
        link: "https://rust-lang.org/",
        simpleIconName: "rust",
        backgroundColor: "#FF7C00",
    },
    {
        name: "Java",
        link: "https://java.com/",
        simpleIconName: "Java_Logo",
        backgroundColor: "#f7f7f7",
    },
    // {
    //     name: "Adobe Photoshop",
    //     link: "https://www.adobe.com/products/photoshop.html/",
    //     simpleIconName: "Adobe Photoshop",
    //     backgroundColor: "#001e36",
    // },
];

// Design section
const DesignSection: SkillSection = {
    sectionTitle: "Software",
    imagePath: AssetPaths.SOFTWARE_PNG,
    skillLinks: DesignSkills,
    skillsList: [
"Langages & Paradigmes : C, C++, Rust, Java — programmation impérative, orientée objet et fonctionnelle.",

"Système & Concurrence : Développement système, gestion manuelle de la mémoire, programmation multithread et synchronisation de processus.",

    ]
}

// Design skills
const DigitalSolutionSkills: ExternalSite[] = [
    // {
    //     name: "Adobe XD",
    //     link: "https://adobexdplatform.com/",
    //     simpleIconName: "Adobe XD",
    //     backgroundColor: "#FF2BC2",
    // },
    {
        name: "AWS",
        link: "https://aws.amazon.com/",
        simpleIconName: "Amazon Web Services",
        backgroundColor: "#232F3E",
    },
    {
        name: "OVH",
        link: "https://www.ovhcloud.com/",
        simpleIconName: "ovh",
        backgroundColor: "#000e9c",
    },
    // {
    //     name: "MySQL",
    //     link: "https://www.mysql.com/",
    //     simpleIconName: "mysql",
    //     backgroundColor: "#3e6e93",
    // },
    {
        name: "Docker",
        link: "https://www.docker.com/",
        simpleIconName: "docker",
        backgroundColor: "#1488C6",
    },
    {
        name: "Traefik",
        link: "https://traefik.io/",
        simpleIconName: "traefikproxy",
        backgroundColor: "#000000",
    },
    {
        name: "git",
        link: "https://git-scm.com/",
        simpleIconName: "git",
        backgroundColor: "#f54d27",
    },
    {
        name: "Github",
        link: "https://github.com/Gersho",
        simpleIconName: "github",
        backgroundColor: "#181717",
    },
];

// Design section
const DigitalSolutionSection: SkillSection = {
    sectionTitle: "Devops",
    imagePath: AssetPaths.DEVOPS_PNG,
    skillLinks: DigitalSolutionSkills,
    skillsList: [
"Docker, Docker Compose et déploiement d'architectures conteneurisées (Inception).",

"Reverse proxy (Traefik), administration réseau (VLAN, VPN, DNS, DHCP, SSH) et protocoles (HTTP, WebSockets).",

"Déploiement sur VPS Linux, intégration/déploiement continus (CI/CD) et gestion de version avec Git/GitHub.",

"Administration système (Linux/Windows), gestion des accès/identités (Active Directory) et rédaction de documentations techniques."
    ]
}

// Personal projects
const PersonalProjects: ProjectSection = {
    sectionTitle: "Mes Projets",
    sectionSubtitle: "🚀 Showcasing innovative solutions and real-world applications built with cutting-edge technologies.",
    entities: [
        {
            title: "Marsai film festival",
            coverImagePath: AssetPaths.MARSAI,
            liveLink: "https://marsai.zennoune.fr/",
            githubLink: "https://github.com/Gersho/marsai-full",
            description: "Site festival de film avec gestion candidatures, upload vidéo, vitrine des films, gestion administrateur.",
            techStack: ["Express", "React", "TailWind", "Typescript", "Docker"],
            year: 2026,
        },
        {
            title: "Pong",
            coverImagePath: AssetPaths.PONG,
            liveLink: "https://pong.zennoune.fr/",
            githubLink: "https://github.com/Gersho/ft_transcendence",
            description: "Pong en ligne server side avec réconcilation et interpolation.",
            techStack: ["Nest", "React", "Typescript", "Docker"],
            year: 2023,
        },
                {
            title: "Memory",
            coverImagePath: AssetPaths.MEMORY,
            liveLink: "https://memory.zennoune.fr/",
            githubLink: "https://github.com/Gersho/memory",
            description: "Jeux de Cartes Memory",
            techStack: ["Java", "Springboot", "React", "Typescript", "Docker"],
            year: 2025,
        },
        {
            title: "Mediatheque",
            coverImagePath: AssetPaths.MEDIATHEQUE,
            liveLink: "https://mediatheque.zennoune.fr/",
            githubLink: "https://github.com/Gersho/mediatheque",
            description: "Site médiathèque multimédia, consulation catalogue, gestion emprunts, panel d'administration.",
            techStack: ["PHP", "React", "Typescript", "Docker"],
            year: 2026,
        },     
        // {
        //     title: "ThreatLens AI for Velociraptor",
        //     coverImagePath: AssetPaths.PROJECT_AI_VELOCIRAPTOR,
        //     liveLink: AssetPaths.PROJECT_AI_VELOCIRAPTOR_PDF,
        //     githubLink: "https://github.com/dhruvil-unisa/ai-velociraptor/",
        //     description: "🤖 A cutting-edge AI-powered Velociraptor version built with the LLM integration using a custom MCP, prompt engineering, and fine tuning.",
        //     techStack: ["Python", "Go", "Ollama", "llama.cpp"],
        //     year: 2025,
        // },
        // {
        //     title: "Web-Based 3D IFC File Viewer",
        //     coverImagePath: AssetPaths.PROJECT_THREEJS_IFC_VIEWER,
        //     liveLink: "https://dhruvilrathod.github.io/webifcviewer/",
        //     githubLink: "https://github.com/dhruvilrathod/three_ifc_angular",
        //     description: "🧱 This tool enables seamless visualization of IFC files in your browser. Toggle elements, explore real-time details by hovering, search and highlight elements, and interact with ease for a dynamic 3D experience.",
        //     techStack: ["Angular", "ThreeJS", "ExpressJS", "Heroku"],
        //     year: 2022
        // },
        // {
        //     title: "Customizable Multi-Select Dropdown",
        //     coverImagePath: AssetPaths.PROJECT_CUSTOM_DROPDOWN,
        //     githubLink: "https://github.com/dhruvilrathod/custom-dropdown/tree/resource-tree-utility",
        //     description: "🌲 An Angular-based, asynchronous multi-select dropdown designed for tree-structured data with custom validation. It's a powerful replacement for jQuery's Select2.",
        //     techStack: ["Angular", "TypeScript", "SCSS"],
        //     year: 2023,
        //     branch: "resource-tree-utility"
        // },
        // {
        //     title: "Learning Management System",
        //     coverImagePath: AssetPaths.PROJECT_LMS_APP,
        //     githubLink: "https://github.com/dhruvilrathod/lms-asite",
        //     description: "📚 A production-grade frontend for a Learning Management System, designed with scalability in mind to deliver a seamless and efficient user experience.",
        //     techStack: ["Angular", "PrimeNG", "Tailwind", "Figma"],
        //     year: 2023
        // },
        // {
        //     title: "Angular + NestJS Boilerplate",
        //     coverImagePath: AssetPaths.PROJECT_ANGULAR_NEST_DOCKER,
        //     githubLink: "https://github.com/dhruvilrathod/sample-angular-nest",
        //     description: "🛠️ A production-grade boilerplate integrating Angular, NestJS, and Nginx for seamless fullstack development. Perfect for kickstarting robust and scalable web applications.",
        //     techStack: ["Angular", "NestJS", "NgINX", "Docker"],
        //     year: 2023
        // },
        // {
        //     title: "Hospital Management System Dashboard",
        //     coverImagePath: AssetPaths.PROJECT_HMS_APP,
        //     githubLink: "https://github.com/freelancer-dhruvil/hms-demo",
        //     description: "🏥 Transformed Figma designs into a fully functional, user-friendly dashboard for a Hospital Management System, ensuring precision and intuitive interface.",
        //     techStack: ["Angular", "PrimeNG", "PrimeFlex", "Figma"],
        //     year: 2024
        // },
        // {
        //     title: "Cross-Platform Music Player",
        //     coverImagePath: AssetPaths.PROJECT_MUSIC_PLAYER,
        //     githubLink: "https://github.com/dhruvilrathod/music_player",
        //     description: "🎵 Developed with Angular and NestJS, this music player evolved into a fullstack app and was wrapped with ElectronJS for a seamless desktop experience.",
        //     techStack: ["Angular", "NestJS", "ElectronJS", "ExpressJS"],
        //     year: 2023
        // }
    ]
}

// Freelancing projects
const FreelancingProjects: ProjectSection = {
    sectionTitle: "Freelancing",
    sectionSubtitle: "🚀 Transforming Ideas into Digital Solutions: Tailored Websites, Custom CMS, and More!",
    entities: [
        {
            title: "South Australia Tiling",
            coverImagePath: AssetPaths.PROJECT_SA_TILING,
            liveLink: "https://southaustraliatiling.com.au/",
            description: "🚀 Built with SSR and SSG to showcase a South Australian tiling and bathroom renovation business, enhancing their online presence and visibility.",
            techStack: ["Angular 19", "SSR/SSG", "NestJS", "Firebase"],
            year: 2025
        },
        {
            hidden: true, // this project is not visible in UI but can be added by changing this flag to true
            title: "Kiwi Finance",
            coverImagePath: AssetPaths.PROJECT_KIWI_FINANCE,
            liveLink: "https://kiwifinance.com.au/",
            description: "💰 Developed a tailored website for a new Perth-based finance and mortgage broking business, combining modern design with a focus on accessibility and client engagement.",
            techStack: ["Angular", "MongoDB", "NestJS", "Firebase"],
            year: 2025
        },
        {
            title: "RAS Finance Website + CMS",
            coverImagePath: AssetPaths.PROJECT_RAS_FINANCE,
            liveLink: "https://rasfinance.com.au/",
            description: "📈 Designed a bespoke website for a leading South Australia-based finance and mortgage broking business, showcasing services with a sleek, client-focused design.",
            techStack: ["Angular", "MongoDB", "NestJS", "Firebase"],
            year: 2024
        },
        {
            title: "Acquire Conveyancing Website",
            coverImagePath: AssetPaths.PROJECT_ACQUIRE_CONVEYANCING,
            liveLink: "https://acquireconveyancing.com.au/",
            description: "🏡 Crafted a tailored website for a South Australia-based conveyancing business, delivering a professional online presence with user-friendly design and local appeal.",
            techStack: ["Angular", "Tailwind", "Firebase"],
            year: 2023
        },
    ]
}


// Job experience
const JobExperience: ExperienceSection = {
    experienceSectionTitle: "Expériences",
    experiences: [
        {
            orgLink: "https://laplateforme.io/atelier/",
            orgLogoPath: AssetPaths.WORK_ATELIER_LOGO,
            orgName: "L'Atelier_",
            positions: [
                {
                    positionName: "Alternance: Développeur web et web mobile",
                    duration: "2025 - 2026 (4 mois)",
                    location: "Lyon",
                    // locationType: "On-Site",
                    // jobType: "Part-time",
                    workPoints: [
"Intégration & Frontend : Conception d'interfaces utilisateur réactives (responsive), intégration de maquettes (HTML5, CSS3, JavaScript) et utilisation de frameworks modern (React, Tailwind).",
"Développement Backend & API : Création d'architectures applicatives, développement d'API REST (Express, PHP, Python) et gestion des bases de données SQL.",
"DevOps, Versioning & Tests : Gestion du code source via Git/GitHub, écriture de tests unitaires/d'intégration, déploiement continu (Docker, CI/CD) en environnement de production (VPS) et routing (Traefik).",
"Méthodes Agiles & Gestion de Projet : Rapprochement des besoins métiers, participation aux rituels Agiles (Scrum, Kanban) et rédaction de documentations techniques."
                    ]
                }
            ]
        },
        {
            orgLink: "https://www.sig-guadeloupe.fr/",
            orgLogoPath: AssetPaths.WORK_SIG_LOGO,
            orgName: "SIG - Société Immobilière de la Guadeloupe",
            positions: [
                {
                    positionName: "Stage en entreprise: Administration Système et Réseau",
                    duration: "2015 (1 mois)",
                    location: "Les Abymes, Guadeloupe",
                    // locationType: "Remote",
                    // jobType: "Contract",
                    workPoints: [
"Support & Gestion du Parc Informatique : Assistance aux utilisateurs (N1/N2), résolution d'incidents, masterisation et déploiement de postes de travail.",

"Administration Systèmes (Linux / Windows) : Gestion des utilisateurs et des accès (Active Directory, GPO, SSH), configuration de services de base (DNS, DHCP) et gestion des sauvegardes.",
"Réseau & Sécurité : Participation à la configuration d'équipements réseau (switchs, VLANs, VPN), supervision de l'état des serveurs et application des règles de sécurité.",

"Documentation & Automatisation : Rédaction de procédures techniques pour l'équipe informatique et création de scripts d'automatisation simples (Bash / PowerShell)."
                    ]
                }
            ]
        },
        {
            orgLink: "",
            orgLogoPath: AssetPaths.EMPTY,
            orgName: "",
            positions: [
                {
                    positionName: "Gérant d'un débit de boissons",
                    duration: "2012 - 2018",
                    location: "Le Moule, Guadeloupe",
                    // locationType: "Hybrid",
                    // jobType: "Full-time",
                    workPoints: [
"Gestion d'Entreprise & Sens du Service (Gérant) : Pilotage d'activité, suivi de la rentabilité, gestion de stock et gestion de la relation client sous forte affluence.",
"Résolution de Problèmes & Prise de Décision : Gestion du stress, autonomie complète et prise de décision rapide face aux imprévus opérationnels.",

"Conformité & Cadre Réglementaire (Licence 4) : Application stricte des normes juridiques, d'hygiène et de sécurité, démontrant rigueur et respect des processus.",
"Management & Communication : Recrutement, encadrement d'équipe, médiation et communication interpersonnelle efficace."
                    ]
                }
            ]
        }
    ]
}

// Freenacing Experience
const FreelancingExperience: ExperienceSection = {
    experienceSectionTitle: "Freelancing",
    experiences: [
        {
            orgLink: "https://southaustraliatiling.com.au/",
            orgLogoPath: AssetPaths.WORK_SA_TILING_LOGO,
            orgName: "South Australia Tiling",
            positions: [
                {
                    positionName: "Professional Freelancer",
                    duration: "2025",
                    location: "Adelaide, WA",
                    locationType: "Remote",
                    jobType: "Contract",
                    workPoints: [
                        "Designed and developed a visually appealing website to highlight the high-quality work of a South Australian tiling and bathroom renovation business, improving their online presence.📊",
                        "Utilized Server-Side Rendering (SSR) and Static Site Generation (SSG) to enhance search engine visibility and drive organic traffic to the website. 🚀",
                    ]
                }
            ]
        },
        {
            orgLink: "https://kiwifinance.com.au/",
            orgLogoPath: AssetPaths.WORK_KIWI_LOGO,
            orgName: "Kiwi Finance",
            positions: [
                {
                    positionName: "Professional Freelancer",
                    duration: "2025",
                    location: "Perth, WA",
                    locationType: "Remote",
                    jobType: "Contract",
                    workPoints: [
                        "Designed and developed an SEO-friendly website with financial calculators, and a custom contact form tailored to Astute Financial's requirements. 🌐📊",
                        "Streamlined data collection and client inquiries by integrating the contact form with Google Sheets and Gmail. 📋",
                    ]
                }
            ]
        },
        {
            orgLink: "https://rasfinance.com.au/",
            orgLogoPath: AssetPaths.WORK_RAS_LOGO,
            orgName: "RAS Finance",
            positions: [
                {
                    positionName: "Professional Freelancer",
                    duration: "2024",
                    location: "Adelaide, SA",
                    locationType: "Hybrid",
                    jobType: "Contract",
                    workPoints: [
                        "Built a dynamic website featuring financial calculators, a CMS for articles, and a sleek contact form. 📊📝",
                        "Streamlined client inquiries by integrating the contact form with Google Sheets and Gmail. 📧📋✨",
                    ]
                }
            ]
        },
        {
            orgLink: "https://acquireconveyancing.com.au/",
            orgLogoPath: AssetPaths.WORK_ACQUIRE_LOGO,
            orgName: "Acquire Conveyancing",
            positions: [
                {
                    positionName: "Professional Freelancer",
                    duration: "2023",
                    location: "Adelaide, SA",
                    locationType: "Remote",
                    jobType: "Contract",
                    workPoints: [
                        "Crafted a professional logo, business cards, and responsive website using Illustrator. 🎨💼",
                        "Set up a custom domain email and Office 365 with SharePoint for seamless operations. 📧🔗",
                        "Developed and hosted an SEO-friendly website with a contact form to boost online presence. 🌐📈",
                    ]
                }
            ]
        },
    ]
}

// Internships Experience
const InternshipExperience: ExperienceSection = {
    experienceSectionTitle: "Formations",
    experiences: [
        {
            orgLink: "https://laplateforme.io/",
            orgLogoPath: AssetPaths.WORK_PLATEFORME_LOGO,
            orgName: "LaPlateforme_",
            positions: [
                {
                    positionName: "Développeur web et web mobile",
                    duration: "Juillet 2025 - Octobre 2026",
                    location: "Lyon",
                    // locationType: "Hybrid",
                    // jobType: "Full-time",
                    workPoints: [
"Algorithmique & Fondamentaux du Web : Apprentissage de la logique de programmation, intégration web responsive (HTML5, CSS3, Tailwind) et dynamisation d'interfaces en JavaScript.",

"Développement Full-Stack & Frameworks : Conception d'applications dynamiques et accessibles (RGAA) avec des technologies modernes en Front-end (React) et Back-end (Express, PHP, Java).",

"Bases de Données & Conception Software : Modélisation de données (UML, Merise), conception et manipulation de bases SQL (MySQL), utilisation d'ORM (Jakarta/JPA) et création d'API RESTful.",

"Méthodologies, DevOps & Bonnes Pratiques : Utilisation de Git/GitHub, conteneurisation (Docker), déploiement (VPS, CI/CD), routing (Traefik), sensibilisation aux méthodes Agiles (Scrum), à la sécurité web."

                    ]
                },
                // {
                //     positionName: "Software Engineering Intern",
                //     duration: "Jun 2022 — Jul 2022",
                //     location: "Ahmedabad, India",
                //     locationType: "On-Site",
                //     jobType: "Full-time",
                //     workPoints: [
                //         "Developed an innovative 3D IFC file viewer using Three.js, applying DSA concepts to create a tree-like structure for exploring model internals. 🌐🌳📐",
                //         "Deployed the Node.js backend on Heroku and hosted the frontend on GitHub Pages for seamless accessibility. 🚀💻✨",
                //     ]
                // }
            ]
        },
        {
            orgLink: "https://42lyon.fr/",
            orgLogoPath: AssetPaths.WORK_FORTYTWO_LOGO,
            orgName: "42 Lyon Auvergne-Rhône-Alpes",
            positions: [
                {
                    positionName: "Concepteur Développeur d'Applications",
                    duration: "Novembre 2020 — Novembre 2024",
                    location: "Lyon",
                    // locationType: "Remote",
                    // jobType: "Part-time",
                    workPoints: [
                        "Ingénierie & Bas Niveau (C / C++ / Assembly) : Conception de projets système complexes (ft_containers, ft_irc, libasm).",
                        "Cybersécurité & Reverse Engineering : Exploitation de binaires, analyse de vulnérabilités et rétro-ingénierie (snow-crash, rainfall, override).",
                        "Réseau & Performance Temps Réel : Développement d'infrastructures réseau (ft_irc, Inception) et optimisation des latences (WebSockets, prédiction client et interpolation d'états).",
                        "Méthode 42 (Niveau 16) : Réalisation de +30 projets en peer-learning (Niveau 16)"
                    ]
                }
            ]
        },
        {
            orgLink: "https://www.fore.fr/",
            orgLogoPath: AssetPaths.WORK_FORE_LOGO,
            orgName: "FORE Formation",
            positions: [
                {
                    positionName: "Technicien supérieur de support en informatique",
                    duration: "2014 - 2015",
                    location: "Baie-Mahault, Guadeloupe",
                    // locationType: "Remote",
                    // jobType: "Part-time",
                    workPoints: [
"Support & Assistance Utilisateurs : Prise en charge des incidents (Niveaux 1 et 2), diagnostic, résolution et suivi via des outils de ticketing (ITIL / GLPI).",

"Administration Systèmes & Réseaux : Gestion et déploiement de parcs informatiques (Windows / Linux), gestion des identités via Active Directory / OpenLDAP et services réseau de base (DHCP, DNS, VPN).",

"Maintenance & Sécurité Opérationnelle : Assemblage, configuration matériel, sauvegarde des données, déploiement d'images système et application des bonnes pratiques de cybersécurité.",

"Gestion d'Incidents & Communication : Rédaction de documentations techniques, procédures et guides utilisateurs pour optimiser l'autonomie des collaborateurs.",
                    ]
                }
            ]
        },
    ]
}

// Community Involvement
const CommunityInvolvement: ProjectSection = {
    sectionTitle: "Community Involvement",
    entities: [
        {
            liveLink: "https://adventofcode.com/",
            coverImagePath: AssetPaths.ACHIEVEMENT_AOC_PIC,
            techStack: ["Python"],
            title: "Advent of Code 2024",
            description: "📅 Completed all Advent of Code 2024 problems within a personal deadline of 1 day each, showcasing strong DSA and problem-solving skills.🎯",
            year: 2024,
            githubLink: "https://github.com/dhruvilrathod/RSP/tree/master/advent_of_code",
        },
    ]
}

// Achievement
const AchievementInvolvement: ProjectSection = {
    sectionTitle: "Achievements",
    entities: [
        {
            liveLink: "https://www.linkedin.com/posts/dhruvilrathod_competitiveprogramming-codingchallenges-teamwork-activity-7291965632684695553-CTqM?utm_source=share&utm_medium=member_desktop&rcm=ACoAADi05s0B8nMLyX_mC2aovn2P6w6tNr-b3AA",
            coverImagePath: AssetPaths.ACHIEVEMENT_CPC_RSP_WIN_PIC,
            techStack: ["C++", "Python"],
            title: "CPC X RSP 2025",
            description: "🏆 Secured 3rd place in a high-stakes coding competition, tackling complex algorithms under pressure! Grateful for an incredible team and experience at CPC X RSP competition.",
            year: 2025,
        },
        {
            coverImagePath: AssetPaths.ACHIEVEMENT_UNISA_CHANCELLORS_LETTER_2024_PIC,
            liveLink: "unisa-chancellors-letter-of-commandation-2024.html",
            // liveLink: "public/unisa-chancellors-letter-of-commandation-2024.html",
            techStack: ["Cisco", "FortiGate", "ISO 270001"],
            title: "Chancellor's Commendation Letter (2024)",
            description: "🚀 Awarded for academic excellence with a cumulative program GPA in the TOP 5% of all students, and invited to join the Golden Key International Honour Society.",
            year: 2024,
        },
    ]
}

// Degrees
const BachelorsDegree: EducationSection = {
    degreeName: "Bachelor of Engineering",
    majorName: "Computer Engineering",
    duration: "Jul 2019 - May 2023",
    universityName: "Gujarat Technological University (GTU)",
    campusName: "VGEC",
    logoImagePath: AssetPaths.EDUCATION_GTU_LOGO,
    gpa: "6.9 / 7.0",
    websiteLink: "https://www.gtu.ac.in/",
    studyPoints: [
        "Studied foundational subjects like Data Structures, Database Management Systems, Discrete Mathematics, and Operating Systems, building a strong base in computer science. 🧠💻",
        "Explored Object-Oriented Programming, Software Engineering, Computer Networks, and Microprocessor & Interfacing, bridging software development with hardware understanding. ⚙️",
        "Gained insights into Big Data Analytics, Artificial Intelligence, Data Mining, and Data Visualization, equipping skills for modern computing challenges. 🚀📊",
    ]
}

const MastersDegree: EducationSection = {
    degreeName: "Master of Information Technology",
    majorName: "Cyber Security",
    duration: "Feb 2024 - Dec 2025",
    universityName: "University of South Australia (UniSA)",
    campusName: "Mawson Lakes",
    logoImagePath: AssetPaths.EDUCATION_UNISA_LOGO,
    gpa: "6.7 / 7.0",
    websiteLink: "https://i.unisa.edu.au/students/",
    studyPoints: [
        "Built expertise in Security Principles, Network Infrastructure, and Risk Management, laying a solid foundation in cybersecurity fundamentals. 🔐",
        "Gained deep knowledge in Security Architecture, Network Security, and Critical Infrastructure Protection, alongside insights into Cyber Criminal Behavior and Australian Cyber Law. ⚙️🛡️",
        "Developed strategic skills through Consultancy, Enterprise Security, and hands-on labs experience with tech-giants including Cisco and FortiGate. 🚀",
    ]
}



export const AppConfig = {
    loaderSplashAnimation: false,        // enable or disable splash screen at the initialization of website
    logoName: "Karim Zennoune",         // Signature font logo name in header
    name: "Karim Zennoune",             // your name
    emailId: "zennoune.karim@outlook.fr",  // your email id

    // Google Form Contact Link
    googleFormContactLink: "https://google.com/",

    // Home page
    professionalTitle: "Concepteur Développeur de Solutions Informatiques",
    professionalSummary: "Développeur logiciel Full-Stack combinant expertise bas niveau (C/C++, Rust), architectures web modernes et culture DevOps en environnement Agile.",
    githubProfile: "https://github.com/Gersho",              // Your github profile link
    portfolioRepository: "https://github.com/Gersho/Angular-Master-Portfolio",        // Your portfolio repository link
    socialMedia: SocialMediaLinks,      // use from above
    aboutMe: [                          // all the sections you want to show under "What I do?". 
        FullstackSection,
        CloudSection,
        DigitalSolutionSection,
        DesignSection,
    ],

    // Projects page
    projectsPageTitle: "Projects & Freelancing",    // Title of projects page
    projectsPageDescription: "My projects leverage a diverse range of cutting-edge technology tools. I specialize in building data science solutions and seamlessly deploying them as web applications using robust cloud infrastructure.",
    projectSections: [                  // Define and add a custom section if needed
        // FreelancingProjects,
        PersonalProjects,
    ],

    // Experience page
    experiencePageTitle: "Expériences Professionnelles et Formations",
    experiencePageDescription: "",
    experienceSections: [               // Define and add a custom section if needed
        InternshipExperience,
        JobExperience,
        // FreelancingExperience,
    ],

    // Education page
    educationPageTitle: "Degrees and Qualifications",
    educationPageDescription: "🎓 A Journey of Continuous Learning: Building Skills, Solving Problems, and Shaping the Future 🌟",
    educationSections: [
        MastersDegree,
        BachelorsDegree,
    ],


    // Achievements Page
    achievementsPageTitle: "Achievements, Participation and Community Involvement",
    achievementsPageDescription: "🚀 Milestones, Contributions & Impact: Driving Innovation, Engaging Communities, and Making a Difference 🌍",
    achievementsSections: [
        AchievementInvolvement,
        CommunityInvolvement,
    ],
}
