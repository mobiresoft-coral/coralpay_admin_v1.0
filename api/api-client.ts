import axios from "axios"

const API_ACCESS_TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoib3duZXJAc3lzdGVtLmNvbSIsImlkIjoiZTViNzUwOWEtNjRjMS00MzZhLTg5ZjktNzFmZjM5OThkMzZlIiwic2Vzc2lvbklkIjoiYWE3YzcxMjUtZGNmYS00MmVmLThmNTItNTcxODIwYWMzMWFhIiwicm9sZUlkIjoiNjc1NjhkMWEtYzFkOC00YzQzLTkxOTMtMTcwMmM4ODhlNTIzIn0sInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE3NjAxNTY0ODMsImV4cCI6MTc2MDE2MDA4M30.csuA8MJzIji2creXg4ipXMy2exIRhN2yl_WnYWn-gCw"

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
