# CreateSubscriptionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_duplicate** | **bool** | If true, it will disable the check to see if there is already an identical subscription for the contact. Default is false. | [optional] 
**allow_tax** | **bool** | Only works if the product associated with the product subscription is taxable. Default is false. | [optional] 
**auto_charge** | **bool** | If the subscription should auto charge on the next billing date. Default is true. | [optional] 
**billing_amount** | **float** | The billing amount. Must be 0 or greater. Default is the price in the product subscription plan. | [optional] 
**contact_id** | **str** | Id of the contact to create the subscription for. | 
**payment_method_id** | **str** | Id associated with the payment method. Default is the contact&#39;s most recently used card, if auto charge is true. Default is 0 otherwise. | [optional] 
**quantity** | **int** | The subscription quantity. Must be 1 or greater. Default is 1. | [optional] 
**sale_affiliate_id** | **str** | The affiliate id for the sale of the subscription. Default is 0. | [optional] 
**start_date** | **str** | The first day the subscription will bill. Must not be in the past. Default is today. | [optional] 
**subscription_plan_id** | **str** | Id of the product subscription plan. | 

## Example

```python
from keap_core_v2_client.models.create_subscription_request import CreateSubscriptionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSubscriptionRequest from a JSON string
create_subscription_request_instance = CreateSubscriptionRequest.from_json(json)
# print the JSON string representation of the object
print(CreateSubscriptionRequest.to_json())

# convert the object into a dict
create_subscription_request_dict = create_subscription_request_instance.to_dict()
# create an instance of CreateSubscriptionRequest from a dict
create_subscription_request_from_dict = CreateSubscriptionRequest.from_dict(create_subscription_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


