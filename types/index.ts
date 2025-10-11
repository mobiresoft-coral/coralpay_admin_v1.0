import { LoginFormSchema } from "@/app/(auth)/login/validations"
// import { ResetPasswordFormSchema } from "@/app/(auth)/reset-password/validations";
import { ChangePasswordFormSchema } from "@/app/(auth)/change-password/validations"
import { ForgotPasswordFormSchema } from "@/app/(auth)/forgot-password/validations"
import { store } from "@/store"
import * as z from "zod"

import { type MenuNode, MenuNodeType } from "@mobiresoft-coral/ussd-shared-core"

export type {
	Plugin,
	RouterPlugin,
	PluginToolType,
	InputToolType,
	LogicToolType,
	EventToolType,
	DisplayToolType,
	ToolType,
} from "@mobiresoft-coral/ussd-shared-core"

const UserSchema = z.object({
	accessToken: z.string(),
	refreshToken: z.string(),
	expiresIn: z.number(),
	tokenType: z.string(),
	isAuthenticated: z.boolean(),
	email: z.string(),
})

export type User = z.infer<typeof UserSchema>
export type LoginFormData = z.infer<typeof LoginFormSchema>
export type ChangePasswordFormData = z.infer<typeof ChangePasswordFormSchema>
export type ForgotPasswordFormData = z.infer<typeof ForgotPasswordFormSchema>
// export type ResetPasswordFormData = z.infer<typeof ResetPasswordFormSchema>;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { MenuNodeType as NodeType }

export type NodeData = MenuNode

export type EdgeData = Record<string, unknown>

export interface KeyValuePair {
	key: string
	value: string
	id: string
}

export type SimulatorConfig = {
	open: boolean
	startNodeId?: string
}

// Smart Input types
export type {
	TextSegment,
	SuggestionItem,
	VariableStyle,
	SmartInputProps,
	SmartInputState,
	SuggestionTrigger,
	EnvironmentSuggestionsProps,
	SmartInputRendererProps,
	SmartInputBaseProps,
} from "./smart-input"
