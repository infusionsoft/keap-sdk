# ListAffiliateReferralsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**referrals** | [**List[Referral]**](Referral.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_affiliate_referrals_response import ListAffiliateReferralsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAffiliateReferralsResponse from a JSON string
list_affiliate_referrals_response_instance = ListAffiliateReferralsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAffiliateReferralsResponse.to_json())

# convert the object into a dict
list_affiliate_referrals_response_dict = list_affiliate_referrals_response_instance.to_dict()
# create an instance of ListAffiliateReferralsResponse from a dict
list_affiliate_referrals_response_from_dict = ListAffiliateReferralsResponse.from_dict(list_affiliate_referrals_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


