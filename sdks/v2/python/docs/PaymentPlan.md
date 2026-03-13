# PaymentPlan


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_charge** | **bool** | Whether to auto-charge payments | [optional] 
**max_charge_attempts** | **int** | Maximum charge attempts | [optional] 
**days_between_retries** | **int** | Days between retry attempts | [optional] 
**payment_method_id** | **str** | Payment method ID to charge | [optional] 
**initial_payment_amount** | [**CurrencyValue**](CurrencyValue.md) | Initial payment amount | [optional] 
**initial_payment_percent** | **float** | Initial payment as percentage | [optional] 
**initial_payment_date** | **date** | The initial payment date. In ISO-8601 date format (e.g. 2024-05-21) | [optional] 
**plan_start_date** | **date** | The start date of the payment plan. In ISO-8601 date format (e.g. 2024-05-21) | 
**number_of_payments** | **int** | Number of payments in the plan | 
**days_between_payments** | **int** | Days between each payment | 
**payment_plan_items** | [**List[PaymentPlanItem]**](PaymentPlanItem.md) | List of scheduled payment items | [optional] 

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


