# File


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**absolute** | **bool** |  | [optional] 
**absolute_file** | [**File**](File.md) |  | [optional] 
**absolute_path** | **str** |  | [optional] 
**canonical_file** | [**File**](File.md) |  | [optional] 
**canonical_path** | **str** |  | [optional] 
**directory** | **bool** |  | [optional] 
**executable** | **bool** |  | [optional] 
**file** | **bool** |  | [optional] 
**free_space** | **int** |  | [optional] 
**hidden** | **bool** |  | [optional] 
**last_modified** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**parent** | **str** |  | [optional] 
**parent_file** | [**File**](File.md) |  | [optional] 
**path** | **str** |  | [optional] 
**readable** | **bool** |  | [optional] 
**total_space** | **int** |  | [optional] 
**usable_space** | **int** |  | [optional] 
**writable** | **bool** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.file import File

# TODO update the JSON string below
json = "{}"
# create an instance of File from a JSON string
file_instance = File.from_json(json)
# print the JSON string representation of the object
print(File.to_json())

# convert the object into a dict
file_dict = file_instance.to_dict()
# create an instance of File from a dict
file_from_dict = File.from_dict(file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


