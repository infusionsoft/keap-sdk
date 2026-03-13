# GetRestCommissionProgram


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Commission program ID | [optional] 
**name** | **str** | The affiliate commission program name | [optional] 
**priority** | **str** | The Affiliate commission program priority | [optional] 
**notes** | **str** | The affiliate commission program notes | [optional] 
**create_time** | **str** | The created time of affiliate commission program | [optional] 
**affiliate_ids** | **List[str]** | The list of affiliate_ids using this commission program | [optional] 
**default_commission** | [**DefaultCommission**](DefaultCommission.md) |  | [optional] 
**product_commissions** | [**List[ProductCommission]**](ProductCommission.md) |  | [optional] 
**subscription_commissions** | [**List[SubscriptionCommission]**](SubscriptionCommission.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.get_rest_commission_program import GetRestCommissionProgram

# TODO update the JSON string below
json = "{}"
# create an instance of GetRestCommissionProgram from a JSON string
get_rest_commission_program_instance = GetRestCommissionProgram.from_json(json)
# print the JSON string representation of the object
print(GetRestCommissionProgram.to_json())

# convert the object into a dict
get_rest_commission_program_dict = get_rest_commission_program_instance.to_dict()
# create an instance of GetRestCommissionProgram from a dict
get_rest_commission_program_from_dict = GetRestCommissionProgram.from_dict(get_rest_commission_program_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


