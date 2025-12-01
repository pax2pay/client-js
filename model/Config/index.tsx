import { Organisation as COrganisation } from "./Organisation"
import { Types as CTypes } from "./Types"

export namespace Config {
	export import Organisation = COrganisation // TODO
	// export import InternalOrganisation = CInternalOrganisation
	// export import User = CUser
	// export import InternalUser = CInternalUser

	export import Types = CTypes
}
