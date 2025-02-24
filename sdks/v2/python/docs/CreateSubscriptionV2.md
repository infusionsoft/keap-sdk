# CreateSubscriptionV2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_duplicate** | **bool** | If true, it will disable the check to see if there is already an identical subscription for the contact. Default is false. | [optional] 
**allow_tax** | **bool** | Only works if the product the product subscription is for is taxable. Default is false. | [optional] 
**auto_charge** | **bool** | Defaults to true. | [optional] 
**billing_amount** | **float** | Must be 0 or greater. Default is the price in the product subscription. | [optional] 
**contact_id** | **str** |  | 
**first_bill_date** | **date** | The first day the subscription will bill, in EST. Must not be in the past. Default is today. | [optional] 
**payment_method_id** | **str** | Default is the contact&#39;s most recently used card, if auto charge is true. Default is 0 otherwise. | [optional] 
**quantity** | **int** | Must be greater than 0. Default is 1. | [optional] 
**sale_affiliate_id** | **str** |  | [optional] 
**subscription_plan_id** | **str** | Id of the product subscription. | [optional] 

## Example

```python
from keap_core_v2_client.models.create_subscription_v2 import CreateSubscriptionV2

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSubscriptionV2 from a JSON string
create_subscription_v2_instance = CreateSubscriptionV2.from_json(json)
# print the JSON string representation of the object
print(CreateSubscriptionV2.to_json())

# convert the object into a dict
create_subscription_v2_dict = create_subscription_v2_instance.to_dict()
# create an instance of CreateSubscriptionV2 from a dict
create_subscription_v2_from_dict = CreateSubscriptionV2.from_dict(create_subscription_v2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


