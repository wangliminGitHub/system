import axiosInstance from "@/plugins/axios";
export const login = function(params) {
  return axiosInstance({
    method: "post",
    url: "/user/enter",
    params: params
  });
};
export const getCode = function(params) {
  return axiosInstance({
    method: "post",
    url: "/phone/code/phoneCode",
    params: params
  });
};
