import axios from "axios"

const API_ACCESS_TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoib3duZXJAc3lzdGVtLmNvbSIsImlkIjoiZTViNzUwOWEtNjRjMS00MzZhLTg5ZjktNzFmZjM5OThkMzZlIiwic2Vzc2lvbklkIjoiZGJjYmNhYjctNDMyYS00OWJmLWFkZDYtNjRmMWY5OTczNTgxIiwicm9sZUlkIjoiNjc1NjhkMWEtYzFkOC00YzQzLTkxOTMtMTcwMmM4ODhlNTIzIn0sInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE3NjAxNDQ5MDEsImV4cCI6MTc2MDE0ODUwMX0.HcArsAP-WCXQTX7UEjzqYHCv2NEcJq7vZ2Ixa4Nl4XE"

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
