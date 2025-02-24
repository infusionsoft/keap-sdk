# FaxNumber


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | **str** |  | [optional] 
**number** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.fax_number import FaxNumber

# TODO update the JSON string below
json = "{}"
# create an instance of FaxNumber from a JSON string
fax_number_instance = FaxNumber.from_json(json)
# print the JSON string representation of the object
print(FaxNumber.to_json())

# convert the object into a dict
fax_number_dict = fax_number_instance.to_dict()
# create an instance of FaxNumber from a dict
fax_number_from_dict = FaxNumber.from_dict(fax_number_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


