# ApplyCommissionRequest

RestApplyCommissionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliate_id** | **str** | The affiliate id | 
**pay_percent** | **float** | Commission percentage | [optional] 
**commission_amount** | **float** | Fixed commission amount | [optional] 
**payout_type** | **str** | The payout type | 
**description** | **str** | Commission description | [optional] 
**commission_date** | **date** | Date of the commission | [optional] 

## Example

```python
from keap_core_v2_client.models.apply_commission_request import ApplyCommissionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApplyCommissionRequest from a JSON string
apply_commission_request_instance = ApplyCommissionRequest.from_json(json)
# print the JSON string representation of the object
print(ApplyCommissionRequest.to_json())

# convert the object into a dict
apply_commission_request_dict = apply_commission_request_instance.to_dict()
# create an instance of ApplyCommissionRequest from a dict
apply_commission_request_from_dict = ApplyCommissionRequest.from_dict(apply_commission_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


