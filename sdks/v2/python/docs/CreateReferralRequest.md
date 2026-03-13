# CreateReferralRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The referral description. | [optional] 
**source** | **str** | The source for the referral. | [optional] 
**contact_id** | **str** | The referral&#39;s contact ID. | 
**referral_partner_id** | **str** | The referring affiliate ID. | [optional] 
**referral_time** | **datetime** | The time of the referral. | [optional] 
**expiration_time** | **datetime** | When the referral expires. | [optional] 
**ip_address** | **str** | The IP address of the referral. | [optional] 
**referral_type** | **str** | The referral type. | [optional] 

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


