# Order


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_payment** | **bool** | Whether or not card-related payments should be allowed on this order. Applies only to Keap Pro/Max edition. | [optional] 
**allow_paypal** | **bool** | Whether or not PayPal payments should be allowed on this order. Applies only to Keap Pro/Max edition. | [optional] 
**contact** | [**BasicContact**](BasicContact.md) |  | [optional] 
**creation_time** | **str** | When this order was originally created. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**files** | [**List[InvoiceFile]**](InvoiceFile.md) | A list of attached files to this order. Applies only to Keap Pro/Max edition. | [optional] 
**id** | **str** |  | [optional] 
**invoice_number** | **str** | The associated invoice identifier. Applies only to Keap Pro/Max edition. Feature not yet supported. | [optional] 
**lead_affiliate_id** | **str** |  | [optional] 
**modification_time** | **str** | When this order was changed. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**notes** | **str** |  | [optional] 
**order_items** | [**List[OrderItem]**](OrderItem.md) |  | [optional] 
**order_time** | **str** | A user-defined date and time of the order. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**order_type** | **str** | The order type. Valid values are: ONLINE, OFFLINE. | [optional] 
**payment_plan** | [**PaymentPlan**](PaymentPlan.md) |  | [optional] 
**refund_total** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**sales_affiliate_id** | **str** |  | [optional] 
**shipping_information** | [**ShippingInformation**](ShippingInformation.md) |  | [optional] 
**source_type** | **str** | The source where the order was created. Valid values include: API, CHECKOUT_FORM, INVOICE, MANUAL_PAYMENT, QUICKBOOKS, UNKNOWN. | [optional] 
**status** | **str** | The order status. Valid values are: DRAFT, SENT, VIEWED, PAID. | [optional] 
**terms** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**total** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**total_due** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**total_paid** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.order import Order

# TODO update the JSON string below
json = "{}"
# create an instance of Order from a JSON string
order_instance = Order.from_json(json)
# print the JSON string representation of the object
print(Order.to_json())

# convert the object into a dict
order_dict = order_instance.to_dict()
# create an instance of Order from a dict
order_from_dict = Order.from_dict(order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


