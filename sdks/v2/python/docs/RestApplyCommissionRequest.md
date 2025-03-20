# RestApplyCommissionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commission_amount** | **float** |  | [optional] 
**commission_date** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**pay_percent** | **float** |  | [optional] 
**payout_type** | **str** | The payout type | 
**referral_partner_id** | **str** | The referral partner id | 

## Example

```python
from keap_core_v2_client.models.rest_apply_commission_request import RestApplyCommissionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RestApplyCommissionRequest from a JSON string
rest_apply_commission_request_instance = RestApplyCommissionRequest.from_json(json)
# print the JSON string representation of the object
print(RestApplyCommissionRequest.to_json())

# convert the object into a dict
rest_apply_commission_request_dict = rest_apply_commission_request_instance.to_dict()
# create an instance of RestApplyCommissionRequest from a dict
rest_apply_commission_request_from_dict = RestApplyCommissionRequest.from_dict(rest_apply_commission_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


