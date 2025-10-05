import axios from "axios"

const API_ACCESS_TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoib3duZXJAc3lzdGVtLmNvbSIsImlkIjoiZGMwMzU5MjYtMDdiMy00N2QyLTk1NTMtYWU3MDlmMTI0NzE4Iiwic2Vzc2lvbklkIjoiNjZmNWRlNzYtMjQ3Yy00MDI2LTlkZDEtMWE3OWI0N2NkY2Y1Iiwicm9sZUlkIjoiNjY0NzFiODYtOTJmYy00ZTVmLThmN2UtZDA0NzM3MWQzNmMwIn0sInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE3NTc4OTM1NjYsImV4cCI6MTc1Nzg5NzE2Nn0.uyabIck01POUZUCycSio7meKiY0VN8Y4OFwcObW5J8g"

export const apiClient = axios.create({
	baseURL: process.env.NEXT_API_URL,
	headers: {
		Authorization: `Bearer ${API_ACCESS_TOKEN}`,
		"Content-Type": "application/json",
	},
})

apiClient.interceptors.request.use((config) => {
	return config
})

apiClient.interceptors.response.use((response) => {
	return response
})
