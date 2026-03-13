# ShippingDiscount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for this shipping discount | [optional] 
**name** | **str** | Name of the discount | [optional] 
**description** | **str** | Description of the discount | [optional] 
**criteria** | [**List[DiscountCriteria]**](DiscountCriteria.md) | List of criteria that must be met for this discount to apply | [optional] 
**discount_type** | **str** | Type of discount: AMOUNT (fixed amount) or PERCENT (percentage) | [optional] 
**discount_value** | **float** | Value of the discount (amount or percentage depending on discount_type) | [optional] 

## Example

```python
from keap_core_v2_client.models.shipping_discount import ShippingDiscount

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingDiscount from a JSON string
shipping_discount_instance = ShippingDiscount.from_json(json)
# print the JSON string representation of the object
print(ShippingDiscount.to_json())

# convert the object into a dict
shipping_discount_dict = shipping_discount_instance.to_dict()
# create an instance of ShippingDiscount from a dict
shipping_discount_from_dict = ShippingDiscount.from_dict(shipping_discount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


