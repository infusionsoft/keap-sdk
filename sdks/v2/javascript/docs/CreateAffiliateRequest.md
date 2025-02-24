# KeapCoreServiceV2Sdk.CreateAffiliateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | The Affiliate code which have some validations. 1. The code should not have white spaces 2. The code should starts with letters 3. The code minimum 4 characters length | 
**contactId** | **String** | The contactId identifier , Must be a positive number | 
**name** | **String** | The Affiliate name will be derived from the Contact, when not explicitly provided | [optional] 
**status** | **String** | The Affiliate Status | 



## Enum: StatusEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `INACTIVE` (value: `"INACTIVE"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




