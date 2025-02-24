# CreateReferralRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_id** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**expiration_time** | **str** |  | [optional] 
**ip_address** | **str** |  | [optional] 
**referral_partner_id** | **str** |  | [optional] 
**referral_time** | **str** |  | [optional] 
**referral_type** | **str** |  | [optional] 
**source** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.create_referral_request import CreateReferralRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateReferralRequest from a JSON string
create_referral_request_instance = CreateReferralRequest.from_json(json)
# print the JSON string representation of the object
print(CreateReferralRequest.to_json())

# convert the object into a dict
create_referral_request_dict = create_referral_request_instance.to_dict()
# create an instance of CreateReferralRequest from a dict
create_referral_request_from_dict = CreateReferralRequest.from_dict(create_referral_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


