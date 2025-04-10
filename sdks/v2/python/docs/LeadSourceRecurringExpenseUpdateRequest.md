# LeadSourceRecurringExpenseUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | The monthly cost of the lead source recurring expense.  The value should be in the smallest unit of currency for your currency locale.  For example, if your currency locale is USD, then the smallest unit of currency is  in cents, $225.50 would be provided in the request as 22550. | [optional] 
**end_time** | **str** | The time the lead source recurring expense ends | [optional] 
**notes** | **str** | The notes for the lead source recurring expense | [optional] 
**start_time** | **str** | The time the lead source recurring expense starts | [optional] 
**title** | **str** | The title of the lead source recurring expense | [optional] 

## Example

```python
from keap_core_v2_client.models.lead_source_recurring_expense_update_request import LeadSourceRecurringExpenseUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LeadSourceRecurringExpenseUpdateRequest from a JSON string
lead_source_recurring_expense_update_request_instance = LeadSourceRecurringExpenseUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(LeadSourceRecurringExpenseUpdateRequest.to_json())

# convert the object into a dict
lead_source_recurring_expense_update_request_dict = lead_source_recurring_expense_update_request_instance.to_dict()
# create an instance of LeadSourceRecurringExpenseUpdateRequest from a dict
lead_source_recurring_expense_update_request_from_dict = LeadSourceRecurringExpenseUpdateRequest.from_dict(lead_source_recurring_expense_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


