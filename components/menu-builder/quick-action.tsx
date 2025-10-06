import TipIcon from "@/assets/icons/tip.png"
import PlayIcon from "@/assets/icons/play.png"
import "@xyflow/react/dist/style.css"
import { Button } from "@/components/ui/button"
import { createImageIcon } from "@/lib/utils"

const Tip = createImageIcon(TipIcon, "Tips")
const Play = createImageIcon(PlayIcon, "Simulate")

interface QuickActionProps {
	isSimulating?: boolean
}

export function QuickAction({ isSimulating = false }: QuickActionProps) {
	return (
		<div className="flex gap-4">
			{!isSimulating && (
				<>
					<Button variant="outline" className="gap-3 border-primary">
						<Tip className="w-4" />
						Tips
					</Button>
					<Button className="bg-background-secondary hover:bg-initial text-primary gap-3">
						<Play className="w-4" />
						Simulate
					</Button>
				</>
			)}
			<Button>Send Publish Request</Button>
		</div>
	)
}
