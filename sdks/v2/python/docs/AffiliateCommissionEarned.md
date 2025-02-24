# AffiliateCommissionEarned


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliate_commission_total** | **float** |  | [optional] 
**view_ledger_url** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.affiliate_commission_earned import AffiliateCommissionEarned

# TODO update the JSON string below
json = "{}"
# create an instance of AffiliateCommissionEarned from a JSON string
affiliate_commission_earned_instance = AffiliateCommissionEarned.from_json(json)
# print the JSON string representation of the object
print(AffiliateCommissionEarned.to_json())

# convert the object into a dict
affiliate_commission_earned_dict = affiliate_commission_earned_instance.to_dict()
# create an instance of AffiliateCommissionEarned from a dict
affiliate_commission_earned_from_dict = AffiliateCommissionEarned.from_dict(affiliate_commission_earned_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


