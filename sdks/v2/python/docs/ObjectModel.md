# ObjectModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_fields** | [**List[CustomFieldMetaData]**](CustomFieldMetaData.md) |  | [optional] 
**optional_properties** | **List[str]** | These fields are not transmitted by default on this model, but can be requested by specifying them in a comma-separated list in the optional_properties query parameter. | [optional] 

## Example

```python
from keap_core_v2_client.models.object_model import ObjectModel

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectModel from a JSON string
object_model_instance = ObjectModel.from_json(json)
# print the JSON string representation of the object
print(ObjectModel.to_json())

# convert the object into a dict
object_model_dict = object_model_instance.to_dict()
# create an instance of ObjectModel from a dict
object_model_from_dict = ObjectModel.from_dict(object_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


