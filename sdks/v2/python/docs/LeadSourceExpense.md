# LeadSourceExpense


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**create_time** | **str** | The date the expense was created. | [optional] 
**id** | **str** | The unique identifier for the expense. | [optional] 
**incurred_time** | **str** | The date the expense was incurred. | [optional] 
**notes** | **str** | The notes for the expense. | [optional] 
**title** | **str** | The title of the expense. | [optional] 
**update_time** | **str** | The date the expense was last updated. | [optional] 

## Example

```python
from keap_core_v2_client.models.lead_source_expense import LeadSourceExpense

# TODO update the JSON string below
json = "{}"
# create an instance of LeadSourceExpense from a JSON string
lead_source_expense_instance = LeadSourceExpense.from_json(json)
# print the JSON string representation of the object
print(LeadSourceExpense.to_json())

# convert the object into a dict
lead_source_expense_dict = lead_source_expense_instance.to_dict()
# create an instance of LeadSourceExpense from a dict
lead_source_expense_from_dict = LeadSourceExpense.from_dict(lead_source_expense_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


