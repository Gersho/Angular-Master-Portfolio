import { RouteData } from "../interfaces/routes.interface";

export enum AppRoutes {
    HOME = "",
    ERROR = "error",
    EXPERIENCE = "experience",
    EDUCATION = "education",
    PROJECTS = "projects",
    ACHIEVEMENTS = "achievements",
    TOTO = "toto",

    // Your google form link
    CONTACT = "https://docs.google.com/forms/d/e/1FAIpQLSfMOsQhl_Lci5s_qrYN-LEWlJ3NoBag-Uyf17IGktExA5KDpw/viewform?usp=header",
}

export const RoutesData: RouteData[] = [
    {
        routeLinkText: "Home",
        routeURLName: AppRoutes.HOME,
        isVisible: true,
    },
    {
        routeLinkText: "Projects",
        routeURLName: AppRoutes.PROJECTS,
        isVisible: true,
    },
    {
        routeLinkText: "Experience",
        routeURLName: AppRoutes.EXPERIENCE,
        isVisible: true,
    },
    {
        routeLinkText: "Education",
        routeURLName: AppRoutes.EDUCATION,
        isVisible: true,
    },
    {
        routeLinkText: "Achievements",
        routeURLName: AppRoutes.ACHIEVEMENTS,
        isVisible: false,
    },
    {
        routeLinkText: "Contact",
        routeURLName: AppRoutes.CONTACT,
        isVisible: false,
        isExternalLink: true,
    },
    {
        routeLinkText: "CESTDUTOTO",
        routeURLName: AppRoutes.TOTO,
        isVisible: true,
    },
]