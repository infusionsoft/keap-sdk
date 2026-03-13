# KeapCoreServiceV2Sdk.RestEmailAddressStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | The email address | 
**optedIn** | **Boolean** | Whether the email address is opted in for marketing | 
**status** | **String** | The opt-in status of the email address | 
**createTime** | **Date** | When the email status was first recorded, in ISO-8601 format | 
**lastClickTime** | **Date** | The most recent click on an email sent to this address, in ISO-8601 format | [optional] 
**lastOpenTime** | **Date** | The most recent open of an email sent to this address, in ISO-8601 format | [optional] 
**lastSentTime** | **Date** | The most recent time an email was sent to this address, in ISO-8601 format | [optional] 



## Enum: StatusEnum


* `UNENGAGED_MARKETABLE` (value: `"UNENGAGED_MARKETABLE"`)

* `SINGLE_OPT_IN` (value: `"SINGLE_OPT_IN"`)

* `DOUBLE_OPT_IN` (value: `"DOUBLE_OPT_IN"`)

* `CONFIRMED` (value: `"CONFIRMED"`)

* `UNENGAGED_NON_MARKETABLE` (value: `"UNENGAGED_NON_MARKETABLE"`)

* `NON_MARKETABLE` (value: `"NON_MARKETABLE"`)

* `LOCKDOWN` (value: `"LOCKDOWN"`)

* `BOUNCE` (value: `"BOUNCE"`)

* `HARD_BOUNCE` (value: `"HARD_BOUNCE"`)

* `MANUAL` (value: `"MANUAL"`)

* `ADMIN` (value: `"ADMIN"`)

* `SYSTEM` (value: `"SYSTEM"`)

* `LIST_UNSUBSCRIBE` (value: `"LIST_UNSUBSCRIBE"`)

* `FEEDBACK` (value: `"FEEDBACK"`)

* `SPAM` (value: `"SPAM"`)

* `INVALID` (value: `"INVALID"`)

* `DEACTIVATED` (value: `"DEACTIVATED"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




