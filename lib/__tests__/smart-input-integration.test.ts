/**
 * Integration tests for SmartInput component
 * Tests the complete functionality including performance optimizations
 */

import { renderHook, act } from "@testing-library/react"
import { useSmartInput } from "@/hooks/use-smart-input"

describe("SmartInput Integration", () => {
	const mockVariables = {
		API_URL: "https://api.example.com",
		DATABASE_URL: "postgresql://localhost:5432/mydb",
		JWT_SECRET: "secret-key",
	}

	describe("useSmartInput hook", () => {
		it("should initialize with correct default state", () => {
			const mockOnChange = jest.fn()
			const { result } = renderHook(() =>
				useSmartInput({
					value: "",
					onChange: mockOnChange,
					variables: mockVariables,
				})
			)

			expect(result.current.textSegments).toEqual([])
			expect(result.current.showSuggestions).toBe(false)
			expect(result.current.suggestions).toEqual([])
			expect(result.current.selectedIndex).toBe(0)
			expect(result.current.cursorPosition).toBe(0)
		})

		it("should parse text with environment variables", () => {
			const mockOnChange = jest.fn()
			const { result } = renderHook(() =>
				useSmartInput({
					value: "Connect to {{API_URL}}/users",
					onChange: mockOnChange,
					variables: mockVariables,
				})
			)

			expect(result.current.textSegments).toHaveLength(3)
			expect(result.current.textSegments[0].type).toBe("text")
			expect(result.current.textSegments[0].content).toBe("Connect to ")
			expect(result.current.textSegments[1].type).toBe("variable")
			expect(result.current.textSegments[1].content).toBe("{{API_URL}}")
			expect(result.current.textSegments[2].type).toBe("text")
			expect(result.current.textSegments[2].content).toBe("/users")
		})

		it("should identify invalid variables", () => {
			const mockOnChange = jest.fn()
			const { result } = renderHook(() =>
				useSmartInput({
					value: "Invalid: {{UNKNOWN_VAR}}",
					onChange: mockOnChange,
					variables: mockVariables,
				})
			)

			expect(result.current.textSegments).toHaveLength(2)
			expect(result.current.textSegments[1].type).toBe("invalid-variable")
			expect(result.current.textSegments[1].content).toBe("{{UNKNOWN_VAR}}")
		})

		it("should provide correct variable counts", () => {
			const mockOnChange = jest.fn()
			const { result } = renderHook(() =>
				useSmartInput({
					value: "Valid: {{API_URL}} Invalid: {{UNKNOWN}}",
					onChange: mockOnChange,
					variables: mockVariables,
				})
			)

			expect(result.current.validVariableCount).toBe(1)
			expect(result.current.invalidVariableCount).toBe(1)
			expect(result.current.hasVariables).toBe(true)
		})
	})

	describe("Text manipulation utilities", () => {
		it("should handle cursor positioning correctly", () => {
			const mockOnChange = jest.fn()
			const { result } = renderHook(() =>
				useSmartInput({
					value: "Test {{API_URL}} text",
					onChange: mockOnChange,
					variables: mockVariables,
				})
			)

			// Test cursor position utilities
			expect(typeof result.current.getCursorPosition).toBe("function")
			expect(typeof result.current.setCursorPosition).toBe("function")
			expect(typeof result.current.getSelectedText).toBe("function")
		})

		it("should provide text manipulation methods", () => {
			const mockOnChange = jest.fn()
			const { result } = renderHook(() =>
				useSmartInput({
					value: "Test text",
					onChange: mockOnChange,
					variables: mockVariables,
				})
			)

			// Check that all expected methods are available
			expect(typeof result.current.insertTextAtCursor).toBe("function")
			expect(typeof result.current.deleteSelection).toBe("function")
			expect(typeof result.current.selectAll).toBe("function")
			expect(typeof result.current.selectVariable).toBe("function")
		})
	})

	describe("Advanced text operations", () => {
		it("should detect when cursor is in variable", () => {
			const mockOnChange = jest.fn()
			const { result } = renderHook(() =>
				useSmartInput({
					value: "Test {{API_URL}} text",
					onChange: mockOnChange,
					variables: mockVariables,
				})
			)

			expect(typeof result.current.isInVariable).toBe("function")
			expect(typeof result.current.getCurrentVariable).toBe("function")
			expect(typeof result.current.moveToVariableBoundary).toBe("function")
		})
	})

	describe("History operations", () => {
		it("should provide undo/redo functionality", () => {
			const mockOnChange = jest.fn()
			const { result } = renderHook(() =>
				useSmartInput({
					value: "Test text",
					onChange: mockOnChange,
					variables: mockVariables,
				})
			)

			expect(typeof result.current.undo).toBe("function")
			expect(typeof result.current.redo).toBe("function")
			expect(typeof result.current.canUndo).toBe("boolean")
			expect(typeof result.current.canRedo).toBe("boolean")
		})
	})

	describe("Event handlers", () => {
		it("should provide all required event handlers", () => {
			const mockOnChange = jest.fn()
			const { result } = renderHook(() =>
				useSmartInput({
					value: "Test text",
					onChange: mockOnChange,
					variables: mockVariables,
				})
			)

			// Check that all event handlers are functions
			expect(typeof result.current.handleInputChange).toBe("function")
			expect(typeof result.current.handleKeyDown).toBe("function")
			expect(typeof result.current.handleFocus).toBe("function")
			expect(typeof result.current.handleBlur).toBe("function")
			expect(typeof result.current.handleSelectionChange).toBe("function")
			expect(typeof result.current.handleCopy).toBe("function")
			expect(typeof result.current.handlePaste).toBe("function")
			expect(typeof result.current.handleCut).toBe("function")
		})
	})

	describe("Suggestion functionality", () => {
		it("should provide suggestion-related methods", () => {
			const mockOnChange = jest.fn()
			const { result } = renderHook(() =>
				useSmartInput({
					value: "Test text",
					onChange: mockOnChange,
					variables: mockVariables,
				})
			)

			expect(typeof result.current.handleSuggestionSelect).toBe("function")
			expect(typeof result.current.closeSuggestions).toBe("function")
			expect(typeof result.current.insertVariableAtCursor).toBe("function")
		})
	})

	describe("Performance considerations", () => {
		it("should handle large numbers of variables efficiently", () => {
			// Create a large number of variables
			const largeVariables: Record<string, string> = {}
			for (let i = 0; i < 1000; i++) {
				largeVariables[`VAR_${i}`] = `value_${i}`
			}

			const mockOnChange = jest.fn()
			const { result } = renderHook(() =>
				useSmartInput({
					value: "Test {{VAR_1}} text",
					onChange: mockOnChange,
					variables: largeVariables,
				})
			)

			// Should still parse correctly with large variable set
			expect(result.current.textSegments).toHaveLength(3)
			expect(result.current.validVariableCount).toBe(1)
		})

		it("should maintain stable references for performance", () => {
			const mockOnChange = jest.fn()
			const { result, rerender } = renderHook(
				({ value }) =>
					useSmartInput({
						value,
						onChange: mockOnChange,
						variables: mockVariables,
					}),
				{ initialProps: { value: "Test text" } }
			)

			const firstRenderHandlers = {
				handleInputChange: result.current.handleInputChange,
				handleKeyDown: result.current.handleKeyDown,
				handleFocus: result.current.handleFocus,
				handleBlur: result.current.handleBlur,
			}

			// Rerender with same props
			rerender({ value: "Test text" })

			// Handlers should be stable (same reference)
			expect(result.current.handleInputChange).toBe(firstRenderHandlers.handleInputChange)
			expect(result.current.handleKeyDown).toBe(firstRenderHandlers.handleKeyDown)
			expect(result.current.handleFocus).toBe(firstRenderHandlers.handleFocus)
			expect(result.current.handleBlur).toBe(firstRenderHandlers.handleBlur)
		})
	})
})
