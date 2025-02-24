# PaymentMethodList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** |  | [optional] 
**records** | [**List[RestPaymentMethod]**](RestPaymentMethod.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.payment_method_list import PaymentMethodList

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentMethodList from a JSON string
payment_method_list_instance = PaymentMethodList.from_json(json)
# print the JSON string representation of the object
print(PaymentMethodList.to_json())

# convert the object into a dict
payment_method_list_dict = payment_method_list_instance.to_dict()
# create an instance of PaymentMethodList from a dict
payment_method_list_from_dict = PaymentMethodList.from_dict(payment_method_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


