# PaymentMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_id** | **str** | The id of the contact the payment method is associated with. | [optional] 
**payment_method_id** | **str** | The unique identifier of the payment method. | [optional] 
**credit_card_id** | **str** | For backward-compatibility with v1 endpoints. If present, it&#39;s the credit card id this payment method refers to. | [optional] 
**merchant_account_type** | **str** | The merchant account type through which the payment method was tokenized. | [optional] 
**merchant_account_id** | **str** | The merchant account id through which the payment method was tokenize. | [optional] 
**payment_method_type** | **str** | The type of payment method. For now, only CARD is supported. | [optional] 
**created_time** | **datetime** | When this payment method was made. In ISO-8601 format. | [optional] 
**card_info** | [**CardInfo**](CardInfo.md) | If present, it provides additional details for payment methods of payment_method_type CARD. | [optional] 
**status** | **str** | Status of the payment method. Fow now, only EXPIRED is supported. | [optional] 

## Example

```python
from keap_core_v2_client.models.payment_method import PaymentMethod

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentMethod from a JSON string
payment_method_instance = PaymentMethod.from_json(json)
# print the JSON string representation of the object
print(PaymentMethod.to_json())

# convert the object into a dict
payment_method_dict = payment_method_instance.to_dict()
# create an instance of PaymentMethod from a dict
payment_method_from_dict = PaymentMethod.from_dict(payment_method_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


