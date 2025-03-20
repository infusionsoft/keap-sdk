# PaymentPlan


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_charge** | **bool** |  | [optional] 
**days_between_payments** | **int** |  | 
**days_between_retries** | **int** |  | [optional] 
**initial_payment_amount** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**initial_payment_date** | **str** |  | [optional] 
**initial_payment_percent** | **float** |  | [optional] 
**max_charge_attempts** | **int** |  | [optional] 
**number_of_payments** | **int** |  | 
**payment_method_id** | **str** |  | [optional] 
**plan_start_date** | **str** |  | 

## Example

```python
from keap_core_v2_client.models.payment_plan import PaymentPlan

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentPlan from a JSON string
payment_plan_instance = PaymentPlan.from_json(json)
# print the JSON string representation of the object
print(PaymentPlan.to_json())

# convert the object into a dict
payment_plan_dict = payment_plan_instance.to_dict()
# create an instance of PaymentPlan from a dict
payment_plan_from_dict = PaymentPlan.from_dict(payment_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


