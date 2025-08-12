import { create, ApisauceInstance } from 'apisauce'

/**
 * Tạo public API client không yêu cầu authentication
 * @returns ApisauceInstance
 */
const createPublicClient = (): ApisauceInstance => {
  const client = create({
    baseURL: 'http://api.example.com',
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 10000 // 10 seconds timeout
  })

  return client
}

export const publicClient = createPublicClient()
