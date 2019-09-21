import layoutCom from "@/views/layout/layout";
// const Home = () => {
//   import(/* webpackChunkName: "fixed-Components" */ "@/views/Home");
// };
import Home from "@/views/Home";
const routers = [
  {
    name: "home",
    component: layoutCom,
    path: "/",
    children: [
      {
        name: "home",
        path: "/",
        component: Home
      }
    ]
  }
];
export default routers;
