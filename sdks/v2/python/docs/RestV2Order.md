# RestV2Order


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_payment** | **bool** |  | [optional] 
**allow_paypal** | **bool** |  | [optional] 
**contact** | [**BasicContact**](BasicContact.md) |  | [optional] 
**creation_time** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**invoice_number** | **str** |  | [optional] 
**lead_affiliate_id** | **str** |  | [optional] 
**modification_time** | **str** |  | [optional] 
**notes** | **str** |  | [optional] 
**order_items** | [**List[RestV2OrderItem]**](RestV2OrderItem.md) |  | [optional] 
**order_time** | **str** |  | [optional] 
**order_type** | **str** |  | [optional] 
**payment_plan** | [**PaymentPlan**](PaymentPlan.md) |  | [optional] 
**recurring** | **bool** |  | [optional] 
**refund_total** | **float** |  | [optional] 
**sales_affiliate_id** | **str** |  | [optional] 
**shipping_information** | [**ShippingInformation**](ShippingInformation.md) |  | [optional] 
**source_type** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**terms** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**total** | **float** |  | [optional] 
**total_due** | **float** |  | [optional] 
**total_paid** | **float** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.rest_v2_order import RestV2Order

# TODO update the JSON string below
json = "{}"
# create an instance of RestV2Order from a JSON string
rest_v2_order_instance = RestV2Order.from_json(json)
# print the JSON string representation of the object
print(RestV2Order.to_json())

# convert the object into a dict
rest_v2_order_dict = rest_v2_order_instance.to_dict()
# create an instance of RestV2Order from a dict
rest_v2_order_from_dict = RestV2Order.from_dict(rest_v2_order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


