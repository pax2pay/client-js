import { ApprovalNotification as TApprovalNotification } from "./ApprovalNotification"
import { CardDeliveryEmail as TCardDeliveryEmail } from "./CardDeliveryEmail"
import { CardTypes as TCardTypes } from "./CardTypes"
import { ForcedSettlementNotification as TForcedSettlementNotification } from "./ForcedSettlementNotification"
import { FraudEmail as TFraudEmail } from "./FraudEmail"
import { FundingAccountInboundTransferNotification as TFundingAccountInboundTransferNotification } from "./FundingAccountInboundTransferNotification"
import { FundingLimit as TFundingLimit } from "./FundingLimit"
import { SsoProvider as TSsoProvider } from "./SsoProvider"

export namespace Types {
	export import ApprovalNotification = TApprovalNotification
	export import CardDeliveryEmail = TCardDeliveryEmail
	export import CardTypes = TCardTypes
	export import ForcedSettlementNotification = TForcedSettlementNotification
	export import FraudEmail = TFraudEmail
	export import FundingAccountInboundTransferNotification = TFundingAccountInboundTransferNotification
	export import FundingLimit = TFundingLimit
	export import SsoProvider = TSsoProvider
}
