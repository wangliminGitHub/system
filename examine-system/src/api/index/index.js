import axiosInstance from "@/plugins/axios";

// 获取首页banner图
export const getBannerImg = function() {
  return axiosInstance({
    method: "get",
    url: "/banner/get/banner"
  });
};

// 获取所有考试信息
export const getAllExam = function(params) {
  return axiosInstance({
    method: "get",
    url: "/exam/get/simple",
    params: params
  });
};

// 获取单个考试的详细展示
export const getExamDetail = function(params) {
  return axiosInstance({
    method: "get",
    url: "/exam/get",
    params: params
  });
};
// 查询是否存有登录信息

export const serachLoginInfo = function() {
  return axiosInstance({
    method: "post",
    url: "/user/if/login"
  });
};
