# FileOperationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_id** | **str** |  | 

## Example

```python
from keap_core_v2_client.models.file_operation_request import FileOperationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FileOperationRequest from a JSON string
file_operation_request_instance = FileOperationRequest.from_json(json)
# print the JSON string representation of the object
print(FileOperationRequest.to_json())

# convert the object into a dict
file_operation_request_dict = file_operation_request_instance.to_dict()
# create an instance of FileOperationRequest from a dict
file_operation_request_from_dict = FileOperationRequest.from_dict(file_operation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


