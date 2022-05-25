import * as model from "../../model"
import { Connection } from "../Connection"
import { Resource } from "../Resource"

export class User extends Resource<model.UserResponse, model.UserResponse> {
	constructor(connection: Connection, folder: string, backend: model.UserResponse) {
		super(connection, folder, backend)
	}
}
