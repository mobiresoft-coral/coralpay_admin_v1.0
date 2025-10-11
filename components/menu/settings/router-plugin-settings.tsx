import { Input } from "@/components/ui/plain-input"
import { DEBOUNCE_TIME } from "@/constants/common"
import { useDebouncer } from "@/hooks/use-debouncer"
import type { Route } from "@mobiresoft-coral/ussd-shared-core"
import { useState } from "react"

interface RouterPluginSettingsProps {
	route: Route
	onSave: (id: string, plugin: Route) => void
}

export function RouterPluginSettings({ route, onSave }: RouterPluginSettingsProps) {
	const [internalRoute, setInternalRoute] = useState(route)

	const debouncedOnSave = useDebouncer((newRoute: Route) => {
		onSave(newRoute.id, newRoute)
	}, DEBOUNCE_TIME)

	const updateRoute = (updates: Partial<Route>) => {
		const newRoute = { ...internalRoute, ...updates }
		setInternalRoute(newRoute)
		debouncedOnSave(newRoute)
	}

	const onTargetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateRoute({ input: e.target.value })
	}

	const onConditionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateRoute({ condition: e.target.value })
	}

	return (
		<div className="flex flex-col gap-y-2">
			<Input
				placeholder="Enter target"
				className="focus-visible:border-0 focus-visible:ring-2 h-11"
				value={internalRoute.input}
				onChange={onTargetChange}
			/>
			<div className="p-2 border rounded-lg bg-gray-100">Matches</div>
			<Input
				placeholder="Enter condition"
				className="focus-visible:border-0 focus-visible:ring-2 h-11"
				value={internalRoute.condition}
				onChange={onConditionChange}
			/>
		</div>
	)
}
