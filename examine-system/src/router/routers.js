import layoutCom from "@/views/layout/layout"; // 有Nav
import noNavLayout from "@/views/layout/noNavLayout"; // 没有Nav
// const Home = () => {
//   import(/* webpackChunkName: "fixed-Components" */ "@/views/examine/Home");
// };
import Home from "@/views/examine/Home";
// const Login = () => {
//   import(/* webpackChunkName: "fixed-Components" */ "@/views/Login");
// };
import Login from "@/views/Login";
import SignUp from "@/views/examine/signUp";
// const ChooseIdentity = () => {
//   import(
//     /* webpackChunkName: "fixed-Components" */ "@/views/examine/basicIfor/choseIdentity"
//   );
// };
import personalCenter from "@/views/personal/personalCenter";
import noticeResultList from "@/views/notice/resultList";
import noticeResultDetail from "@/views/notice/resultDetail";
import ChooseIdentity from "@/views/examine/basicIfor/choseIdentity";
import workInfo from "@/views/examine/basicIfor/workInfo";
import studentInfo from "@/views/examine/basicIfor/studentInfo";
import certificate from "@/views/examine/basicIfor/certificate";
import signUpSuccess from "@/views/examine/basicIfor/signUpSuccess";

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
      },
      {
        name: "personalCenter",
        path: "/personalCenter",
        component: personalCenter
      },
      {
        name: "noticeResultList",
        path: "/noticeResultList",
        component: noticeResultList
      },
      {
        name: "noticeResultDetail",
        path: "/noticeResultDetail",
        component: noticeResultDetail
      },
      {
        name: "chooseIndentity",
        path: "/chooseIndentity",
        component: ChooseIdentity
      },
      {
        name: "workInfo",
        path: "/workInfo",
        component: workInfo
      },
      {
        name: "studentInfo",
        path: "/studentInfo",
        component: studentInfo
      },
      {
        name: "certificate",
        path: "/certificate",
        component: certificate
      },
      {
        name: "signUpSuccess",
        path: "/signUpSuccess",
        component: signUpSuccess
      }
    ]
  },
  {
    name: "login",
    component: Login,
    path: "/login"
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
  },
  {
    name: "signUp",
    component: layoutCom,
    path: "/signUp",
    children: [
      {
        name: "signUp",
        path: "/signUp",
        component: SignUp
      }
    ]
  }
];
export default routers;
