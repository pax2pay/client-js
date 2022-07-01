import * as model from "../../model"
import { Connection } from "../Connection"
import { Resource } from "../Resource"

export class User extends Resource<model.User.UserResponse, model.User.UserResponse> {
	constructor(connection: Connection, folder: string, backend: model.User.UserResponse) {
		super(connection, folder, backend)
	}
}
