# CreateProductOptionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**required** | **bool** | Whether this option is required for product purchase. | [optional] [default to False]
**option_type** | **str** | The type of option. Possible valid values are LIST and TEXT. | 
**option_label** | **str** | The displayable name of the option (e.g. Size). Cannot be whitespace only. | [optional] 
**display_order** | **int** | The order in which this option will be displayed among other options. Minimum is 0. Lower values indicate higher priority in order. | [optional] 
**list_items** | [**List[CreateProductOptionListOption]**](CreateProductOptionListOption.md) | Appears only for option_type of LIST. A fixed list of available selectable items for this product option. | [optional] 
**text_rules** | [**CreateProductOptionTextOption**](CreateProductOptionTextOption.md) | The option is a user-defined free-form field. The settings define the restrictions on what can be entered. | [optional] 

## Example

```python
from keap_core_v2_client.models.create_product_option_request import CreateProductOptionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateProductOptionRequest from a JSON string
create_product_option_request_instance = CreateProductOptionRequest.from_json(json)
# print the JSON string representation of the object
print(CreateProductOptionRequest.to_json())

# convert the object into a dict
create_product_option_request_dict = create_product_option_request_instance.to_dict()
# create an instance of CreateProductOptionRequest from a dict
create_product_option_request_from_dict = CreateProductOptionRequest.from_dict(create_product_option_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


