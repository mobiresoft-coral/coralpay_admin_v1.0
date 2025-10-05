import { CircleAlert, Copy, Play, Trash2 } from "lucide-react"
import { Button } from "./ui/button"
import { useNodeAction } from "@/hooks/use-node-action"
import { useCallback } from "react"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

interface NodeWrapperProps {
	children?: React.ReactNode
}

export function NodeWrapper({ children }: NodeWrapperProps) {
	const { removeNode, onIdCopyAction, onCopyAction, startEmulation } = useNodeAction()

	const onDeleteAction = useCallback(() => {
		removeNode()
	}, [removeNode])

	const controls = [
		{
			icon: Play,
			onClick: startEmulation,
			name: "Simulate Node",
		},
		{
			icon: Copy,
			onClick: onCopyAction,
			name: "Copy Node",
		},
		{
			icon: CircleAlert,
			onClick: onIdCopyAction,
			name: "Copy Node ID",
		},
		{
			icon: Trash2,
			onClick: onDeleteAction,
			name: "Delete Node",
		},
	]

	return (
		<div className="relative group/wrapper" tabIndex={-1}>
			<div className="group-focus-within/wrapper:ring-0 group-focus-within/wrapper:ring-purple-700 rounded-3xl">
				{children}
			</div>

			<div className="bg-[#FEFAFF] absolute overflow-hidden bottom-[100%] mb-2 right-0 rounded-lg border border-[#4C0463] invisible group-focus-within/wrapper:visible group-focus-within/wrapper:opacity-100 opacity-0 transition-opacity">
				<div className="flex divide-x divide-[#4C0463]">
					{controls.map((control) => (
						<Tooltip key={control.name}>
							<TooltipTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="h-auto w-auto rounded-none aspect-1 text-xs p-1.5 flex items-center justify-center cursor-pointer hover:bg-[#fbecff] transition-colors"
									onClick={control.onClick}
								>
									<control.icon className="!h-3 !w-3 text-[#4C0463]" />
								</Button>
							</TooltipTrigger>
							<TooltipContent>
								<p>{control.name}</p>
							</TooltipContent>
						</Tooltip>
					))}
				</div>
			</div>
		</div>
	)
}
