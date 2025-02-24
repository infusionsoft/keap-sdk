# AffiliateCommission


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aff_owed_id** | **int** |  | [optional] 
**amount_earned** | **float** |  | [optional] 
**contact_first_name** | **str** |  | [optional] 
**contact_id** | **int** |  | [optional] 
**contact_last_name** | **str** |  | [optional] 
**date_earned** | **datetime** |  | [optional] 
**description** | **str** |  | [optional] 
**invoice_id** | **int** |  | [optional] 
**product_name** | **str** |  | [optional] 
**sales_affiliate_id** | **int** |  | [optional] 
**sold_by_first_name** | **str** |  | [optional] 
**sold_by_last_name** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.affiliate_commission import AffiliateCommission

# TODO update the JSON string below
json = "{}"
# create an instance of AffiliateCommission from a JSON string
affiliate_commission_instance = AffiliateCommission.from_json(json)
# print the JSON string representation of the object
print(AffiliateCommission.to_json())

# convert the object into a dict
affiliate_commission_dict = affiliate_commission_instance.to_dict()
# create an instance of AffiliateCommission from a dict
affiliate_commission_from_dict = AffiliateCommission.from_dict(affiliate_commission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


