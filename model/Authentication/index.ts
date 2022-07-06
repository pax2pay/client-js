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
	export const LoginRequest = AuthenticationLoginRequest
	export type LoginResponse = AuthenticationLoginResponse
	export const LoginResponse = AuthenticationLoginResponse
	export type PasswordChangeRequest = AuthenticationPasswordChangeRequest
	export const PasswordChangeRequest = AuthenticationPasswordChangeRequest
	export type PasswordValidateRequest = AuthenticationPasswordValidateRequest
	export const PasswordValidateRequest = AuthenticationPasswordValidateRequest
	export type PasswordValidateResponse = AuthenticationPasswordValidateResponse
	export const PasswordValidateResponse = AuthenticationPasswordValidateResponse
	export type RelogWithNewSessionDetailsRequest = AuthenticationRelogWithNewSessionDetailsRequest
	export const RelogWithNewSessionDetailsRequest = AuthenticationRelogWithNewSessionDetailsRequest
	export type TwoFactorAuthenticationDetails = AuthenticationTwoFactorAuthenticationDetails
	export const TwoFactorAuthenticationDetails = AuthenticationTwoFactorAuthenticationDetails
	export type TwoFactorAuthenticationRegistrationResponse = AuthenticationTwoFactorAuthenticationRegistrationResponse
	export const TwoFactorAuthenticationRegistrationResponse = AuthenticationTwoFactorAuthenticationRegistrationResponse
}
