# ListOrderPaymentsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoice_order_payments** | [**List[InvoiceOrderPayment]**](InvoiceOrderPayment.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_order_payments_response import ListOrderPaymentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListOrderPaymentsResponse from a JSON string
list_order_payments_response_instance = ListOrderPaymentsResponse.from_json(json)
# print the JSON string representation of the object
print(ListOrderPaymentsResponse.to_json())

# convert the object into a dict
list_order_payments_response_dict = list_order_payments_response_instance.to_dict()
# create an instance of ListOrderPaymentsResponse from a dict
list_order_payments_response_from_dict = ListOrderPaymentsResponse.from_dict(list_order_payments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


