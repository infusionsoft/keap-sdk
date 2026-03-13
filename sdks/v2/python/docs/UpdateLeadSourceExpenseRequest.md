# UpdateLeadSourceExpenseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** | The title of the lead source expense | [optional] 
**notes** | **str** | The notes for the lead source expense | [optional] 
**amount** | **int** | The cost of the lead source expense. The value should be in the smallest unit of currency for your currency locale. For example, if your currency locale is USD, then the smallest unit of currency is in cents, $225.50 would be provided in the request as 22550. | [optional] 
**incurred_time** | **datetime** | The time that the lead source expense was incurred. | [optional] 

## Example

```python
from keap_core_v2_client.models.update_lead_source_expense_request import UpdateLeadSourceExpenseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateLeadSourceExpenseRequest from a JSON string
update_lead_source_expense_request_instance = UpdateLeadSourceExpenseRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateLeadSourceExpenseRequest.to_json())

# convert the object into a dict
update_lead_source_expense_request_dict = update_lead_source_expense_request_instance.to_dict()
# create an instance of UpdateLeadSourceExpenseRequest from a dict
update_lead_source_expense_request_from_dict = UpdateLeadSourceExpenseRequest.from_dict(update_lead_source_expense_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


