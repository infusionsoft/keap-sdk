# ProductFixedOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | An internal code to reference the option value | [optional] 
**price_adjustment** | **float** | Positive value indicates additional amount added to the original price. Negative value indicates subtraction from the original price. | [optional] 
**value** | **str** | The displayable label given to the option | [optional] 

## Example

```python
from keap_core_v2_client.models.product_fixed_option import ProductFixedOption

# TODO update the JSON string below
json = "{}"
# create an instance of ProductFixedOption from a JSON string
product_fixed_option_instance = ProductFixedOption.from_json(json)
# print the JSON string representation of the object
print(ProductFixedOption.to_json())

# convert the object into a dict
product_fixed_option_dict = product_fixed_option_instance.to_dict()
# create an instance of ProductFixedOption from a dict
product_fixed_option_from_dict = ProductFixedOption.from_dict(product_fixed_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


