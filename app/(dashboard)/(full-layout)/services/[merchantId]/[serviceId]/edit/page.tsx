"use client"
import { ToolsPanel } from "@/components/menu-builder/tools-panel"
import { MenuBuilderWorkspace } from "@/components/menu-builder/workspace"
import { MenuBuilderStoreProvider } from "@/components/menu-builder/store-provider"
import { Toaster } from "@/components/ui/sonner"
import { EmulatorPanel } from "@/components/simulator/panel"
import { StoreChangeObserver } from "@/components/menu-builder/store-change-observer"
import ErrorBoundary from "@/components/common/error-boundary"
import "@xyflow/react/dist/style.css"
import { QuickAction } from "@/components/menu-builder/quick-action"
import { Button } from "@/components/ui/button"

import PlusIcon from "@/assets/icons/plus.png"
import MinusIcon from "@/assets/icons/minus.png"
import FocusIcon from "@/assets/icons/focus.png"
import { createImageIcon } from "@/lib/utils"

const Plus = createImageIcon(PlusIcon, "Zoom In")
const Minus = createImageIcon(MinusIcon, "Zoom Out")
const Focus = createImageIcon(FocusIcon, "Focus")

function SceneControls() {
	return (
		<div className="flex gap-2 items-center">
			<div className="font-bold text-sm">Zoom</div>
			<Button variant="unstyled" className="p-0 h-auto">
				<Plus className="w-4 h-4" />
			</Button>
			<Button variant="unstyled" className="p-0 h-auto">
				<Minus className="w-4 h-4" />
			</Button>
			<Button variant="unstyled" className="p-0 h-auto">
				<Focus className="w-4 h-4" />
			</Button>
		</div>
	)
}

const EditServicePage = () => {
	return (
		<ErrorBoundary>
			<MenuBuilderStoreProvider
				merchantId="344cdc8c-a7b0-4fbe-b665-607af6e412ed"
				serviceId="c887ce9c-cc9b-4a31-bdec-1cc9111fa709"
			>
				<StoreChangeObserver />
				<div className="relative h-dvh flex">
					<div className="flex-1">
						<MenuBuilderWorkspace />
					</div>
					<div className="absolute top-0 left-0 h-full p-4">
						<ToolsPanel />
					</div>
					<div className="absolute top-0 right-4 p-4">
						<QuickAction />
					</div>
					<div className="absolute bottom-0 right-8 p-4">
						<SceneControls />
					</div>
					<EmulatorPanel />
				</div>
			</MenuBuilderStoreProvider>
			<Toaster position="top-right" />
		</ErrorBoundary>
	)
}

export default EditServicePage
