# KeapCoreServiceV2Sdk.CategoryDiscountCriteriaResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of criteria: DATE_RANGE or PROMO_CODE | [optional] 
**code** | **String** | Promotional code for PROMO_CODE criteria | [optional] 
**criteriaId** | **String** | Unique identifier for this criteria | [optional] 
**rangeStartTime** | **Date** | Start date/time for DATE_RANGE criteria (ISO-8601 format) | [optional] 
**rangeEndTime** | **Date** | End date/time for DATE_RANGE criteria (ISO-8601 format) | [optional] 



## Enum: TypeEnum


* `DATE_RANGE` (value: `"DATE_RANGE"`)

* `PROMO_CODE` (value: `"PROMO_CODE"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




