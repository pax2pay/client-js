import { Accounts as ClientAccounts } from "./Accounts"
import { ApiKeys as ClientApiKeys } from "./Api-keys"
import { Auth as ClientAuth } from "./Auth"
import { Beneficiaries as ClientBeneficiaries } from "./Beneficiaries"
import { CardOptions as ClientCardOptions } from "./CardOptions"
import { Cards as ClientCards } from "./Cards"
import { CardTypes as ClientCardTypes } from "./CardTypes"
import { Categories as ClientCategories } from "./Categories"
import { Configuration as ClientConfiguration } from "./Configuration"
import { ConfirmationOfPayee as ClientConfirmationOfPayee } from "./ConfirmationOfPayee"
import { Connection } from "./Connection"
import { Credentials as ClientCredentials } from "./Credentials"
import { Currency as ClientCurrency } from "./Currency"
import { Email as ClientEmail } from "./Email"
import { List as ClientList } from "./List"
import { Merchants as ClientMerchants } from "./Merchants"
import { Metadata as ClientMetadata } from "./Metadata"
import { Notifications as ClientNotifications } from "./Notifications"
import { Omnisetup as ClientOmnisetup } from "./Omnisetup"
import { Organisations as ClientOrganisations } from "./Organisations"
import { Paginated as ClientPaginated } from "./Paginated"
import { Payments as ClientPayments } from "./Payments"
import { Reports as ClientReports } from "./Reports"
import { Rolesets as ClientRolesets } from "./Rolesets"
import { Transfers as ClientTransfers } from "./Transfers"
import { Users as ClientUsers } from "./Users"

type Authenticate = (client: Client) => Promise<boolean>

export class Client {
	set authenticate(value: Authenticate) {
		this.$authenticate = value
	}
	accounts = ClientAccounts.create(this.connection)
	auth = ClientAuth.create(this.connection)
	beneficiaries = ClientBeneficiaries.create(this.connection)
	cardOptions = ClientCardOptions.create(this.connection)
	cards = ClientCards.create(this.connection)
	cardTypes = ClientCardTypes.create(this.connection)
	categories = ClientCategories.create(this.connection)
	configuration = ClientConfiguration.create(this.connection)
	confirmationOfPayee = ClientConfirmationOfPayee.create(this.connection)
	credentials = ClientCredentials.create(this.connection)
	currency = ClientCurrency.create(this.connection)
	email = ClientEmail.create(this.connection)
	merchants = ClientMerchants.create(this.connection)
	metadata = ClientMetadata.create(this.connection)
	notifications = ClientNotifications.create(this.connection)
	omnisetup = ClientOmnisetup.create(this.connection)
	organisations = ClientOrganisations.create(this.connection)
	payments = ClientPayments.create(this.connection)
	reports = ClientReports.create(this.connection)
	transfers = ClientTransfers.create(this.connection)
	users = ClientUsers.create(this.connection)
	rolesets = ClientRolesets.create(this.connection)
	apiKeys = ClientApiKeys.create(this.connection)

	constructor(private connection: Connection, private $authenticate?: Authenticate) {
		connection.unauthorized = async () => (await this.$authenticate?.(this)) ?? false
	}
	static create(url: string, token?: string | Authenticate) {
		const connection = Connection.open(url, typeof token == "string" ? token : undefined)
		return connection && new Client(connection, typeof token == "string" ? undefined : token)
	}
	assumeNew(orgCode: string) {
		const newClient = Client.create(this.connection.url, this.connection.token)
		newClient.connection.assumedOrg = orgCode
		return newClient
	}
}

export namespace Client {
	export type Accounts = ClientAccounts
	export type Auth = ClientAuth
	export type Beneficiaries = ClientBeneficiaries
	export type CardOptions = ClientCardOptions
	export type Cards = ClientCards
	export type CardTypes = ClientCardTypes
	export type Categories = ClientCategories
	export type Configuration = ClientConfiguration
	export type ConfirmationOfPayee = ClientConfirmationOfPayee
	export type Credentials = ClientCredentials
	export type Currency = ClientCurrency
	export type Email = ClientEmail
	export type Merchants = ClientMerchants
	export type Metadata = ClientMetadata
	export type Notifications = ClientNotifications
	export type Omnisetup = ClientOmnisetup
	export type Organisations = ClientOrganisations
	export type Payments = ClientPayments
	export type Reports = ClientReports
	export type Transfers = ClientTransfers
	export type Users = ClientUsers
	export type Rolesets = ClientRolesets
	export type ApiKeys = ClientApiKeys
	export type List<Response extends { [key: string]: any }> = ClientList<Response>
	export type Paginated<T> = ClientPaginated<T>
}
