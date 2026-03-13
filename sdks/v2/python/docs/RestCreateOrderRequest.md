# RestCreateOrderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notes** | **str** | Internal notes | [optional] 
**terms** | **str** | Order terms | [optional] 
**contact_id** | **str** | ID of the contact for this order | 
**order_items** | [**List[CreateOrderItemRequest]**](CreateOrderItemRequest.md) | List of items to include in the order | [optional] 
**order_title** | **str** | Title for the order | 
**order_time** | **datetime** | The date and time of the order. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | 
**order_type** | **str** | The order type. | 
**promo_codes** | **List[str]** | Uses multiple strings as promo codes. The corresponding discount will be applied to the order. | [optional] 
**lead_affiliate_id** | **str** | Lead affiliate ID | [optional] 
**sales_affiliate_id** | **str** | Sales affiliate ID | [optional] 
**shipping_address** | [**AddressInformation**](AddressInformation.md) | Shipping address for the order | [optional] 

## Example

```python
from keap_core_v2_client.models.rest_create_order_request import RestCreateOrderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RestCreateOrderRequest from a JSON string
rest_create_order_request_instance = RestCreateOrderRequest.from_json(json)
# print the JSON string representation of the object
print(RestCreateOrderRequest.to_json())

# convert the object into a dict
rest_create_order_request_dict = rest_create_order_request_instance.to_dict()
# create an instance of RestCreateOrderRequest from a dict
rest_create_order_request_from_dict = RestCreateOrderRequest.from_dict(rest_create_order_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


