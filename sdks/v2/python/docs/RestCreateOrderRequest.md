# RestCreateOrderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_id** | **str** |  | 
**lead_affiliate_id** | **str** |  | [optional] 
**notes** | **str** |  | [optional] 
**order_items** | [**List[CreateOrderItemRequest]**](CreateOrderItemRequest.md) |  | 
**order_time** | **str** |  | 
**order_title** | **str** |  | 
**order_type** | **str** |  | 
**promo_codes** | **List[str]** | Uses multiple strings as promo codes. The corresponding discount will be applied to the order. | [optional] 
**sales_affiliate_id** | **str** |  | [optional] 
**shipping_address** | [**AddressInformation**](AddressInformation.md) |  | [optional] 
**terms** | **str** |  | [optional] 

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


