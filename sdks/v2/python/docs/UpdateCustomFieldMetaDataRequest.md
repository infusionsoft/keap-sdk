# UpdateCustomFieldMetaDataRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_id** | **str** |  | 
**label** | **str** |  | [optional] 
**options** | [**List[CustomFieldOption]**](CustomFieldOption.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.update_custom_field_meta_data_request import UpdateCustomFieldMetaDataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCustomFieldMetaDataRequest from a JSON string
update_custom_field_meta_data_request_instance = UpdateCustomFieldMetaDataRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateCustomFieldMetaDataRequest.to_json())

# convert the object into a dict
update_custom_field_meta_data_request_dict = update_custom_field_meta_data_request_instance.to_dict()
# create an instance of UpdateCustomFieldMetaDataRequest from a dict
update_custom_field_meta_data_request_from_dict = UpdateCustomFieldMetaDataRequest.from_dict(update_custom_field_meta_data_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


