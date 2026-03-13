

# PaymentPlan


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**autoCharge** | **Boolean** | Whether to auto-charge payments |  [optional] |
|**maxChargeAttempts** | **Long** | Maximum charge attempts |  [optional] |
|**daysBetweenRetries** | **Long** | Days between retry attempts |  [optional] |
|**paymentMethodId** | **String** | Payment method ID to charge |  [optional] |
|**initialPaymentAmount** | [**CurrencyValue**](CurrencyValue.md) | Initial payment amount |  [optional] |
|**initialPaymentPercent** | **Double** | Initial payment as percentage |  [optional] |
|**initialPaymentDate** | **LocalDate** | The initial payment date. In ISO-8601 date format (e.g. 2024-05-21) |  [optional] |
|**planStartDate** | **LocalDate** | The start date of the payment plan. In ISO-8601 date format (e.g. 2024-05-21) |  |
|**numberOfPayments** | **Long** | Number of payments in the plan |  |
|**daysBetweenPayments** | **Long** | Days between each payment |  |
|**paymentPlanItems** | [**List&lt;PaymentPlanItem&gt;**](PaymentPlanItem.md) | List of scheduled payment items |  [optional] |


## Implemented Interfaces

* Serializable

