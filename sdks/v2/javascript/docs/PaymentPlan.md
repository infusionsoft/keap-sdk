# KeapCoreServiceV2Sdk.PaymentPlan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoCharge** | **Boolean** | Whether to auto-charge payments | [optional] 
**maxChargeAttempts** | **Number** | Maximum charge attempts | [optional] 
**daysBetweenRetries** | **Number** | Days between retry attempts | [optional] 
**paymentMethodId** | **String** | Payment method ID to charge | [optional] 
**initialPaymentAmount** | [**CurrencyValue**](CurrencyValue.md) | Initial payment amount | [optional] 
**initialPaymentPercent** | **Number** | Initial payment as percentage | [optional] 
**initialPaymentDate** | **Date** | The initial payment date. In ISO-8601 date format (e.g. 2024-05-21) | [optional] 
**planStartDate** | **Date** | The start date of the payment plan. In ISO-8601 date format (e.g. 2024-05-21) | 
**numberOfPayments** | **Number** | Number of payments in the plan | 
**daysBetweenPayments** | **Number** | Days between each payment | 
**paymentPlanItems** | [**[PaymentPlanItem]**](PaymentPlanItem.md) | List of scheduled payment items | [optional] 


