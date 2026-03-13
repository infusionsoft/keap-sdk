# CreateProductOptionListOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_label** | **str** | The displayable name of the option item. Cannot be whitespace only. | [optional] 
**item_code** | **str** | An internal code (e.g. sku) to associate the item option. | [optional] 
**item_display_order** | **int** | The order in which this item will be displayed among other items. Minimum is 0. Lower values indicate higher priority in order. | [optional] 
**price_adjustment** | **float** | An amount to adjust to the product price is selected. Negative value indicates subtraction from price. | [optional] 

## Example

```python
from keap_core_v2_client.models.create_product_option_list_option import CreateProductOptionListOption

# TODO update the JSON string below
json = "{}"
# create an instance of CreateProductOptionListOption from a JSON string
create_product_option_list_option_instance = CreateProductOptionListOption.from_json(json)
# print the JSON string representation of the object
print(CreateProductOptionListOption.to_json())

# convert the object into a dict
create_product_option_list_option_dict = create_product_option_list_option_instance.to_dict()
# create an instance of CreateProductOptionListOption from a dict
create_product_option_list_option_from_dict = CreateProductOptionListOption.from_dict(create_product_option_list_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


