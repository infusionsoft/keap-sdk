# CustomFieldMetaData

Metadata describing a custom field, including its type and options

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier of the custom field | [optional] 
**label** | **str** | The display label of the custom field | [optional] 
**options** | [**List[CustomFieldOption]**](CustomFieldOption.md) | The list of available options for select/radio/multiselect/drilldown field types | [optional] 
**record_type** | **str** | The entity type this custom field belongs to (e.g. CONTACT, COMPANY) | [optional] 
**field_type** | **str** | The data type of the custom field (e.g. Text, Number, Date, Select) | [optional] 
**default_value** | **str** | The default value for this custom field, if any | [optional] 
**group_id** | **str** | The ID of the group this custom field belongs to | [optional] 
**group_name** | **str** | The name of the group this custom field belongs to | [optional] 
**field_name** | **str** | The database column name for this custom field. Use this value when filtering contacts (e.g. for field_name &#39;firstName1&#39;, filter with &#39;firstName1&#x3D;&#x3D;John&#39;). | [optional] 

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


