# AffiliateAddToProgramRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliate_program_id** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.affiliate_add_to_program_request import AffiliateAddToProgramRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AffiliateAddToProgramRequest from a JSON string
affiliate_add_to_program_request_instance = AffiliateAddToProgramRequest.from_json(json)
# print the JSON string representation of the object
print(AffiliateAddToProgramRequest.to_json())

# convert the object into a dict
affiliate_add_to_program_request_dict = affiliate_add_to_program_request_instance.to_dict()
# create an instance of AffiliateAddToProgramRequest from a dict
affiliate_add_to_program_request_from_dict = AffiliateAddToProgramRequest.from_dict(affiliate_add_to_program_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


