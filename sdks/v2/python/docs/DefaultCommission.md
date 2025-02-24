# DefaultCommission


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dollar_amount** | **float** |  | [optional] 
**percentage** | **float** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.default_commission import DefaultCommission

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultCommission from a JSON string
default_commission_instance = DefaultCommission.from_json(json)
# print the JSON string representation of the object
print(DefaultCommission.to_json())

# convert the object into a dict
default_commission_dict = default_commission_instance.to_dict()
# create an instance of DefaultCommission from a dict
default_commission_from_dict = DefaultCommission.from_dict(default_commission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


