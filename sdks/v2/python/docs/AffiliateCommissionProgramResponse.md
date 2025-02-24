# AffiliateCommissionProgramResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**notes** | **str** |  | [optional] 
**priority** | **int** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.affiliate_commission_program_response import AffiliateCommissionProgramResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AffiliateCommissionProgramResponse from a JSON string
affiliate_commission_program_response_instance = AffiliateCommissionProgramResponse.from_json(json)
# print the JSON string representation of the object
print(AffiliateCommissionProgramResponse.to_json())

# convert the object into a dict
affiliate_commission_program_response_dict = affiliate_commission_program_response_instance.to_dict()
# create an instance of AffiliateCommissionProgramResponse from a dict
affiliate_commission_program_response_from_dict = AffiliateCommissionProgramResponse.from_dict(affiliate_commission_program_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


