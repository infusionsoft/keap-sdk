# ListLeadSourceExpensesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lead_source_expenses** | [**List[LeadSourceExpense]**](LeadSourceExpense.md) | The lead source expenses in the current page | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_lead_source_expenses_response import ListLeadSourceExpensesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListLeadSourceExpensesResponse from a JSON string
list_lead_source_expenses_response_instance = ListLeadSourceExpensesResponse.from_json(json)
# print the JSON string representation of the object
print(ListLeadSourceExpensesResponse.to_json())

# convert the object into a dict
list_lead_source_expenses_response_dict = list_lead_source_expenses_response_instance.to_dict()
# create an instance of ListLeadSourceExpensesResponse from a dict
list_lead_source_expenses_response_from_dict = ListLeadSourceExpensesResponse.from_dict(list_lead_source_expenses_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


