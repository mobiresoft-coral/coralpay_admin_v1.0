import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus, Trash2 } from "lucide-react"
import type { KeyValuePair } from "@/types"



interface KeyValueSelectProps {
	title: string
	pairs: KeyValuePair[]
	onAdd: () => void
	onRemove: (id: string) => void
	onUpdate: (id: string, field: "key" | "value", value: string) => void
}

export const KeyValueSelect = ({
	title,
	pairs,
	onAdd,
	onRemove,
	onUpdate,
}: KeyValueSelectProps) => (
	<div className="flex flex-col gap-y-2">
		<div className="flex items-center justify-between">
			<span className="font-normal">{title}:</span>
			<Button type="button" variant="outline" size="sm" onClick={onAdd} className="h-8 px-2">
				<Plus className="h-4 w-4 mr-1" />
				Add
			</Button>
		</div>
		<div className="space-y-2">
			{pairs.map((pair) => (
				<div key={pair.id} className="flex items-center gap-2">
					<Input
						value={pair.key}
						onChange={(e) => onUpdate(pair.id, "key", e.target.value)}
						placeholder="Key"
						className="flex-1 focus-visible:border-0 focus-visible:ring-2"
					/>
					<Input
						value={pair.value}
						onChange={(e) => onUpdate(pair.id, "value", e.target.value)}
						placeholder="Value"
						className="flex-1 focus-visible:border-0 focus-visible:ring-2"
					/>
					<Button
						type="button"
						variant="ghost"
						size="sm"
						onClick={() => onRemove(pair.id)}
						className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
						disabled={pairs.length === 1}
					>
						<Trash2 className="h-4 w-4" />
					</Button>
				</div>
			))}
		</div>
	</div>
)
