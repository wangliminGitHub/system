import layoutCom from "@/views/layout/layout"; // 有Nav
import noNavLayout from "@/views/layout/noNavLayout"; // 没有Nav
// const Home = () => {
//   import(/* webpackChunkName: "fixed-Components" */ "@/views/examine/Home");
// };
import Home from "@/views/examine/Home";
const Login = () => {
  import(/* webpackChunkName: "fixed-Components" */ "@/views/Login");
};
// const ChooseIdentity = () => {
//   import(
//     /* webpackChunkName: "fixed-Components" */ "@/views/examine/basicIfor/choseIdentity"
//   );
// };
import ChooseIdentity from "@/views/examine/basicIfor/choseIdentity";
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
  },
  {
    name: "login",
    component: Login,
    path: "login"
  },
  {
    name: "chooseIdentity",
    component: noNavLayout,
    path: "/chooseIndentity",
    children: [
      {
        name: "chooseIndentity",
        path: "/chooseIndentity",
        component: ChooseIdentity
      }
    ]
  }
];
export default routers;
