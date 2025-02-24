# AffiliateProgramV2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliate_id** | **str** | The affiliate_Id for Affiliate commission program | [optional] 
**create_time** | **str** | The created time of affiliate commission program | [optional] 
**default_commission** | [**DefaultCommission**](DefaultCommission.md) |  | [optional] 
**id** | **str** | The affiliate commission program name | [optional] 
**name** | **str** | The affiliate commission program name | [optional] 
**notes** | **str** | The affiliate commission program notes | [optional] 
**priority** | **str** | The Affiliate commission program priority | [optional] 
**product_commissions** | [**List[ProductCommission]**](ProductCommission.md) |  | [optional] 
**subscription_commissions** | [**List[SubscriptionCommission]**](SubscriptionCommission.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.affiliate_program_v2 import AffiliateProgramV2

# TODO update the JSON string below
json = "{}"
# create an instance of AffiliateProgramV2 from a JSON string
affiliate_program_v2_instance = AffiliateProgramV2.from_json(json)
# print the JSON string representation of the object
print(AffiliateProgramV2.to_json())

# convert the object into a dict
affiliate_program_v2_dict = affiliate_program_v2_instance.to_dict()
# create an instance of AffiliateProgramV2 from a dict
affiliate_program_v2_from_dict = AffiliateProgramV2.from_dict(affiliate_program_v2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


