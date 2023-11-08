import * as model from "../../model"
import { Connection } from "../Connection"

export class Email {
	protected folder = "email"
	constructor(private readonly connection: Connection) {}
	static create(connection: Connection) {
		return new Email(connection)
	}
	async validateEmail(email: string) {
		return await this.connection.get<model.EmailValidationResponse>(`${this.folder}/validate/${email}`)
	}
}
