# InvoiceOrderPayment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The invoice order payment ID. | [optional] 
**amount** | **float** | The payment amount. | [optional] 
**note** | **str** | A note about the payment. | [optional] 
**invoice_id** | **str** | The invoice ID. | [optional] 
**payment_id** | **str** | The payment ID. | [optional] 
**pay_time** | **datetime** | The date and time of payment. | [optional] 
**pay_status** | **str** | The payment status. | [optional] 
**last_updated_time** | **datetime** | When this payment record was last updated. | [optional] 
**skip_commission** | **bool** | Whether to skip commission for this payment. | [optional] 
**refund_invoice_payment_id** | **str** | The refund invoice payment ID, if this is a refund. | [optional] 

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


