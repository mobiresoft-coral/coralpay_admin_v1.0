import axios from "axios"

const API_ACCESS_TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoib3duZXJAc3lzdGVtLmNvbSIsImlkIjoiZTViNzUwOWEtNjRjMS00MzZhLTg5ZjktNzFmZjM5OThkMzZlIiwic2Vzc2lvbklkIjoiZmQ5Mzk0YmItMjkyYi00NTg2LWI0YmYtMjM4MGQyNzEwNDE1Iiwicm9sZUlkIjoiNjc1NjhkMWEtYzFkOC00YzQzLTkxOTMtMTcwMmM4ODhlNTIzIn0sInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE3NjAxNDg1NzcsImV4cCI6MTc2MDE1MjE3N30.gFz77M1_3UjLKaRvs8gLckwllJ3ZHyMhWfZ2DFcbRLM"

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
