# CreateLeadSourceExpenseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **str** |  | [optional] 
**incurred_time** | **str** |  | [optional] 
**notes** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

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


