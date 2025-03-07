/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Base = "base",
	CustomAuth = "custom_auth",
	Everything = "everything",
	Posts = "posts",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type BaseRecord = {
	field?: string
}

export type CustomAuthRecord = {
	custom_field?: string
}

export enum EverythingSelectFieldOptions {
	"optionA" = "optionA",
	"OptionA" = "OptionA",
	"optionB" = "optionB",
	"optionC" = "optionC",
	"option with space" = "option with space",
	"sy?mb@!$" = "sy?mb@!$",
}
export type EverythingRecord<Tanother_json_field = unknown, Tjson_field = unknown> = {
	text_field?: string
	number_field?: number
	bool_field?: boolean
	email_field?: string
	url_field?: string
	date_field?: IsoDateString
	select_field?: EverythingSelectFieldOptions
	json_field?: null | Tjson_field
	another_json_field?: null | Tanother_json_field
	file_field?: string
	three_files_field?: string[]
	user_relation_field?: RecordIdString
	custom_relation_field?: RecordIdString[]
	post_relation_field?: RecordIdString
	select_field_no_values?: string
}

export type PostsRecord = {
	field?: string
	nonempty_field: string
	nonempty_bool: boolean
	field1?: number
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type BaseResponse = BaseRecord & BaseSystemFields
export type CustomAuthResponse = CustomAuthRecord & AuthSystemFields
export type EverythingResponse<Tanother_json_field = unknown, Tjson_field = unknown, Texpand = unknown> = EverythingRecord<Tanother_json_field, Tjson_field> & BaseSystemFields<Texpand>
export type PostsResponse = PostsRecord & BaseSystemFields
export type UsersResponse = UsersRecord & AuthSystemFields

export type CollectionRecords = {
	base: BaseRecord
	custom_auth: CustomAuthRecord
	everything: EverythingRecord
	posts: PostsRecord
	users: UsersRecord
}