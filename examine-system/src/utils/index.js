// import { settings } from '@/settings.js'
// import Vue from 'vue';
/**
 * 存储用户信息到本地
 * @param {*} useInfor 用户身份票证
 */
export const setUserInfor = function(key, useInfor) {
  window.localStorage.setItem(key, useInfor);
};
/**
 * 获取用户信息
 */
export const getUserInfor = function(key) {
  let userInfo = window.localStorage.getItem(key);
  return JSON.parse(userInfo);
};
/**
 * 销毁本地用户信息
 */
export const removeUserInfor = function(key) {
  window.localStorage.removeItem(key);
};
