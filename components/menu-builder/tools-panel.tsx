import { Input } from "../ui/input"
import { cn } from "@/lib/utils"
import type { ToolType } from "@/types"
import { ICON_MAP } from "@/constants/tools"

export function ToolSearchBar() {
	return (
		<div>
			<Input
				placeholder="Search"
				className="rounded-md focus-visible:ring-1 focus-visible:border-none"
			/>
		</div>
	)
}

interface Tool {
	name: ToolType
	title: string
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

interface ToolSection {
	name: string
	className: string
	tools: Tool[]
}

const TOOL_SECTIONS: ToolSection[] = [
	{
		name: "Display",
		className: "text-green-600",
		tools: [
			{
				title: "Template",
				name: "display_text",
				icon: ICON_MAP["display_text"],
			},
		],
	},
	{
		name: "Plugins",
		className: "text-blue-600",
		tools: [
			{
				title: "Router",
				name: "plugin_router",
				icon: ICON_MAP["plugin_router"],
			},
			{
				title: "Payment",
				name: "plugin_payment",
				icon: ICON_MAP["plugin_payment"],
			},
			{
				name: "plugin_apicall",
				title: "API Call",
				icon: ICON_MAP["plugin_apicall"],
			},
		],
	},
	{
		name: "Validations",
		className: "text-red-600",
		tools: [
			{
				title: "Text",
				name: "input_text",
				icon: ICON_MAP["input_text"],
			},
			{
				title: "Number",
				name: "input_number",
				icon: ICON_MAP["input_number"],
			},
			{ title: "Email", name: "input_email", icon: ICON_MAP["input_email"] },
			{ title: "Phone", name: "input_phone", icon: ICON_MAP["input_phone"] },
			{ title: "Website", name: "input_website", icon: ICON_MAP["input_website"] },
		],
	},
	{
		name: "Logic",
		className: "text-purple-600",
		tools: [
			{
				title: "Set variable",
				name: "logic_set_variable",
				icon: ICON_MAP["logic_set_variable"],
			},
		],
	},
	{
		name: "Events",
		className: "text-orange-600",
		tools: [
			{
				title: "Start",
				name: "event_start",
				icon: ICON_MAP["event_start"],
			},
			{
				name: "event_end",
				title: "End",
				icon: ICON_MAP["event_end"],
			},
		],
	},
]

interface ToolProps {
	tool: Tool
	className: string
}

function Tool({ tool, className }: ToolProps) {
	const onDragStart = (event: React.DragEvent) => {
		event.dataTransfer.setData("application/reactflow", tool.name)
		// event.dataTransfer.effectAllowed = "move"
	}

	const onDragEnd = (event: React.DragEvent) => {
		event.preventDefault()
		event.dataTransfer.clearData()
	}

	const Icon = tool.icon

	return (
		<div
			onDragStart={onDragStart}
			onDragEnd={onDragEnd}
			draggable
			key={tool.name}
			className={cn(
				"flex items-center px-2 py-1.5 bg-[#A476B214] rounded-lg transition-shadow cursor-pointer select-none border"
			)}
		>
			<Icon className={cn("h-4 w-4", className)} />
			<span className="ml-2 text-sm">{tool.title}</span>
		</div>
	)
}

interface ToolSectionProps {
	section: ToolSection
}

function ToolSection({ section }: ToolSectionProps) {
	return (
		<div className="p-2">
			<h3 className="text-sm font-semibold text-gray-700 mb-2">{section.name}</h3>
			<div className="grid grid-cols-2 gap-4">
				{section.tools.map((tool) => (
					<Tool key={tool.name} tool={tool} className={section.className} />
				))}
			</div>
		</div>
	)
}

export function ToolsPanel() {
	return (
		<div className="h-full bg-white rounded-lg  w-72 p-2 space-y-2">
			<div className="p-2 text-3xl font-semibold">Build Service</div>

			{TOOL_SECTIONS.map((section) => (
				<ToolSection key={section.name} section={section} />
			))}
		</div>
	)
}
