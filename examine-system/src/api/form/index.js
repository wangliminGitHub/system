import axiosInstance from "@/plugins/axios";

// 不知道做什么的
export const judge = function() {
  return axiosInstance({
    method: "post",
    url: "user/info/new/user"
  });
};

// 上传并识别身份证 人像面
export const getCardFront = function(params) {
  return axiosInstance({
    method: "post",
    url: "/user/info/card/front",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    data: params
  });
};

// 上传并识别身份证 国徽面
export const getCardBack = function(params) {
  return axiosInstance({
    method: "post",
    url: "/user/info/card/back",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    data: params
  });
};

// 上传本人近期电子照
export const uploadPersonalImg = function(params) {
  return axiosInstance({
    method: "post",
    url: "/user/info/photo",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    data: params
  });
};

// 提交第一页表单信息
export const commitForm = function(params) {
  return axiosInstance({
    method: "post",
    url: "/user/info/commit",
    data: params
  });
};

// 获取用户信息
export const getUserInfo = function(params) {
  return axiosInstance({
    method: "get",
    url: "/user/info/get",
    params: params
  });
};

// 上传工作经历
export const commitWork = function(params) {
  return axiosInstance({
    method: "post",
    url: "/user/info/work",
    data: params
  });
};

// 获取学籍信息通过账号
export const studentInfo = function(params) {
  return axiosInstance({
    method: "post",
    url: "/user/info/xxw",
    params: params
  });
};

// 上传 学信证书复印件
export const uploadStudentImg = function(params) {
  return axiosInstance({
    method: "post",
    url: "/user/info/certificate",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    data: params
  });
};
