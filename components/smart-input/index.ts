/**
 * Smart Input component exports
 */

export { SmartInput, SmartInputMemo } from "./smart-input"
export { SmartInputEnhanced } from "./smart-input-enhanced"
export {
	SmartInputErrorBoundary,
	useSmartInputErrorHandler,
	withSmartInputErrorBoundary,
} from "./smart-input-error-boundary"
export { EnvironmentSuggestions } from "./environment-suggestions"
export { SmartInputRenderer, SmartInputRendererMemo } from "./smart-input-renderer"
export { SmartInputBase } from "./smart-input-base"

// Re-export types for convenience
export type {
	SmartInputProps,
	EnvironmentSuggestionsProps,
	EnvironmentSuggestionsExtendedProps,
	SmartInputRendererProps,
	SmartInputBaseProps,
} from "@/types/smart-input"
