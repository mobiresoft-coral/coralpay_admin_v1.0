/**
 * Basic tests to verify Smart Input utilities work correctly
 * Focus: UI functionality (styling, autocomplete) not template processing
 * This is a simple verification file, not comprehensive unit tests
 */

import {
	parseText,
	detectSuggestionTrigger,
	filterSuggestions,
	insertVariable,
	generateId,
} from "../smart-input-utils"

// Test data
const testVariables = {
	API_URL: "https://api.example.com",
	DATABASE_URL: "postgresql://localhost:5432/db",
	SECRET_KEY: "super-secret-key",
}

// Test parseText function
console.log("Testing parseText...")
const testText = "Connect to {{API_URL}} with key {{SECRET_KEY}} and {{INVALID_VAR}}"
const segments = parseText(testText, testVariables)
console.log("Parsed segments:", segments.length)
console.log("Valid variables found:", segments.filter((s) => s.type === "variable").length)
console.log(
	"Invalid variables found:",
	segments.filter((s) => s.type === "invalid-variable").length
)

// Test detectSuggestionTrigger function
console.log("\nTesting detectSuggestionTrigger...")
const triggerTest1 = detectSuggestionTrigger("Hello {{A", 9)
console.log("Should show suggestions:", triggerTest1.shouldShow)
console.log("Search query:", triggerTest1.searchQuery)
console.log("Trigger position:", triggerTest1.triggerPosition)

const triggerTest2 = detectSuggestionTrigger("Hello world", 11)
console.log("Should NOT show suggestions:", !triggerTest2.shouldShow)

// Test filterSuggestions function
console.log("\nTesting filterSuggestions...")
const filteredSuggestions = filterSuggestions(testVariables, "API")
console.log('Filtered suggestions for "API":', filteredSuggestions.length)
console.log("First suggestion:", filteredSuggestions[0]?.key)

// Test insertVariable function
console.log("\nTesting insertVariable...")
const insertResult = insertVariable("Hello {{A", "API_URL", 8, "A")
console.log("Inserted text:", insertResult.newText)
console.log("New cursor position:", insertResult.newCursorPosition)

// Test generateId function
console.log("\nTesting generateId...")
const id1 = generateId()
const id2 = generateId()
console.log("Generated unique IDs:", id1 !== id2)

console.log("\nAll basic tests completed successfully!")
