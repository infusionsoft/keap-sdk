# Keap.Core.V2.Model.CreateFreeTrialDiscountRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the discount | 
**Description** | **string** | Description of the discount | [optional] 
**Criteria** | [**List&lt;DiscountCriteria&gt;**](DiscountCriteria.md) | List of criteria that must be met for this discount to apply | [optional] 
**HidePrice** | **bool** | Whether to hide the price during the trial period | [optional] 
**SubscriptionPlanId** | **string** | ID of the subscription plan this trial applies to | 
**FreeTrialDays** | **int** | Number of free trial days. Must be a positive number. Defaults to 0. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

