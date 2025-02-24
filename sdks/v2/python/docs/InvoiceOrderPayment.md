# InvoiceOrderPayment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** |  | [optional] 
**id** | **str** |  | [optional] 
**invoice_id** | **str** |  | [optional] 
**last_updated_time** | **str** |  | [optional] 
**note** | **str** |  | [optional] 
**pay_status** | **str** |  | [optional] 
**pay_time** | **str** |  | [optional] 
**payment_id** | **str** |  | [optional] 
**refund_invoice_payment_id** | **str** |  | [optional] 
**skip_commission** | **bool** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.invoice_order_payment import InvoiceOrderPayment

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceOrderPayment from a JSON string
invoice_order_payment_instance = InvoiceOrderPayment.from_json(json)
# print the JSON string representation of the object
print(InvoiceOrderPayment.to_json())

# convert the object into a dict
invoice_order_payment_dict = invoice_order_payment_instance.to_dict()
# create an instance of InvoiceOrderPayment from a dict
invoice_order_payment_from_dict = InvoiceOrderPayment.from_dict(invoice_order_payment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


