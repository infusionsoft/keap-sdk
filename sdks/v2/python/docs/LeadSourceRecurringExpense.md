# LeadSourceRecurringExpense


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**create_time** | **str** | The time this lead source recurring expense was created | [optional] 
**end_time** | **str** | The time this lead source recurring expense end | [optional] 
**id** | **str** | ID of the lead source recurring expense | [optional] 
**next_expense_time** | **str** | The time this lead source recurring expense will incur a new expense | [optional] 
**notes** | **str** | The notes for the lead source recurring expense | [optional] 
**start_time** | **str** | The time this lead source recurring expense starts | [optional] 
**title** | **str** | The title of the lead source recurring expense | [optional] 
**update_time** | **str** | The time this lead source recurring expense was last updated | [optional] 

## Example

```python
from keap_core_v2_client.models.lead_source_recurring_expense import LeadSourceRecurringExpense

# TODO update the JSON string below
json = "{}"
# create an instance of LeadSourceRecurringExpense from a JSON string
lead_source_recurring_expense_instance = LeadSourceRecurringExpense.from_json(json)
# print the JSON string representation of the object
print(LeadSourceRecurringExpense.to_json())

# convert the object into a dict
lead_source_recurring_expense_dict = lead_source_recurring_expense_instance.to_dict()
# create an instance of LeadSourceRecurringExpense from a dict
lead_source_recurring_expense_from_dict = LeadSourceRecurringExpense.from_dict(lead_source_recurring_expense_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


