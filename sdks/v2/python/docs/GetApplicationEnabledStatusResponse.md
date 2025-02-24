# GetApplicationEnabledStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.get_application_enabled_status_response import GetApplicationEnabledStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetApplicationEnabledStatusResponse from a JSON string
get_application_enabled_status_response_instance = GetApplicationEnabledStatusResponse.from_json(json)
# print the JSON string representation of the object
print(GetApplicationEnabledStatusResponse.to_json())

# convert the object into a dict
get_application_enabled_status_response_dict = get_application_enabled_status_response_instance.to_dict()
# create an instance of GetApplicationEnabledStatusResponse from a dict
get_application_enabled_status_response_from_dict = GetApplicationEnabledStatusResponse.from_dict(get_application_enabled_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


