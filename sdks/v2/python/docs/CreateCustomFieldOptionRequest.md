# CreateCustomFieldOptionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** |  | [optional] 
**options** | [**List[CreateCustomFieldOptionRequest]**](CreateCustomFieldOptionRequest.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.create_custom_field_option_request import CreateCustomFieldOptionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCustomFieldOptionRequest from a JSON string
create_custom_field_option_request_instance = CreateCustomFieldOptionRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCustomFieldOptionRequest.to_json())

# convert the object into a dict
create_custom_field_option_request_dict = create_custom_field_option_request_instance.to_dict()
# create an instance of CreateCustomFieldOptionRequest from a dict
create_custom_field_option_request_from_dict = CreateCustomFieldOptionRequest.from_dict(create_custom_field_option_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


