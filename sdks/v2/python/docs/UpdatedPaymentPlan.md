# UpdatedPaymentPlan


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_charge** | **bool** |  | [optional] 
**days_between_payments** | **int** |  | [optional] 
**days_between_retries** | **int** |  | [optional] 
**initial_payment_amount** | **float** |  | [optional] 
**initial_payment_date** | **str** | ISO date of the initial payment in pay plan. e.g 2024-04-28 | [optional] 
**max_charge_attempts** | **int** |  | [optional] 
**number_of_payments** | **int** |  | [optional] 
**payment_method_id** | **str** |  | [optional] 
**plan_start_date** | **str** | ISO date of the start of pay plan. e.g 2024-04-28 | [optional] 

## Example

```python
from keap_core_v2_client.models.updated_payment_plan import UpdatedPaymentPlan

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatedPaymentPlan from a JSON string
updated_payment_plan_instance = UpdatedPaymentPlan.from_json(json)
# print the JSON string representation of the object
print(UpdatedPaymentPlan.to_json())

# convert the object into a dict
updated_payment_plan_dict = updated_payment_plan_instance.to_dict()
# create an instance of UpdatedPaymentPlan from a dict
updated_payment_plan_from_dict = UpdatedPaymentPlan.from_dict(updated_payment_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


