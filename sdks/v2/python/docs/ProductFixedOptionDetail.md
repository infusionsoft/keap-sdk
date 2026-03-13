# ProductFixedOptionDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The displayable label given to the option | [optional] 
**code** | **str** | An internal code to reference the option value | [optional] 
**price_adjustment** | **float** | Positive value indicates additional amount added to the original price. Negative value indicates subtraction from the original price. | [optional] 

## Example

```python
from keap_core_v2_client.models.product_fixed_option_detail import ProductFixedOptionDetail

# TODO update the JSON string below
json = "{}"
# create an instance of ProductFixedOptionDetail from a JSON string
product_fixed_option_detail_instance = ProductFixedOptionDetail.from_json(json)
# print the JSON string representation of the object
print(ProductFixedOptionDetail.to_json())

# convert the object into a dict
product_fixed_option_detail_dict = product_fixed_option_detail_instance.to_dict()
# create an instance of ProductFixedOptionDetail from a dict
product_fixed_option_detail_from_dict = ProductFixedOptionDetail.from_dict(product_fixed_option_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


