# ProductInterest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discount_percent** | **int** | The percent to discount the product. Percent represented in a whole number, for example 10 is 10% | [optional] 
**id** | **str** | The product interest ID | [optional] 
**price** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**product_id** | **str** | The product ID | [optional] 
**quantity** | **int** | The quantity of product. | [optional] 

## Example

```python
from keap_core_v2_client.models.product_interest import ProductInterest

# TODO update the JSON string below
json = "{}"
# create an instance of ProductInterest from a JSON string
product_interest_instance = ProductInterest.from_json(json)
# print the JSON string representation of the object
print(ProductInterest.to_json())

# convert the object into a dict
product_interest_dict = product_interest_instance.to_dict()
# create an instance of ProductInterest from a dict
product_interest_from_dict = ProductInterest.from_dict(product_interest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


