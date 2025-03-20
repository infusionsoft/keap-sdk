# CreateLeadSourceExpenseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **str** | The monthly cost of this lead source recurring expense. The value should be in the smallest unit of currency for your currency locale. For example, if your currency locale is USD, then the smallest unit of currency is in cents, $225.50 would be provided in the request as 22550 | [optional] 
**incurred_time** | **str** | The time that this lead source expense was incurred. | [optional] 
**notes** | **str** | The notes for the lead source expense | [optional] 
**title** | **str** | The title of the lead source expense | [optional] 

## Example

```python
from keap_core_v2_client.models.create_lead_source_expense_request import CreateLeadSourceExpenseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateLeadSourceExpenseRequest from a JSON string
create_lead_source_expense_request_instance = CreateLeadSourceExpenseRequest.from_json(json)
# print the JSON string representation of the object
print(CreateLeadSourceExpenseRequest.to_json())

# convert the object into a dict
create_lead_source_expense_request_dict = create_lead_source_expense_request_instance.to_dict()
# create an instance of CreateLeadSourceExpenseRequest from a dict
create_lead_source_expense_request_from_dict = CreateLeadSourceExpenseRequest.from_dict(create_lead_source_expense_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


