import { LoginRequest as AuthenticationLoginRequest } from "./LoginRequest"
import { LoginResponse as AuthenticationLoginResponse } from "./LoginResponse"
import { PasswordChangeRequest as AuthenticationPasswordChangeRequest } from "./PasswordChangeRequest"
import { PasswordValidateRequest as AuthenticationPasswordValidateRequest } from "./PasswordValidateRequest"
import { PasswordValidateResponse as AuthenticationPasswordValidateResponse } from "./PasswordValidateResponse"
import { RelogWithNewSessionDetailsRequest as AuthenticationRelogWithNewSessionDetailsRequest } from "./RelogWithNewSessionDetailsRequest"
import { TwoFactorAuthenticationDetails as AuthenticationTwoFactorAuthenticationDetails } from "./TwoFactorAuthenticationDetails"
import { TwoFactorAuthenticationRegistrationResponse as AuthenticationTwoFactorAuthenticationRegistrationResponse } from "./TwoFactorAuthenticationRegistrationResponse"

export namespace Authentication {
	export type LoginRequest = AuthenticationLoginRequest
	export type LoginResponse = AuthenticationLoginResponse
	export type PasswordChangeRequest = AuthenticationPasswordChangeRequest
	export type PasswordValidateRequest = AuthenticationPasswordValidateRequest
	export type PasswordValidateResponse = AuthenticationPasswordValidateResponse
	export type RelogWithNewSessionDetailsRequest = AuthenticationRelogWithNewSessionDetailsRequest
	export type TwoFactorAuthenticationDetails = AuthenticationTwoFactorAuthenticationDetails
	export type TwoFactorAuthenticationRegistrationResponse = AuthenticationTwoFactorAuthenticationRegistrationResponse
}
