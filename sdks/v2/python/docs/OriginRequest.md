# OriginRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.origin_request import OriginRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OriginRequest from a JSON string
origin_request_instance = OriginRequest.from_json(json)
# print the JSON string representation of the object
print(OriginRequest.to_json())

# convert the object into a dict
origin_request_dict = origin_request_instance.to_dict()
# create an instance of OriginRequest from a dict
origin_request_from_dict = OriginRequest.from_dict(origin_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


