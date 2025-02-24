# CreateCustomFieldResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_field** | [**CustomFieldMetaData**](CustomFieldMetaData.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.create_custom_field_response import CreateCustomFieldResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCustomFieldResponse from a JSON string
create_custom_field_response_instance = CreateCustomFieldResponse.from_json(json)
# print the JSON string representation of the object
print(CreateCustomFieldResponse.to_json())

# convert the object into a dict
create_custom_field_response_dict = create_custom_field_response_instance.to_dict()
# create an instance of CreateCustomFieldResponse from a dict
create_custom_field_response_from_dict = CreateCustomFieldResponse.from_dict(create_custom_field_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


