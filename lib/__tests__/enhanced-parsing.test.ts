/**
 * Enhanced tests for the new parsing utilities
 */

import {
	parseText,
	parseTextWithMalformedDetection,
	isValidVariableName,
	getVariableSegments,
	getTextSegments,
	findSegmentAtPosition,
	getVariableNamesFromSegments,
	countSegmentsByType,
} from "../smart-input-utils"

// Test data
const testVariables = {
	API_URL: "https://api.example.com",
	DATABASE_URL: "postgresql://localhost:5432/db",
	SECRET_KEY: "super-secret-key",
	valid_name: "test",
	_underscore: "test",
	VALID: "test-value",
}

console.log("Testing enhanced parsing utilities...")

// Test isValidVariableName
console.log("\n1. Testing isValidVariableName...")
console.log("Valid names:")
console.log("  API_URL:", isValidVariableName("API_URL"))
console.log("  _underscore:", isValidVariableName("_underscore"))
console.log("  valid123:", isValidVariableName("valid123"))

console.log("Invalid names:")
console.log("  123invalid:", isValidVariableName("123invalid"))
console.log("  invalid-name:", isValidVariableName("invalid-name"))
console.log("  empty string:", isValidVariableName(""))
console.log("  with spaces:", isValidVariableName("invalid name"))

// Test enhanced parsing
console.log("\n2. Testing enhanced parseText...")
const testText = "Connect to {{API_URL}} with {{SECRET_KEY}} and {{INVALID_VAR}} and {{123invalid}}"
const segments = parseText(testText, testVariables)

console.log("Total segments:", segments.length)
segments.forEach((segment, index) => {
	console.log(
		`  Segment ${index}: type=${segment.type}, content="${segment.content}", valid=${segment.isValid}`
	)
})

// Test utility functions
console.log("\n3. Testing utility functions...")

const variableSegments = getVariableSegments(segments)
console.log("Variable segments count:", variableSegments.length)

const textSegments = getTextSegments(segments)
console.log("Text segments count:", textSegments.length)

const segmentAt15 = findSegmentAtPosition(segments, 15)
console.log("Segment at position 15:", segmentAt15?.content)

const variableNames = getVariableNamesFromSegments(segments)
console.log("Variable names found:", variableNames)

const counts = countSegmentsByType(segments)
console.log("Segment counts:", counts)

// Test malformed detection
console.log("\n4. Testing malformed pattern detection...")
const malformedText1 = "Start {{incomplete"
const malformedSegments1 = parseTextWithMalformedDetection(malformedText1, testVariables)

console.log("Malformed text segments (incomplete):")
malformedSegments1.forEach((segment, index) => {
	console.log(`  Segment ${index}: type=${segment.type}, content="${segment.content}"`)
})

const malformedText2 = "Start {{VALID}} and {{incomplete text"
const malformedSegments2 = parseTextWithMalformedDetection(malformedText2, testVariables)

console.log("Mixed valid/malformed segments:")
malformedSegments2.forEach((segment, index) => {
	console.log(`  Segment ${index}: type=${segment.type}, content="${segment.content}"`)
})

console.log("\nEnhanced parsing tests completed!")
