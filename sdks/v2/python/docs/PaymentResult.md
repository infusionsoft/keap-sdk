# PaymentResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Payment result ID | [optional] 
**invoice_id** | **str** | Associated invoice ID | [optional] 
**payment_amount** | **float** | Amount paid | [optional] 
**payment_status_message** | **str** | Payment status | [optional] 
**transaction_id** | **str** | Transaction ID from payment processor | [optional] 

## Example

```python
from keap_core_v2_client.models.payment_result import PaymentResult

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentResult from a JSON string
payment_result_instance = PaymentResult.from_json(json)
# print the JSON string representation of the object
print(PaymentResult.to_json())

# convert the object into a dict
payment_result_dict = payment_result_instance.to_dict()
# create an instance of PaymentResult from a dict
payment_result_from_dict = PaymentResult.from_dict(payment_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


