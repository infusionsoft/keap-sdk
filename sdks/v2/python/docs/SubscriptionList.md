# SubscriptionList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the subscription. | [optional] 
**quantity** | **int** | The subscription quantity. | [optional] 
**active** | **bool** | If the subscription is active or not. | [optional] 
**contact_id** | **str** | Id of the contact associated with the subscription. | [optional] 
**product_id** | **str** | Id of the product associated with the subscription. | [optional] 
**subscription_plan_id** | **str** | Id of the product subscription plan. | [optional] 
**billing_amount** | **float** | The billing amount. | [optional] 
**auto_charge** | **bool** | If the subscription should auto charge on the next billing date. | [optional] 
**billing_frequency** | **int** | The billing frequency in days. | [optional] 
**billing_cycle** | **str** | The billing cycle of the subscription. | [optional] 
**start_date** | **date** | The first day the subscription will bill. | [optional] 
**last_bill_date** | **date** | The last date the subscription was billed. | [optional] 
**next_bill_date** | **date** | The next date the subscription will bill. | [optional] 
**end_date** | **date** | The last date the subscription will bill. | [optional] 
**merchant_account_id** | **str** | The merchant account id associated with the subscription. | [optional] 
**payment_method_id** | **str** | Id associated with the payment method. | [optional] 
**allow_tax** | **bool** | If the subscription allows tax. | [optional] 
**max_charge_attempts** | **int** | Maximum number of charge attempts. | [optional] 
**days_between_retries** | **int** | Number of days between charge attempts. | [optional] 
**lead_affiliate_id** | **str** | The affiliate id for the lead of the subscription. | [optional] 
**sale_affiliate_id** | **str** | The affiliate id for the sale of the subscription. | [optional] 
**promo_code** | **str** | The promo code for the subscription. | [optional] 
**shipping_option_id** | **str** | The shipping option ID for the subscription. | [optional] 
**reason_stopped** | **str** | The reason the subscription is no longer active. | [optional] 

## Example

```python
from keap_core_v2_client.models.subscription_list import SubscriptionList

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionList from a JSON string
subscription_list_instance = SubscriptionList.from_json(json)
# print the JSON string representation of the object
print(SubscriptionList.to_json())

# convert the object into a dict
subscription_list_dict = subscription_list_instance.to_dict()
# create an instance of SubscriptionList from a dict
subscription_list_from_dict = SubscriptionList.from_dict(subscription_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


