# Referral


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier for this referral. | [optional] 
**description** | **str** | The referral description. | [optional] 
**source** | **str** | The source for the referral. | [optional] 
**contact_id** | **str** | The referral&#39;s contact_id. | [optional] 
**referral_partner_id** | **str** | The referring affiliate ID. | [optional] 
**referral_time** | **datetime** | The time of the referral. | [optional] 
**expiration_time** | **datetime** | The time when the referral expires. | [optional] 
**ip_address** | **str** | The IP address of the referral. | [optional] 
**referral_type** | **str** | The referral type. | [optional] 

## Example

```python
from keap_core_v2_client.models.referral import Referral

# TODO update the JSON string below
json = "{}"
# create an instance of Referral from a JSON string
referral_instance = Referral.from_json(json)
# print the JSON string representation of the object
print(Referral.to_json())

# convert the object into a dict
referral_dict = referral_instance.to_dict()
# create an instance of Referral from a dict
referral_from_dict = Referral.from_dict(referral_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


