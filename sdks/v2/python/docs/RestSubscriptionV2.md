# RestSubscriptionV2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** |  | [optional] 
**allow_tax** | **bool** |  | [optional] 
**auto_charge** | **bool** |  | [optional] 
**billing_amount** | **float** |  | [optional] 
**billing_cycle** | **str** |  | [optional] 
**billing_frequency** | **int** |  | [optional] 
**contact_id** | **str** |  | [optional] 
**end_date** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**next_bill_date** | **str** |  | [optional] 
**payment_gateway_id** | **str** |  | [optional] 
**payment_method_id** | **str** |  | [optional] 
**product_id** | **str** |  | [optional] 
**quantity** | **int** |  | [optional] 
**sale_affiliate_id** | **str** |  | [optional] 
**start_date** | **str** |  | [optional] 
**subscription_plan_id** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.rest_subscription_v2 import RestSubscriptionV2

# TODO update the JSON string below
json = "{}"
# create an instance of RestSubscriptionV2 from a JSON string
rest_subscription_v2_instance = RestSubscriptionV2.from_json(json)
# print the JSON string representation of the object
print(RestSubscriptionV2.to_json())

# convert the object into a dict
rest_subscription_v2_dict = rest_subscription_v2_instance.to_dict()
# create an instance of RestSubscriptionV2 from a dict
rest_subscription_v2_from_dict = RestSubscriptionV2.from_dict(rest_subscription_v2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


