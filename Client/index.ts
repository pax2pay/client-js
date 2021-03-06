import { Account as ClientAccount } from "./Account"
import { Accounts as ClientAccounts } from "./Accounts"
import { Auth as ClientAuth } from "./Auth"
import { Beneficiaries as ClientBeneficiaries } from "./Beneficiaries"
import { Card as ClientCard } from "./Card"
import { Cards as ClientCards } from "./Cards"
import { Collection as ClientCollection } from "./Collection"
import { Connection } from "./Connection"
import { List as ClientList } from "./List"
import { Organisation as ClientOrganisation } from "./Organisation"
import { Organisations as ClientOrganisations } from "./Organisations"
import { Reports as ClientReports } from "./Reports"
import { Resource as ClientResource } from "./Resource"
import { Transfers as ClientTransfers } from "./Transfers"
import { User as ClientUser } from "./User"
import { Users as ClientUsers } from "./Users"

type Authenticate = (client: Client) => Promise<boolean>

export class Client {
	set authenticate(value: Authenticate) {
		this.$authenticate = value
	}
	accounts = ClientAccounts.create(this.connection)
	auth = ClientAuth.create(this.connection)
	beneficiaries = ClientBeneficiaries.create(this.connection)
	cards = ClientCards.create(this.connection)
	users = ClientUsers.create(this.connection)
	organisations = ClientOrganisations.create(this.connection)
	reports = ClientReports.create(this.connection)
	transfers = ClientTransfers.create(this.connection)
	constructor(private connection: Connection, private $authenticate?: Authenticate) {
		connection.unauthorized = async () => (await this.$authenticate?.(this)) ?? false
	}
	static create(url: string | undefined, token?: string | Authenticate) {
		const connection = url ? Connection.open(url, typeof token == "string" ? token : undefined) : undefined
		return connection && new Client(connection, typeof token == "string" ? undefined : token)
	}
}

export namespace Client {
	export type Account = ClientAccount
	export type Accounts = ClientAccounts
	export type Auth = ClientAuth
	export type Beneficiaries = ClientBeneficiaries
	export type Card = ClientCard
	export type Cards = ClientCards
	export type Organisation = ClientOrganisation
	export type Organisations = ClientOrganisations
	export type Reports = ClientReports
	export type Transfers = ClientTransfers
	export type User = ClientUser
	export type Users = ClientUsers
	export type Collection<
		Response extends { [key: string]: any },
		Search extends { [key: string]: any },
		Request extends { [key: string]: any }
	> = ClientCollection<Response, Search, Request>
	export type List<Response extends { [key: string]: any }, Request extends { [key: string]: any }> = ClientList<
		Response,
		Request
	>
	export type Resource<Response, Request> = ClientResource<Response, Request>
}
