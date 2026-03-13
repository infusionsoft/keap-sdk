# KeapCoreServiceV2Sdk.CreateFreeTrialDiscountRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the discount | 
**description** | **String** | Description of the discount | [optional] 
**criteria** | [**[DiscountCriteria]**](DiscountCriteria.md) | List of criteria that must be met for this discount to apply | [optional] 
**hidePrice** | **Boolean** | Whether to hide the price during the trial period | [optional] 
**subscriptionPlanId** | **String** | ID of the subscription plan this trial applies to | 
**freeTrialDays** | **Number** | Number of free trial days. Must be a positive number. Defaults to 0. | [optional] 


