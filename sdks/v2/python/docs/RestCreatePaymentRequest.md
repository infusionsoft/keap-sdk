# RestCreatePaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notes** | **str** | The notes for this payment. | [optional] 
**payment_method_id** | **str** | The payment method id to charge immediately against this order. Omit if you want to add a payment record instead. | [optional] 
**payment_method_type** | **str** | The manual payment method type for manually recording a payment. Value must match against the list of types defined under your application&#39;s Order Settings. Ignored if payment_method_id is provided. | [optional] 
**payment_time** | **datetime** | The date and time of payment. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**payment_amount** | **float** | The amount to pay. Must not exceed the current balance of the order. Must be greater than 0 if charging with a payment_method_id | 
**apply_to_commissions** | **bool** | Whether to apply this payment to commissions. | 

## Example

```python
from keap_core_v2_client.models.rest_create_payment_request import RestCreatePaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RestCreatePaymentRequest from a JSON string
rest_create_payment_request_instance = RestCreatePaymentRequest.from_json(json)
# print the JSON string representation of the object
print(RestCreatePaymentRequest.to_json())

# convert the object into a dict
rest_create_payment_request_dict = rest_create_payment_request_instance.to_dict()
# create an instance of RestCreatePaymentRequest from a dict
rest_create_payment_request_from_dict = RestCreatePaymentRequest.from_dict(rest_create_payment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


