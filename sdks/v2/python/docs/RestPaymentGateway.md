# RestPaymentGateway


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_account_id** | **str** |  | [optional] 
**merchant_account_name** | **str** |  | [optional] 
**use_default** | **bool** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.rest_payment_gateway import RestPaymentGateway

# TODO update the JSON string below
json = "{}"
# create an instance of RestPaymentGateway from a JSON string
rest_payment_gateway_instance = RestPaymentGateway.from_json(json)
# print the JSON string representation of the object
print(RestPaymentGateway.to_json())

# convert the object into a dict
rest_payment_gateway_dict = rest_payment_gateway_instance.to_dict()
# create an instance of RestPaymentGateway from a dict
rest_payment_gateway_from_dict = RestPaymentGateway.from_dict(rest_payment_gateway_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


