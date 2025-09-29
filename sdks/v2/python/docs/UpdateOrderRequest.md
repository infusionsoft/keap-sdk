# UpdateOrderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_id** | **str** |  | [optional] 
**lead_affiliate_id** | **str** |  | [optional] 
**notes** | **str** |  | [optional] 
**order_time** | **str** | The date and time of the order. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**order_title** | **str** |  | [optional] 
**order_type** | **str** | The order type. Valid values are: ONLINE, OFFLINE. | [optional] 
**payment_plan** | [**UpdatedPaymentPlan**](UpdatedPaymentPlan.md) |  | [optional] 
**promo_codes** | **List[str]** | Uses multiple strings as promo codes. The corresponding discount will be applied to the order. | [optional] 
**sales_affiliate_id** | **str** |  | [optional] 
**shipping_address** | [**AddressInformation**](AddressInformation.md) |  | [optional] 
**terms** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.update_order_request import UpdateOrderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrderRequest from a JSON string
update_order_request_instance = UpdateOrderRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrderRequest.to_json())

# convert the object into a dict
update_order_request_dict = update_order_request_instance.to_dict()
# create an instance of UpdateOrderRequest from a dict
update_order_request_from_dict = UpdateOrderRequest.from_dict(update_order_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


