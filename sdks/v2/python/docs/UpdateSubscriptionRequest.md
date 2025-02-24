# UpdateSubscriptionRequest


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
**days_between_retries** | **int** |  | [optional] 
**end_bill_date** | **str** |  | [optional] 
**lead_affiliate_id** | **str** |  | [optional] 
**max_charge_attempts** | **int** |  | [optional] 
**next_bill_date** | **str** |  | [optional] 
**payment_method_id** | **str** |  | [optional] 
**previous_bill_date** | **str** |  | [optional] 
**product_id** | **str** |  | [optional] 
**quantity** | **int** |  | [optional] 
**sale_affiliate_id** | **str** |  | [optional] 
**shipping_address** | [**Address**](Address.md) |  | [optional] 
**start_date** | **str** |  | [optional] 
**subscription_plan_id** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.update_subscription_request import UpdateSubscriptionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSubscriptionRequest from a JSON string
update_subscription_request_instance = UpdateSubscriptionRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateSubscriptionRequest.to_json())

# convert the object into a dict
update_subscription_request_dict = update_subscription_request_instance.to_dict()
# create an instance of UpdateSubscriptionRequest from a dict
update_subscription_request_from_dict = UpdateSubscriptionRequest.from_dict(update_subscription_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


