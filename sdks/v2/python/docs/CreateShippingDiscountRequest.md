# CreateShippingDiscountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the discount | 
**description** | **str** | Description of the discount | [optional] 
**criteria** | [**List[DiscountCriteria]**](DiscountCriteria.md) | List of criteria that must be met for this discount to apply | [optional] 
**discount_type** | **str** | Type of discount: AMOUNT (fixed amount) or PERCENT (percentage) | 
**discount_value** | **float** | Value of the discount (amount or percentage depending on discount_type) | 

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


