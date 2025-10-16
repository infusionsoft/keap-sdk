# PaymentMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_info** | [**CardInfo**](CardInfo.md) |  | [optional] 
**contact_id** | **str** |  | [optional] 
**created_time** | **str** |  | [optional] 
**merchant_account_id** | **str** |  | [optional] 
**merchant_account_type** | **str** | The merchant type this payment method was authorized with. Valid values are: PAYPAL, AUTHORIZE, EWAY, WEPAY, STRIPE, KEAP_PAY, UNSUPPORTED | [optional] 
**payment_method_id** | **str** |  | [optional] 
**payment_method_type** | **str** | The type of payment method. For now, only CARD is supported. | [optional] 
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


