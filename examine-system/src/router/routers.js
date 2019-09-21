import layoutCom from "@/views/layout/layout";
const Home = () => {
  import(/* webpackChunkName: "fixed-Components" */ "@/views/Home");
};
const routers = [
  {
    name: "",
    component: layoutCom,
    path: "",
    children: [
      {
        name: "",
        path: "",
        component: Home
      }
    ]
  }
];
export default routers;
