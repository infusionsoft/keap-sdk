# FileMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | File ID | [optional] 
**category** | **str** | File category | [optional] 
**file_name** | **str** | File name with extension | [optional] 
**is_public** | **bool** | Whether file is publicly accessible | [optional] 
**contact_id** | **str** | Associated contact ID | [optional] 
**created_by_id** | **str** | ID of user who created the file | [optional] 
**remote_file_key** | **str** | Remote storage key | [optional] 
**file_box_type** | **str** | File box type | [optional] 
**file_size** | **int** | File size in bytes | [optional] 
**created_time** | **str** | Creation timestamp (ISO-8601) | [optional] 
**updated_time** | **str** | Last update timestamp (ISO-8601) | [optional] 

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


