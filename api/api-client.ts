import axios from "axios"

const API_ACCESS_TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoib3duZXJAc3lzdGVtLmNvbSIsImlkIjoiZTViNzUwOWEtNjRjMS00MzZhLTg5ZjktNzFmZjM5OThkMzZlIiwic2Vzc2lvbklkIjoiYWFlNTlmMmMtNzg4MC00MDBiLWIyMTctMGRkNWFmNTE3ODk1Iiwicm9sZUlkIjoiNjc1NjhkMWEtYzFkOC00YzQzLTkxOTMtMTcwMmM4ODhlNTIzIn0sInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE3NjAxOTA5NDQsImV4cCI6MTc2MDE5NDU0NH0.NjVhXlHy2KRZEmv7qvLJHlHmzjy_pZD3f8z_E4vjpig"

export const apiClient = axios.create({
	baseURL: "http://localhost:3000/api/v1",
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
