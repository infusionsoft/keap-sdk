# Keap.Core.V2.Model.PaymentPlan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoCharge** | **bool** | Whether to auto-charge payments | [optional] 
**MaxChargeAttempts** | **long** | Maximum charge attempts | [optional] 
**DaysBetweenRetries** | **long** | Days between retry attempts | [optional] 
**PaymentMethodId** | **string** | Payment method ID to charge | [optional] 
**InitialPaymentAmount** | [**CurrencyValue**](CurrencyValue.md) | Initial payment amount | [optional] 
**InitialPaymentPercent** | **double** | Initial payment as percentage | [optional] 
**InitialPaymentDate** | **DateOnly** | The initial payment date. In ISO-8601 date format (e.g. 2024-05-21) | [optional] 
**PlanStartDate** | **DateOnly** | The start date of the payment plan. In ISO-8601 date format (e.g. 2024-05-21) | 
**NumberOfPayments** | **long** | Number of payments in the plan | 
**DaysBetweenPayments** | **long** | Days between each payment | 
**PaymentPlanItems** | [**List&lt;PaymentPlanItem&gt;**](PaymentPlanItem.md) | List of scheduled payment items | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

