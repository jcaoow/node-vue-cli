import apiUrl from './apiUrl'
import http from '../request'

export function api1 (data) {
  return http.get(apiUrl.api1, data)
}
export function api2 (data) {
  return http.post(apiUrl.api2, data)
}
