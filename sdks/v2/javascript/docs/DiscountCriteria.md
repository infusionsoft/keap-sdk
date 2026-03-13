# KeapCoreServiceV2Sdk.DiscountCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of criteria: DATE_RANGE, PROMO_CODE, PRODUCT, SUBSCRIPTION_PLAN, or ORDER_TOTAL | [optional] 
**code** | **String** | Promotional code for PROMO_CODE criteria | [optional] 
**criteriaId** | **String** | Unique identifier for this criteria | [optional] 
**rangeStartTime** | **Date** | Start date/time for DATE_RANGE criteria (ISO-8601 format) | [optional] 
**rangeEndTime** | **Date** | End date/time for DATE_RANGE criteria (ISO-8601 format) | [optional] 
**productId** | **String** | Product ID for PRODUCT criteria | [optional] 
**productQuantityMin** | **Number** | Minimum product quantity for PRODUCT criteria | [optional] 
**productQuantityMax** | **Number** | Maximum product quantity for PRODUCT criteria | [optional] 
**planId** | **String** | Subscription plan ID for SUBSCRIPTION_PLAN criteria | [optional] 
**subscriptionQuantity** | **Number** | Subscription quantity for SUBSCRIPTION_PLAN criteria | [optional] 
**totalAmount** | **Number** | Total amount threshold for ORDER_TOTAL criteria | [optional] 
**operator** | **String** | Comparison operator for ORDER_TOTAL criteria: LESS_THAN or GREATER_THAN | [optional] 



## Enum: TypeEnum


* `DATE_RANGE` (value: `"DATE_RANGE"`)

* `PROMO_CODE` (value: `"PROMO_CODE"`)

* `PRODUCT` (value: `"PRODUCT"`)

* `SUBSCRIPTION_PLAN` (value: `"SUBSCRIPTION_PLAN"`)

* `ORDER_TOTAL` (value: `"ORDER_TOTAL"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)





## Enum: OperatorEnum


* `LESS_THAN` (value: `"LESS_THAN"`)

* `GREATER_THAN` (value: `"GREATER_THAN"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




