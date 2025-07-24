# UpdateSubscriptionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | If the subscription is active or not. | [optional] 
**allow_tax** | **bool** | Only works if the product associated with the product subscription is taxable. | [optional] 
**auto_charge** | **bool** | If the subscription should auto charge on the next billing date. | [optional] 
**billing_amount** | **float** | The billing amount. Must be 0 or greater. | [optional] 
**billing_cycle** | **str** | The billing cycle for the subscription. | [optional] 
**billing_frequency** | **int** | The number of days between billing cycles. Must be 1 or greater. | [optional] 
**contact_id** | **str** | Id of the contact to create the subscription for. | 
**days_between_retries** | **int** | Number of days between charge attempts. Must be 1 or greater. | [optional] 
**end_date** | **str** | The date the subscription will end. Must not be in the past. | [optional] 
**lead_affiliate_id** | **str** | The affiliate id for the lead of the subscription. | [optional] 
**max_charge_attempts** | **int** | Maximum number of charge attempts. Must be 1 or greater. | [optional] 
**next_bill_date** | **str** | The next date the subscription will bill. Must not be in the past. | [optional] 
**payment_method_id** | **str** | Id associated with the payment method. | [optional] 
**product_id** | **str** |  | [optional] 
**quantity** | **int** | The subscription quantity. Must be 1 or greater. | [optional] 
**sale_affiliate_id** | **str** | The affiliate id for the sale of the subscription. | [optional] 
**shipping_address** | [**Address**](Address.md) |  | [optional] 
**subscription_plan_id** | **str** | Id of the product subscription plan. | [optional] 

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


