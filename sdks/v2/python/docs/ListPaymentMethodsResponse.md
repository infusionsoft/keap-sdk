# ListPaymentMethodsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** |  | [optional] 
**records** | [**List[PaymentMethod]**](PaymentMethod.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_payment_methods_response import ListPaymentMethodsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPaymentMethodsResponse from a JSON string
list_payment_methods_response_instance = ListPaymentMethodsResponse.from_json(json)
# print the JSON string representation of the object
print(ListPaymentMethodsResponse.to_json())

# convert the object into a dict
list_payment_methods_response_dict = list_payment_methods_response_instance.to_dict()
# create an instance of ListPaymentMethodsResponse from a dict
list_payment_methods_response_from_dict = ListPaymentMethodsResponse.from_dict(list_payment_methods_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


