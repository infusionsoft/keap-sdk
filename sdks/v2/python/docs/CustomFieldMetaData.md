# CustomFieldMetaData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value** | **str** |  | [optional] 
**field_name** | **str** |  | [optional] 
**field_type** | **str** |  | [optional] 
**group_id** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**label** | **str** |  | [optional] 
**options** | [**List[CustomFieldOption]**](CustomFieldOption.md) |  | [optional] 
**record_type** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.custom_field_meta_data import CustomFieldMetaData

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldMetaData from a JSON string
custom_field_meta_data_instance = CustomFieldMetaData.from_json(json)
# print the JSON string representation of the object
print(CustomFieldMetaData.to_json())

# convert the object into a dict
custom_field_meta_data_dict = custom_field_meta_data_instance.to_dict()
# create an instance of CustomFieldMetaData from a dict
custom_field_meta_data_from_dict = CustomFieldMetaData.from_dict(custom_field_meta_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


