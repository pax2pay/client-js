import { InternalOrganisation as CInternalOrganisation } from "./InternalOrganisation"
import { Organisation as COrganisation } from "./Organisation"
import { Types as CTypes } from "./Types"
import { User as CUser } from "./User"

export namespace Config {
	export import Organisation = COrganisation // TODO
	export import InternalOrganisation = CInternalOrganisation
	export import User = CUser

	export import Types = CTypes
}
