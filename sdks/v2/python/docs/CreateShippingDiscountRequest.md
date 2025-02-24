# CreateShippingDiscountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criteria** | [**List[DiscountCriteria]**](DiscountCriteria.md) |  | [optional] 
**description** | **str** |  | [optional] 
**discount_type** | **str** |  | 
**discount_value** | **float** |  | 
**name** | **str** |  | 

## Example

```python
from keap_core_v2_client.models.create_shipping_discount_request import CreateShippingDiscountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateShippingDiscountRequest from a JSON string
create_shipping_discount_request_instance = CreateShippingDiscountRequest.from_json(json)
# print the JSON string representation of the object
print(CreateShippingDiscountRequest.to_json())

# convert the object into a dict
create_shipping_discount_request_dict = create_shipping_discount_request_instance.to_dict()
# create an instance of CreateShippingDiscountRequest from a dict
create_shipping_discount_request_from_dict = CreateShippingDiscountRequest.from_dict(create_shipping_discount_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


