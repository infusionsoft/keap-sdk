# AffiliateRemoveFromProgramRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliate_program_id** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.affiliate_remove_from_program_request import AffiliateRemoveFromProgramRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AffiliateRemoveFromProgramRequest from a JSON string
affiliate_remove_from_program_request_instance = AffiliateRemoveFromProgramRequest.from_json(json)
# print the JSON string representation of the object
print(AffiliateRemoveFromProgramRequest.to_json())

# convert the object into a dict
affiliate_remove_from_program_request_dict = affiliate_remove_from_program_request_instance.to_dict()
# create an instance of AffiliateRemoveFromProgramRequest from a dict
affiliate_remove_from_program_request_from_dict = AffiliateRemoveFromProgramRequest.from_dict(affiliate_remove_from_program_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


