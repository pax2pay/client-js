import { ApprovalNotification as TApprovalNotification } from "./ApprovalNotification"
import { CardDeliveryEmail as TCardDeliveryEmail } from "./CardDeliveryEmail"
import { CardTypes as CCardTypes } from "./CardTypes"
import { ForcedSettlementNotification as CForcedSettlementNotification } from "./ForcedSettlementNotification"
import { FraudEmail as CFraudEmail } from "./FraudEmail"
import { FundingAccountInboundTransferNotification as CFundingAccountInboundTransferNotification } from "./FundingAccountInboundTransferNotification"
import { FundingLimit as TFundingLimit } from "./FundingLimit"
import { InternalOrganisation as CInternalOrganisation } from "./InternalOrganisation"
import { Organisation as COrganisation } from "./Organisation"
import { Security as CSecurity } from "./Security"
import { SsoProvider as CSsoProvider } from "./SsoProvider"
import { User as CUser } from "./User"

export namespace Config {
	export import Organisation = COrganisation
	export import InternalOrganisation = CInternalOrganisation
	export import User = CUser

	export import ApprovalNotification = TApprovalNotification
	export import CardDeliveryEmail = TCardDeliveryEmail
	export import CardTypes = CCardTypes
	export import ForcedSettlementNotification = CForcedSettlementNotification
	export import FraudEmail = CFraudEmail
	export import FundingAccountInboundTransferNotification = CFundingAccountInboundTransferNotification
	export import FundingLimit = TFundingLimit
	export import SsoProvider = CSsoProvider
	export import Security = CSecurity
}
