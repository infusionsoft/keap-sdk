# BatchUnpublishAutomationRequest

Request to unpublish multiple automations at once

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automation_ids** | **List[str]** | List of automation IDs to unpublish | 
**unpublished_form_message** | **str** | Custom message to display on forms when the automation is unpublished | [optional] 

## Example

```python
from keap_core_v2_client.models.batch_unpublish_automation_request import BatchUnpublishAutomationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUnpublishAutomationRequest from a JSON string
batch_unpublish_automation_request_instance = BatchUnpublishAutomationRequest.from_json(json)
# print the JSON string representation of the object
print(BatchUnpublishAutomationRequest.to_json())

# convert the object into a dict
batch_unpublish_automation_request_dict = batch_unpublish_automation_request_instance.to_dict()
# create an instance of BatchUnpublishAutomationRequest from a dict
batch_unpublish_automation_request_from_dict = BatchUnpublishAutomationRequest.from_dict(batch_unpublish_automation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


