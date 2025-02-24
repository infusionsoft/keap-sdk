# CreateLeadSourceRecurringExpenseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | The monthly cost of this lead source recurring expense. The value should be in the smallest unit of currency for your currency locale. For example, if your currency locale is USD, then the smallest unit of currency is in cents, $225.50 would be provided in the request as 22550 | [optional] 
**end_time** | **str** | The time this lead source recurring expense ends | [optional] 
**notes** | **str** | The notes for the lead source recurring expense | [optional] 
**start_time** | **str** | The time this lead source recurring expense starts | [optional] 
**title** | **str** | The title of the lead source recurring expense | [optional] 

## Example

```python
from keap_core_v2_client.models.create_lead_source_recurring_expense_request import CreateLeadSourceRecurringExpenseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateLeadSourceRecurringExpenseRequest from a JSON string
create_lead_source_recurring_expense_request_instance = CreateLeadSourceRecurringExpenseRequest.from_json(json)
# print the JSON string representation of the object
print(CreateLeadSourceRecurringExpenseRequest.to_json())

# convert the object into a dict
create_lead_source_recurring_expense_request_dict = create_lead_source_recurring_expense_request_instance.to_dict()
# create an instance of CreateLeadSourceRecurringExpenseRequest from a dict
create_lead_source_recurring_expense_request_from_dict = CreateLeadSourceRecurringExpenseRequest.from_dict(create_lead_source_recurring_expense_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


