import { Routes } from '@angular/router';
import { AppRoutes } from '../enums/routes-data.enum';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { EducationComponent } from './pages/education/education.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { TotoComponent } from './pages/toto/toto.component';

export const routes: Routes = [
    {
        path: AppRoutes.HOME,
        component: HomeComponent,
        title: `Karim Zennoune Portfolio`,
    },
    {
        path: AppRoutes.PROJECTS,
        component: ProjectsComponent,
        title: `Projects | Karim Zennoune Portfolio`,
    },
    {
        path: AppRoutes.EXPERIENCE,
        component: ExperienceComponent,
        title: `Experience | Karim Zennoune Portfolio`,
    },
    // {
    //     path: AppRoutes.EDUCATION,
    //     component: EducationComponent,
    //     title: `Education | Karim Zennoune Portfolio`,
    // },
    // {
    //     path: AppRoutes.ACHIEVEMENTS,
    //     component: AchievementsComponent,
    //     title: `Achievements | Karim Zennoune Portfolio`,
    // },   
    // {
    //     path: AppRoutes.TOTO,
    //     component: TotoComponent,
    //     title: `TOTOTOTO | Karim Zennoune Portfolio`,
    // },
    {
        path: AppRoutes.ERROR,
        component: ErrorComponent,
        title: `Error | Karim Zennoune Portfolio`,
    },
    {
        path: "**",
        redirectTo: AppRoutes.ERROR,
    }
];
