# Error


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cause** | [**Throwable**](Throwable.md) |  | [optional] 
**localized_message** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**stack_trace** | [**List[StackTraceElement]**](StackTraceElement.md) |  | [optional] 
**suppressed** | [**List[Throwable]**](Throwable.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.error import Error

# TODO update the JSON string below
json = "{}"
# create an instance of Error from a JSON string
error_instance = Error.from_json(json)
# print the JSON string representation of the object
print(Error.to_json())

# convert the object into a dict
error_dict = error_instance.to_dict()
# create an instance of Error from a dict
error_from_dict = Error.from_dict(error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


