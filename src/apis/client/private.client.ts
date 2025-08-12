import { create, ApisauceInstance } from 'apisauce'
import tokenUtils from '@/utils/cookies'

const createPrivateClient = (): ApisauceInstance => {
  const client = create({
    baseURL: 'http://api.example.com',
    headers: { 'Content-Type': 'application/json' },
    timeout: 10000
  })

  client.addRequestTransform((request) => {
    const token = tokenUtils.get()
    if (token) {
      if (!request.headers) {
        request.headers = {}
      }
      request.headers['Authorization'] = `Bearer ${token}`
    }
  })

  return client
}

export const privateClient = createPrivateClient()
