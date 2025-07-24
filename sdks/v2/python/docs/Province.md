# Province


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**country** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.province import Province

# TODO update the JSON string below
json = "{}"
# create an instance of Province from a JSON string
province_instance = Province.from_json(json)
# print the JSON string representation of the object
print(Province.to_json())

# convert the object into a dict
province_dict = province_instance.to_dict()
# create an instance of Province from a dict
province_from_dict = Province.from_dict(province_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


