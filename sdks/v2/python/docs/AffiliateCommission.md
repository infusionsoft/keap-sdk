# AffiliateCommission


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the product or line item associated with this commission | [optional] 
**amount_earned** | **float** | Amount earned for this commission | [optional] 
**contact_first_name** | **str** | First name of the contact associated with this commission | [optional] 
**contact_last_name** | **str** | Last name of the contact associated with this commission | [optional] 
**invoice_id** | **str** | ID of the invoice associated with this commission | [optional] 
**time_earned** | **str** | When the commission was earned. In ISO-8601 format | [optional] 
**contact_id** | **str** | ID of the contact associated with this commission | [optional] 
**sales_affiliate_id** | **str** | ID of the sales affiliate | [optional] 
**sales_affiliate_name** | **str** | The name of the sales affiliate | [optional] 
**product_name** | **str** | Name of the product or line item associated with this commission | [optional] 

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


