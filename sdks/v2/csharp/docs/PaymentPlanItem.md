# Keap.Core.V2.Model.PaymentPlanItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **string** | The status of the payment plan item. Possible values are: - &#x60;UNPAID_MANUAL&#x60; - The item is set for manual charge, and its &#x60;amount_due&#x60; has not been completely paid. - &#x60;UNPAID_AUTOCHARGE&#x60; - The item is set for auto-charge, and its &#x60;amount_due&#x60; has not been completely paid. - &#x60;PAID&#x60; - The item has been completely paid. - &#x60;FAILED&#x60; - The item &#x60;amount_due&#x60; has not been completely paid, and there was a failure. (*Note: This status is deprecated and not currently used.*)  | [optional] 
**DueDate** | **DateOnly** | The due date in the application&#39;s timezone, as an ISO 8601 calendar date string (date only), in the format YYYY-MM-DD | [optional] 
**AmountDue** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**AmountPaid** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

