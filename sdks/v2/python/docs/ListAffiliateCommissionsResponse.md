# ListAffiliateCommissionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliate_commissions** | [**List[AffiliateCommission]**](AffiliateCommission.md) | List of commissions for this affiliate | [optional] 
**next_page_token** | **str** |  | [optional] 
**clawbacks** | **float** | Calculated total amount of clawbacks from the returned commissions.  | [optional] 
**commission_total** | **float** | Calculated total commission amount (amount earned - amount clawbacks) from the returned commissions | [optional] 
**amount_earned** | **float** | Calculated total amount earned from the returned commissions. | [optional] 

## Example

```python
from keap_core_v2_client.models.list_affiliate_commissions_response import ListAffiliateCommissionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAffiliateCommissionsResponse from a JSON string
list_affiliate_commissions_response_instance = ListAffiliateCommissionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAffiliateCommissionsResponse.to_json())

# convert the object into a dict
list_affiliate_commissions_response_dict = list_affiliate_commissions_response_instance.to_dict()
# create an instance of ListAffiliateCommissionsResponse from a dict
list_affiliate_commissions_response_from_dict = ListAffiliateCommissionsResponse.from_dict(list_affiliate_commissions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


