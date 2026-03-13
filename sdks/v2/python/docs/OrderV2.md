# OrderV2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the order | [optional] 
**title** | **str** | Title of the order | [optional] 
**status** | **str** | The order status. | [optional] 
**total** | [**CurrencyValue**](CurrencyValue.md) | The total amount of the order. | [optional] 
**contact** | [**BasicContact**](BasicContact.md) | Contact associated with this order | [optional] 
**notes** | **str** | Internal notes for the order | [optional] 
**terms** | **str** | Order terms and conditions | [optional] 
**order_type** | **str** | The order type. | [optional] 
**source_type** | **str** | The source where the order was created. | [optional] 
**creation_time** | **datetime** | When this order was originally created. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**modification_time** | **datetime** | When this order was changed. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**order_time** | **datetime** | A user-defined date and time of the order. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**lead_affiliate_id** | **str** | ID of the lead affiliate | [optional] 
**sales_affiliate_id** | **str** | ID of the sales affiliate | [optional] 
**total_paid** | [**CurrencyValue**](CurrencyValue.md) | The total amount paid to the order. | [optional] 
**total_due** | [**CurrencyValue**](CurrencyValue.md) | The total amount of the order that is due. This is not current balance. | [optional] 
**shipping_information** | [**ShippingInformation**](ShippingInformation.md) | Shipping details for the order | [optional] 
**refund_total** | [**CurrencyValue**](CurrencyValue.md) | Total amount refunded | [optional] 
**allow_payment** | **bool** | Whether or not card-related payments should be allowed on this order. Applies only to Keap Pro/Max edition. | [optional] 
**allow_paypal** | **bool** | Whether or not PayPal payments should be allowed on this order. Applies only to Keap Pro/Max edition. | [optional] 
**order_items** | [**List[OrderItem]**](OrderItem.md) | List of items in the order | [optional] 
**payment_plan** | [**PaymentPlan**](PaymentPlan.md) | Payment plan details if applicable | [optional] 
**invoice_number** | **str** | The associated invoice identifier. Applies only to Keap Pro/Max edition. Feature not yet supported. | [optional] 
**files** | [**List[InvoiceFile]**](InvoiceFile.md) | A list of attached files to this order. Applies only to Keap Pro/Max edition. | [optional] 
**credit_status** | **str** | Credit status of the order | [optional] 
**promo_code** | **str** | Promotional code applied | [optional] 
**refund_status** | **str** | Refund status | [optional] 
**synced** | **bool** | Whether order is synced with external systems | [optional] 
**invoice_id** | **str** | Associated invoice ID | [optional] 

## Example

```python
from keap_core_v2_client.models.order_v2 import OrderV2

# TODO update the JSON string below
json = "{}"
# create an instance of OrderV2 from a JSON string
order_v2_instance = OrderV2.from_json(json)
# print the JSON string representation of the object
print(OrderV2.to_json())

# convert the object into a dict
order_v2_dict = order_v2_instance.to_dict()
# create an instance of OrderV2 from a dict
order_v2_from_dict = OrderV2.from_dict(order_v2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


