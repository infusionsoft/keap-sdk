# KeapCoreServiceV2Sdk.UpdateAffiliateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | The Affiliate code which have some validations. 1. The code should not have white spaces 2. The code should starts with letters 3. The code minimum 2 characters length | [optional] 
**name** | **String** | The Affiliate name. | [optional] 
**status** | **String** | The Affiliate Status | [optional] 
**contactId** | **String** | The contactId identifier. Must be a positive number | [optional] 
**parentAffiliateId** | **String** | The Parent Affiliate Id | [optional] 
**notifyOnSale** | **Boolean** | Whether to notify on sale events | [optional] 
**notifyOnLead** | **Boolean** | Whether to notify on lead events | [optional] 
**trackLeadsDays** | **Number** | Number of days to track leads | [optional] 
**password** | **String** | Affiliate portal password. | [optional] 
**customFields** | [**[CustomFieldValue]**](CustomFieldValue.md) | List of custom field values to apply to this affiliate | [optional] 



## Enum: StatusEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `INACTIVE` (value: `"INACTIVE"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




