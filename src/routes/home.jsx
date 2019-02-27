import PeopleManage from "../components/pages/Home/PeopleManage";

const homeRoutes = [
    {
      path: "/people",
      sidebarName: "People",
      navbarName: "People",
      component: PeopleManage,
      needSuper: false,
    },
    { redirect: true, path: "/", to: "/people", navbarName: "Redirect" }
];

export default homeRoutes

  