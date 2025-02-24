# RestV2User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.rest_v2_user import RestV2User

# TODO update the JSON string below
json = "{}"
# create an instance of RestV2User from a JSON string
rest_v2_user_instance = RestV2User.from_json(json)
# print the JSON string representation of the object
print(RestV2User.to_json())

# convert the object into a dict
rest_v2_user_dict = rest_v2_user_instance.to_dict()
# create an instance of RestV2User from a dict
rest_v2_user_from_dict = RestV2User.from_dict(rest_v2_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


