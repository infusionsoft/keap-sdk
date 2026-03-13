# PaymentPlanItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | The status of the payment plan item. Possible values are: - &#x60;UNPAID_MANUAL&#x60; - The item is set for manual charge, and its &#x60;amount_due&#x60; has not been completely paid. - &#x60;UNPAID_AUTOCHARGE&#x60; - The item is set for auto-charge, and its &#x60;amount_due&#x60; has not been completely paid. - &#x60;PAID&#x60; - The item has been completely paid. - &#x60;FAILED&#x60; - The item &#x60;amount_due&#x60; has not been completely paid, and there was a failure. (*Note: This status is deprecated and not currently used.*)  | [optional] 
**due_date** | **date** | The due date in the application&#39;s timezone, as an ISO 8601 calendar date string (date only), in the format YYYY-MM-DD | [optional] 
**amount_due** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**amount_paid** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.payment_plan_item import PaymentPlanItem

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentPlanItem from a JSON string
payment_plan_item_instance = PaymentPlanItem.from_json(json)
# print the JSON string representation of the object
print(PaymentPlanItem.to_json())

# convert the object into a dict
payment_plan_item_dict = payment_plan_item_instance.to_dict()
# create an instance of PaymentPlanItem from a dict
payment_plan_item_from_dict = PaymentPlanItem.from_dict(payment_plan_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


