# Subscription


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | If the subscription is active or not. | [optional] 
**allow_tax** | **bool** | If the subscription allows tax. | [optional] 
**auto_charge** | **bool** | If the subscription should auto charge on the next billing date. | [optional] 
**billing_amount** | **float** | The billing amount. | [optional] 
**billing_cycle** | **str** | The billing cycle of the subscription. | [optional] 
**billing_frequency** | **int** | The billing frequency in days. | [optional] 
**contact_id** | **str** | Id of the contact to create the subscription for. | [optional] 
**days_between_retries** | **int** | Number of days between charge attempts. | [optional] 
**end_date** | **str** | The last date the subscription will bill. | [optional] 
**id** | **str** | Id of the subscription. | [optional] 
**last_bill_date** | **str** | The last date the subscription was billed. | [optional] 
**lead_affiliate_id** | **str** | The affiliate id for the lead of the subscription. | [optional] 
**max_charge_attempts** | **int** | Maximum number of charge attempts. | [optional] 
**merchant_account_id** | **str** | The merchant account id associated with the subscription. | [optional] 
**next_bill_date** | **str** | The next date the subscription will bill. | [optional] 
**payment_method_id** | **str** | Id associated with the payment method. | [optional] 
**product_id** | **str** | Id of the product associated with the subscription. | [optional] 
**quantity** | **int** | The subscription quantity. | [optional] 
**sale_affiliate_id** | **str** | The affiliate id for the sale of the subscription. | [optional] 
**shipping_address** | [**Address**](Address.md) |  | [optional] 
**start_date** | **str** | The first day the subscription will bill. | [optional] 
**subscription_plan_id** | **str** | Id of the product subscription plan. | [optional] 

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


