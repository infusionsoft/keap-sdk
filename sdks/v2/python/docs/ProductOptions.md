# ProductOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixed_options** | [**List[ProductFixedOption]**](ProductFixedOption.md) | List of option values for the fixed option | [optional] 
**name** | **str** | The option name | [optional] 
**required** | **bool** | If the user is required to select/fill in an option for the product | [optional] 
**type** | **str** | Can be FIXED or VARIABLE. If FIXED, then fixed_options will be returned. If VARIABLE, then variable_setting will be returned. | [optional] 
**variable_setting** | [**ProductVariableSetting**](ProductVariableSetting.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.product_options import ProductOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ProductOptions from a JSON string
product_options_instance = ProductOptions.from_json(json)
# print the JSON string representation of the object
print(ProductOptions.to_json())

# convert the object into a dict
product_options_dict = product_options_instance.to_dict()
# create an instance of ProductOptions from a dict
product_options_from_dict = ProductOptions.from_dict(product_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


