import Cookies from 'js-cookie'

interface CookieOptions {
  expires?: number | Date
  path?: string
  domain?: string
  secure?: boolean
  sameSite?: 'strict' | 'lax' | 'none'
  [key: string]: any
}
const TOKEN_NAME = 'accessToken'
const tokenUtils = {
  set: (token: string, options: CookieOptions = {}): string | undefined =>
    Cookies.set(TOKEN_NAME, token, { expires: 1, secure: true, sameSite: 'strict', ...options }),
  get: (): string | undefined => Cookies.get(TOKEN_NAME),
  remove: (options: CookieOptions = {}): void => Cookies.remove(TOKEN_NAME, options),
  has: (): boolean => Cookies.get(TOKEN_NAME) !== undefined
}

export default tokenUtils
