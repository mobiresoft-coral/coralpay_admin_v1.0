"use client"
import "@xyflow/react/dist/style.css"
import { ToolsPanel } from "@/components/menu-builder/tools-panel"
import { MenuBuilderWorkspace } from "@/components/menu-builder/workspace"
import { MenuBuilderStoreProvider } from "@/components/menu-builder/store-provider"
import { Toaster } from "@/components/ui/sonner"
import { EmulatorPanel } from "@/components/simulator/panel"
import { StoreChangeObserver } from "@/components/menu-builder/store-change-observer"
import ErrorBoundary from "@/components/common/error-boundary"
import { QuickAction } from "@/components/menu-builder/quick-action"
import { SceneControls } from "@/components/menu-builder/scene-control"
import { SaveStatus } from "@/components/menu-builder/save-status"

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
					<div className="absolute top-0 right-0 p-4 flex items-center gap-4">
						<SaveStatus />
						<QuickAction />
					</div>
					<div className="absolute bottom-0 right-4 p-4">
						<SceneControls />
					</div>
					<div className="absolute top-0 left-0 h-full p-4">
						<ToolsPanel />
					</div>
					<EmulatorPanel />
				</div>
			</MenuBuilderStoreProvider>
			<Toaster position="top-right" />
		</ErrorBoundary>
	)
}

export default EditServicePage
