import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Simulator } from "@/components/simulator/simulator"
import { useMenuBuilderStore } from "@/hooks/use-menu-builder-store"

export function EmulatorPanel() {
	const store = useMenuBuilderStore()
	const simulatorConfig = store((s) => s.simulatorConfig)
	const closeEmulator = store((s) => s.closeSimulator)

	if (!simulatorConfig.open) {
		return null
	}

	return (
		<div className="w-[26rem] border flex flex-col shadow-md">
			<div className="flex shrink-0 items-center justify-between p-2 border-b">
				<span className="text-lg font-semibold ml-0.5">Simulator</span>
				<Button
					onClick={closeEmulator}
					variant="ghost"
					size="icon"
					className="h-auto w-auto p-1 cursor-pointer"
				>
					<X className="w-4 h-4" />
				</Button>
			</div>
			<div className="flex-1">
				<Simulator config={simulatorConfig} />
			</div>
		</div>
	)
}
