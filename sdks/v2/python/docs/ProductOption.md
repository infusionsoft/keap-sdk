# ProductOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique id of the product option | [optional] 
**required** | **bool** | Whether this option is required for product purchase. | [optional] 
**option_label** | **str** | The displayable name of the option. E.g. Size | [optional] 
**product_id** | **str** | The product id that this option belongs to. | [optional] 
**option_type** | **str** | The type of option. Possible valid values are LIST and TEXT. | [optional] 
**display_order** | **int** | The order in which this option will be displayed among other options. Minimum is 0. Lower values indicate higher priority in order. | [optional] 
**list_items** | [**List[ListOption]**](ListOption.md) | Appears only for option_type of LIST. A fixed list of available selectable items for this product option. e.g (Medium) | [optional] 
**text_rules** | [**TextOption**](TextOption.md) | The option is a user-defined free-form field. The settings define the restrictions on what can be entered. | [optional] 

## Example

```python
from keap_core_v2_client.models.product_option import ProductOption

# TODO update the JSON string below
json = "{}"
# create an instance of ProductOption from a JSON string
product_option_instance = ProductOption.from_json(json)
# print the JSON string representation of the object
print(ProductOption.to_json())

# convert the object into a dict
product_option_dict = product_option_instance.to_dict()
# create an instance of ProductOption from a dict
product_option_from_dict = ProductOption.from_dict(product_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


