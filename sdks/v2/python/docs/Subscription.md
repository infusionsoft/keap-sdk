# Subscription


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
**last_bill_date** | **str** |  | [optional] 
**merchant_account_id** | **str** |  | [optional] 
**next_bill_date** | **str** |  | [optional] 
**payment_method_id** | **str** |  | [optional] 
**product_id** | **str** |  | [optional] 
**quantity** | **int** |  | [optional] 
**sale_affiliate_id** | **str** |  | [optional] 
**start_date** | **str** |  | [optional] 
**subscription_plan_id** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.subscription import Subscription

# TODO update the JSON string below
json = "{}"
# create an instance of Subscription from a JSON string
subscription_instance = Subscription.from_json(json)
# print the JSON string representation of the object
print(Subscription.to_json())

# convert the object into a dict
subscription_dict = subscription_instance.to_dict()
# create an instance of Subscription from a dict
subscription_from_dict = Subscription.from_dict(subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


