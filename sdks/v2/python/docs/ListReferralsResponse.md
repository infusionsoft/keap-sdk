# ListReferralsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**referrals** | [**List[Referral]**](Referral.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_referrals_response import ListReferralsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListReferralsResponse from a JSON string
list_referrals_response_instance = ListReferralsResponse.from_json(json)
# print the JSON string representation of the object
print(ListReferralsResponse.to_json())

# convert the object into a dict
list_referrals_response_dict = list_referrals_response_instance.to_dict()
# create an instance of ListReferralsResponse from a dict
list_referrals_response_from_dict = ListReferralsResponse.from_dict(list_referrals_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


