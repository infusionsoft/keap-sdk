# AppliedTag

Tag with application timestamp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | [**Tag**](Tag.md) | The tag applied | [optional] 
**applied_time** | **str** | The time the tag was applied to the contact, in ISO 8601 format | [optional] 

## Example

```python
from keap_core_v2_client.models.applied_tag import AppliedTag

# TODO update the JSON string below
json = "{}"
# create an instance of AppliedTag from a JSON string
applied_tag_instance = AppliedTag.from_json(json)
# print the JSON string representation of the object
print(AppliedTag.to_json())

# convert the object into a dict
applied_tag_dict = applied_tag_instance.to_dict()
# create an instance of AppliedTag from a dict
applied_tag_from_dict = AppliedTag.from_dict(applied_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


