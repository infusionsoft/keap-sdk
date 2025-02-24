# URI


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**absolute** | **bool** |  | [optional] 
**authority** | **str** |  | [optional] 
**fragment** | **str** |  | [optional] 
**host** | **str** |  | [optional] 
**opaque** | **bool** |  | [optional] 
**path** | **str** |  | [optional] 
**port** | **int** |  | [optional] 
**query** | **str** |  | [optional] 
**raw_authority** | **str** |  | [optional] 
**raw_fragment** | **str** |  | [optional] 
**raw_path** | **str** |  | [optional] 
**raw_query** | **str** |  | [optional] 
**raw_scheme_specific_part** | **str** |  | [optional] 
**raw_user_info** | **str** |  | [optional] 
**scheme** | **str** |  | [optional] 
**scheme_specific_part** | **str** |  | [optional] 
**user_info** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.uri import URI

# TODO update the JSON string below
json = "{}"
# create an instance of URI from a JSON string
uri_instance = URI.from_json(json)
# print the JSON string representation of the object
print(URI.to_json())

# convert the object into a dict
uri_dict = uri_instance.to_dict()
# create an instance of URI from a dict
uri_from_dict = URI.from_dict(uri_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


