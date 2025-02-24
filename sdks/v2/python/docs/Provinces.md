# Provinces


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.provinces import Provinces

# TODO update the JSON string below
json = "{}"
# create an instance of Provinces from a JSON string
provinces_instance = Provinces.from_json(json)
# print the JSON string representation of the object
print(Provinces.to_json())

# convert the object into a dict
provinces_dict = provinces_instance.to_dict()
# create an instance of Provinces from a dict
provinces_from_dict = Provinces.from_dict(provinces_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


