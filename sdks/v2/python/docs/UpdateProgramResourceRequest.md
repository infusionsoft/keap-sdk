# UpdateProgramResourceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** | The program resource title | [optional] 
**notes** | **str** | The resource notes. | [optional] 
**url** | **str** | The URL to the resource. | [optional] 
**order** | **int** | The order in which the resource is displayed. Minimum value is 0. Lower values indicate higher priority. | [optional] 
**content_html** | **str** | The contents of the PAGE or EMAIL. In HTML format. | [optional] 
**page_width** | **int** | The width of the page for PAGE types, in pixels. Minimum value is 0. | [optional] 
**page_height** | **int** | The height of the page for PAGE types, in pixels. Minimum value is 0. | [optional] 
**commission_program_ids** | **List[str]** | A list of commission program ids to use this resource. The values in this list will replace the existing list of commission program ids. | [optional] 

## Example

```python
from keap_core_v2_client.models.update_program_resource_request import UpdateProgramResourceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateProgramResourceRequest from a JSON string
update_program_resource_request_instance = UpdateProgramResourceRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateProgramResourceRequest.to_json())

# convert the object into a dict
update_program_resource_request_dict = update_program_resource_request_instance.to_dict()
# create an instance of UpdateProgramResourceRequest from a dict
update_program_resource_request_from_dict = UpdateProgramResourceRequest.from_dict(update_program_resource_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


