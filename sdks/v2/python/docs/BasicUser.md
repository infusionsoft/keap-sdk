# BasicUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address** | **str** |  | [optional] 
**family_name** | **str** |  | [optional] 
**given_name** | **str** |  | [optional] 
**id** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.basic_user import BasicUser

# TODO update the JSON string below
json = "{}"
# create an instance of BasicUser from a JSON string
basic_user_instance = BasicUser.from_json(json)
# print the JSON string representation of the object
print(BasicUser.to_json())

# convert the object into a dict
basic_user_dict = basic_user_instance.to_dict()
# create an instance of BasicUser from a dict
basic_user_from_dict = BasicUser.from_dict(basic_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


