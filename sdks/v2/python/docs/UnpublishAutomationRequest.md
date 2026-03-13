# UnpublishAutomationRequest

Request to unpublish a single automation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unpublished_form_message** | **str** | Custom message to display on forms when the automation is unpublished | [optional] 

## Example

```python
from keap_core_v2_client.models.unpublish_automation_request import UnpublishAutomationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UnpublishAutomationRequest from a JSON string
unpublish_automation_request_instance = UnpublishAutomationRequest.from_json(json)
# print the JSON string representation of the object
print(UnpublishAutomationRequest.to_json())

# convert the object into a dict
unpublish_automation_request_dict = unpublish_automation_request_instance.to_dict()
# create an instance of UnpublishAutomationRequest from a dict
unpublish_automation_request_from_dict = UnpublishAutomationRequest.from_dict(unpublish_automation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


