/**
 * SmartInputRenderer Component
 *
 * Provides visual rendering of text segments with styled environment variable references.
 * Uses an overlay approach to render styled text segments over the input field.
 */

import React from "react"
import { clsx } from "clsx"
import { SmartInputRendererProps, TextSegment } from "@/types/smart-input"
import { DEFAULT_VARIABLE_STYLE, DEFAULT_INVALID_VARIABLE_STYLE } from "@/lib/smart-input-constants"

/**
 * SmartInputRenderer component for styled text display
 *
 * This component creates an overlay that renders styled text segments
 * while maintaining proper alignment with the underlying input field.
 */
export const SmartInputRenderer: React.FC<SmartInputRendererProps> = ({
	segments,
	variableStyle = DEFAULT_VARIABLE_STYLE,
	invalidVariableStyle = DEFAULT_INVALID_VARIABLE_STYLE,
	className,
}) => {
	/**
	 * Render individual text segment with appropriate styling
	 */
	const renderSegment = (segment: TextSegment) => {
		const baseClasses = "whitespace-pre"

		switch (segment.type) {
			case "variable":
				return (
					<span
						key={segment.id}
						className={clsx(baseClasses)}
						style={{
							backgroundColor: variableStyle.backgroundColor,
							fontWeight: variableStyle.fontWeight,
							fontStyle: variableStyle.fontStyle,
							color: variableStyle.textColor,
							borderRadius: variableStyle.borderRadius,
						}}
						title={`Environment variable: ${segment.variableName}`}
					>
						{segment.content}
					</span>
				)

			case "invalid-variable":
				return (
					<span
						key={segment.id}
						className={clsx(baseClasses)}
						style={{
							backgroundColor: invalidVariableStyle.backgroundColor,
							fontWeight: invalidVariableStyle.fontWeight,
							fontStyle: invalidVariableStyle.fontStyle,
							color: invalidVariableStyle.textColor,
							borderRadius: invalidVariableStyle.borderRadius,
						}}
						title={`Invalid variable: ${segment.variableName || "malformed"}`}
					>
						{segment.content}
					</span>
				)

			case "text":
			default:
				return (
					<span key={segment.id} className={baseClasses}>
						{segment.content}
					</span>
				)
		}
	}

	return (
		<div
			className={clsx(
				// Match input positioning and sizing exactly
				"absolute inset-0 pointer-events-none",
				"px-3 py-1", // Match input padding exactly
				"text-base md:text-sm", // Match input font size exactly
				"h-9 flex items-center", // Match input height and vertical alignment
				"overflow-hidden box-border", // Ensure consistent box model
				"font-mono", // Use monospace font for consistent character widths
				className
			)}
			aria-hidden="true" // Hide from screen readers as this is visual only
		>
			<div className="w-full whitespace-nowrap overflow-hidden">{segments.map(renderSegment)}</div>
		</div>
	)
}

/**
 * Memoized version of SmartInputRenderer for performance optimization
 */
export const SmartInputRendererMemo = React.memo(SmartInputRenderer, (prevProps, nextProps) => {
	// Custom comparison for segments array
	if (prevProps.segments.length !== nextProps.segments.length) {
		return false
	}

	// Compare each segment
	for (let i = 0; i < prevProps.segments.length; i++) {
		const prevSegment = prevProps.segments[i]
		const nextSegment = nextProps.segments[i]

		if (
			prevSegment.id !== nextSegment.id ||
			prevSegment.type !== nextSegment.type ||
			prevSegment.content !== nextSegment.content ||
			prevSegment.variableName !== nextSegment.variableName ||
			prevSegment.isValid !== nextSegment.isValid
		) {
			return false
		}
	}

	// Compare styling objects
	const prevVarStyle = prevProps.variableStyle || DEFAULT_VARIABLE_STYLE
	const nextVarStyle = nextProps.variableStyle || DEFAULT_VARIABLE_STYLE
	const prevInvalidStyle = prevProps.invalidVariableStyle || DEFAULT_INVALID_VARIABLE_STYLE
	const nextInvalidStyle = nextProps.invalidVariableStyle || DEFAULT_INVALID_VARIABLE_STYLE

	if (
		JSON.stringify(prevVarStyle) !== JSON.stringify(nextVarStyle) ||
		JSON.stringify(prevInvalidStyle) !== JSON.stringify(nextInvalidStyle) ||
		prevProps.className !== nextProps.className
	) {
		return false
	}

	return true
})

SmartInputRendererMemo.displayName = "SmartInputRendererMemo"

export default SmartInputRenderer
