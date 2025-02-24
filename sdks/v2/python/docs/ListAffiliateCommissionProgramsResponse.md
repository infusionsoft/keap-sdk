# ListAffiliateCommissionProgramsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commission_programs** | [**List[AffiliateProgramV2]**](AffiliateProgramV2.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_affiliate_commission_programs_response import ListAffiliateCommissionProgramsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAffiliateCommissionProgramsResponse from a JSON string
list_affiliate_commission_programs_response_instance = ListAffiliateCommissionProgramsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAffiliateCommissionProgramsResponse.to_json())

# convert the object into a dict
list_affiliate_commission_programs_response_dict = list_affiliate_commission_programs_response_instance.to_dict()
# create an instance of ListAffiliateCommissionProgramsResponse from a dict
list_affiliate_commission_programs_response_from_dict = ListAffiliateCommissionProgramsResponse.from_dict(list_affiliate_commission_programs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


