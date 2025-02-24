# FileMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** |  | [optional] 
**contact_id** | **str** |  | [optional] 
**created_by_id** | **str** |  | [optional] 
**created_time** | **str** |  | [optional] 
**file_box_type** | **str** |  | [optional] 
**file_name** | **str** |  | [optional] 
**file_size** | **int** |  | [optional] 
**id** | **str** |  | [optional] 
**is_public** | **bool** |  | [optional] 
**remote_file_key** | **str** |  | [optional] 
**updated_time** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.file_metadata import FileMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of FileMetadata from a JSON string
file_metadata_instance = FileMetadata.from_json(json)
# print the JSON string representation of the object
print(FileMetadata.to_json())

# convert the object into a dict
file_metadata_dict = file_metadata_instance.to_dict()
# create an instance of FileMetadata from a dict
file_metadata_from_dict = FileMetadata.from_dict(file_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


