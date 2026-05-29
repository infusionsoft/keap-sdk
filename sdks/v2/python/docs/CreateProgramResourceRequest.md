# CreateProgramResourceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** | The program resource title | 
**type** | **str** | The type of resource | 
**notes** | **str** | The resource notes. | [optional] 
**url** | **str** | The URL to the resource. | [optional] 
**order** | **int** | The order in which the resource is displayed. Minimum value is 0. Defaults to 0. Lower values indicate higher priority. | [optional] 
**content_html** | **str** | The contents of the PAGE or EMAIL. In HTML format. | [optional] 
**page_width** | **int** | The width of the page for PAGE types, in pixels. Minimum value is 0. Defaults to 0 | [optional] 
**page_height** | **int** | The height of the page for PAGE types, in pixels. Minimum value is 0. Defaults to 0 | [optional] 
**commission_program_ids** | **List[str]** | A list of commission program ids that will use this resource. | 

## Example

```python
from keap_core_v2_client.models.create_program_resource_request import CreateProgramResourceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateProgramResourceRequest from a JSON string
create_program_resource_request_instance = CreateProgramResourceRequest.from_json(json)
# print the JSON string representation of the object
print(CreateProgramResourceRequest.to_json())

# convert the object into a dict
create_program_resource_request_dict = create_program_resource_request_instance.to_dict()
# create an instance of CreateProgramResourceRequest from a dict
create_program_resource_request_from_dict = CreateProgramResourceRequest.from_dict(create_program_resource_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


