import { useMenuBuilderStore } from "@/hooks/use-menu-builder-store"
import { ReactFlow, Background, Controls, MiniMap } from "@xyflow/react"

const defaultViewport = { x: 0, y: 0, zoom: 1.2 }

export function MenuBuilderWorkspace() {
	const store = useMenuBuilderStore()

	const nodeTypes = store((s) => s.nodeTypes)
	const onDrop = store((s) => s.onDrop)
	const onDragOver = store((s) => s.onDragOver)
	const onNodesChange = store((s) => s.onNodesChange)
	const onEdgesChange = store((s) => s.onEdgesChange)
	const nodes = store((s) => s.nodes)
	const setReactFlowInstance = store((s) => s.setReactFlowInstance)
	const edges = store((s) => s.edges)
	const onPaste = store((s) => s.onPaste)

	return (
		<ReactFlow
			onPaste={onPaste}
			nodes={nodes}
			edges={edges}
			onNodesChange={onNodesChange}
			onEdgesChange={onEdgesChange}
			// onConnect={onConnect}
			onInit={setReactFlowInstance}
			onDrop={onDrop}
			onDragOver={onDragOver}
			// onNodeClick={onNodeClick}
			defaultViewport={defaultViewport}
			nodeTypes={nodeTypes}
		>
			<Controls position="top-right" />
			<Background className="bg-gray-100" />
			<MiniMap />
		</ReactFlow>
	)
}
