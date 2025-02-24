# Throwable


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
from keap_core_v2_client.models.throwable import Throwable

# TODO update the JSON string below
json = "{}"
# create an instance of Throwable from a JSON string
throwable_instance = Throwable.from_json(json)
# print the JSON string representation of the object
print(Throwable.to_json())

# convert the object into a dict
throwable_dict = throwable_instance.to_dict()
# create an instance of Throwable from a dict
throwable_from_dict = Throwable.from_dict(throwable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


