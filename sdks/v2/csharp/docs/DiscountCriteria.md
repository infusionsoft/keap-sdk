# Keap.Core.V2.Model.DiscountCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Type of criteria: DATE_RANGE, PROMO_CODE, PRODUCT, SUBSCRIPTION_PLAN, or ORDER_TOTAL | [optional] 
**Code** | **string** | Promotional code for PROMO_CODE criteria | [optional] 
**CriteriaId** | **string** | Unique identifier for this criteria | [optional] 
**RangeStartTime** | **DateTime** | Start date/time for DATE_RANGE criteria (ISO-8601 format) | [optional] 
**RangeEndTime** | **DateTime** | End date/time for DATE_RANGE criteria (ISO-8601 format) | [optional] 
**ProductId** | **string** | Product ID for PRODUCT criteria | [optional] 
**ProductQuantityMin** | **int** | Minimum product quantity for PRODUCT criteria | [optional] 
**ProductQuantityMax** | **int** | Maximum product quantity for PRODUCT criteria | [optional] 
**PlanId** | **string** | Subscription plan ID for SUBSCRIPTION_PLAN criteria | [optional] 
**SubscriptionQuantity** | **int** | Subscription quantity for SUBSCRIPTION_PLAN criteria | [optional] 
**TotalAmount** | **double** | Total amount threshold for ORDER_TOTAL criteria | [optional] 
**Operator** | **string** | Comparison operator for ORDER_TOTAL criteria: LESS_THAN or GREATER_THAN | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

