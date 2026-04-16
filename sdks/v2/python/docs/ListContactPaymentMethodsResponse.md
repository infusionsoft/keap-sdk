# ListContactPaymentMethodsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**records** | [**List[PaymentMethod]**](PaymentMethod.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_contact_payment_methods_response import ListContactPaymentMethodsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListContactPaymentMethodsResponse from a JSON string
list_contact_payment_methods_response_instance = ListContactPaymentMethodsResponse.from_json(json)
# print the JSON string representation of the object
print(ListContactPaymentMethodsResponse.to_json())

# convert the object into a dict
list_contact_payment_methods_response_dict = list_contact_payment_methods_response_instance.to_dict()
# create an instance of ListContactPaymentMethodsResponse from a dict
list_contact_payment_methods_response_from_dict = ListContactPaymentMethodsResponse.from_dict(list_contact_payment_methods_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


