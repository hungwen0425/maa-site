import { setCookie, getCookie } from "@/utils/cookie";
const TokenKey = 'Admin-Token'

export function getToken() {
  return getCookie(TokenKey)
}

export function setToken(token) {
  return setCookie(TokenKey, token, 1)
}

export function removeToken() {
  return setCookie('Admin-Token', '')
}
