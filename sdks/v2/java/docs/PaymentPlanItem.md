

# PaymentPlanItem


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**status** | [**StatusEnum**](#StatusEnum) | The status of the payment plan item. Possible values are: - &#x60;UNPAID_MANUAL&#x60; - The item is set for manual charge, and its &#x60;amount_due&#x60; has not been completely paid. - &#x60;UNPAID_AUTOCHARGE&#x60; - The item is set for auto-charge, and its &#x60;amount_due&#x60; has not been completely paid. - &#x60;PAID&#x60; - The item has been completely paid. - &#x60;FAILED&#x60; - The item &#x60;amount_due&#x60; has not been completely paid, and there was a failure. (*Note: This status is deprecated and not currently used.*)  |  [optional] |
|**dueDate** | **LocalDate** | The due date in the application&#39;s timezone, as an ISO 8601 calendar date string (date only), in the format YYYY-MM-DD |  [optional] |
|**amountDue** | [**CurrencyValue**](CurrencyValue.md) |  |  [optional] |
|**amountPaid** | [**CurrencyValue**](CurrencyValue.md) |  |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| UNPAID_MANUAL | &quot;UNPAID_MANUAL&quot; |
| UNPAID_AUTOCHARGE | &quot;UNPAID_AUTOCHARGE&quot; |
| PAID | &quot;PAID&quot; |
| FAILED | &quot;FAILED&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

