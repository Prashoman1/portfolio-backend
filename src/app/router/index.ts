import { Router } from "express";
import { UserRoute } from "../modules/user/user.route";
import { SkillRoute } from "../modules/skill/skill.route";
import { ExperienceRoute } from "../modules/experience/experience.route";
import { ProjectRoute } from "../modules/project/project.route";
import { AboutRoutes } from "../modules/about/about.route";


const router = Router();
const moduleRoute = [
    {
        path: "/auth",
        route: UserRoute
    },
    {
      path: "/skill",
      route: SkillRoute
    },
    {
      path: "/experience",
      route: ExperienceRoute
    },
    {
      path: "/project",
      route: ProjectRoute
    },
    {
      path: "/about",
      route: AboutRoutes
    }
];

moduleRoute.forEach((root) => {
  router.use(root.path, root.route);
});

export default router;

