# UpdateSubscriptionRequestDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantity** | **int** | The subscription quantity. Must be 1 or greater. | [optional] 
**active** | **bool** | If the subscription is active or not. | [optional] 
**contact_id** | **str** | Id of the contact to create the subscription for. | 
**subscription_plan_id** | **str** | Id of the product subscription plan. | [optional] 
**billing_amount** | **float** | The billing amount. Must be 0 or greater. | [optional] 
**auto_charge** | **bool** | If the subscription should auto charge on the next billing date. | [optional] 
**max_charge_attempts** | **int** | Maximum number of charge attempts. Must be 1 or greater. | [optional] 
**days_between_retries** | **int** | Number of days between charge attempts. Must be 1 or greater. | [optional] 
**billing_frequency** | **int** | The number of days between billing cycles. Must be 1 or greater. | [optional] 
**billing_cycle** | **str** | The billing cycle for the subscription. | [optional] 
**next_bill_date** | **date** | The next date the subscription will bill. Must not be in the past. | [optional] 
**end_date** | **date** | The date the subscription will end. Must not be in the past. | [optional] 
**payment_method_id** | **str** | Id associated with the payment method. | [optional] 
**allow_tax** | **bool** | Only works if the product associated with the product subscription is taxable. | [optional] 
**lead_affiliate_id** | **str** | The affiliate id for the lead of the subscription. | [optional] 
**sale_affiliate_id** | **str** | The affiliate id for the sale of the subscription. | [optional] 
**shipping_address** | [**AddressRequestDetail**](AddressRequestDetail.md) | The shipping address for the subscription. | [optional] 
**promo_code** | **str** | The promo code for the subscription. | [optional] 
**shipping_option_id** | **str** | The shipping option ID for the subscription. | [optional] 
**reason_stopped** | **str** | The reason the subscription is no longer active. | [optional] 

## Example

```python
from keap_core_v2_client.models.update_subscription_request_detail import UpdateSubscriptionRequestDetail

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSubscriptionRequestDetail from a JSON string
update_subscription_request_detail_instance = UpdateSubscriptionRequestDetail.from_json(json)
# print the JSON string representation of the object
print(UpdateSubscriptionRequestDetail.to_json())

# convert the object into a dict
update_subscription_request_detail_dict = update_subscription_request_detail_instance.to_dict()
# create an instance of UpdateSubscriptionRequestDetail from a dict
update_subscription_request_detail_from_dict = UpdateSubscriptionRequestDetail.from_dict(update_subscription_request_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


