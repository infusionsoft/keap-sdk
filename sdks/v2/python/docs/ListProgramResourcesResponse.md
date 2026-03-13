# ListProgramResourcesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resources** | [**List[AffiliateProgramResource]**](AffiliateProgramResource.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_program_resources_response import ListProgramResourcesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListProgramResourcesResponse from a JSON string
list_program_resources_response_instance = ListProgramResourcesResponse.from_json(json)
# print the JSON string representation of the object
print(ListProgramResourcesResponse.to_json())

# convert the object into a dict
list_program_resources_response_dict = list_program_resources_response_instance.to_dict()
# create an instance of ListProgramResourcesResponse from a dict
list_program_resources_response_from_dict = ListProgramResourcesResponse.from_dict(list_program_resources_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


