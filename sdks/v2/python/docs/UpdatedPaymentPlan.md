# UpdatedPaymentPlan


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_charge** | **bool** | Whether to auto-charge payments | [optional] 
**max_charge_attempts** | **int** | Maximum charge attempts | [optional] 
**days_between_retries** | **int** | Days between retry attempts | [optional] 
**payment_method_id** | **str** | Payment method ID | [optional] 
**initial_payment_amount** | **float** | Initial payment amount | [optional] 
**initial_payment_date** | **date** | ISO date of the initial payment in pay plan | [optional] 
**plan_start_date** | **date** | ISO date of the start of pay plan | [optional] 
**number_of_payments** | **int** | Number of payments in the plan | [optional] 
**days_between_payments** | **int** | Days between each payment | [optional] 

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


