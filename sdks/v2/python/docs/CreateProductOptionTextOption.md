# CreateProductOptionTextOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minimum_characters** | **int** | Minimum allowable characters. Minimum is 0. | [optional] 
**maximum_characters** | **int** | Maximum allowable characters. Minimum is 0. | [optional] 
**allow_spaces** | **bool** | Whether or not to allow whitespace in the text. | [optional] 
**only_starts_with** | **str** | Restricts the text to start with certain character types. Valid values are NONE, LETTER, DIGIT, BOTH. | [optional] 
**only_ends_with** | **str** | Restricts the text to end with certain character types. Valid values are NONE, LETTER, DIGIT, BOTH. | [optional] 
**only_contains** | **str** | Restricts the text to contain certain character types. Valid values are NONE, LETTER, DIGIT, BOTH. | [optional] 
**error_message** | **str** | An error message to display if any rules are broken. Cannot be whitespace only. | [optional] 

## Example

```python
from keap_core_v2_client.models.create_product_option_text_option import CreateProductOptionTextOption

# TODO update the JSON string below
json = "{}"
# create an instance of CreateProductOptionTextOption from a JSON string
create_product_option_text_option_instance = CreateProductOptionTextOption.from_json(json)
# print the JSON string representation of the object
print(CreateProductOptionTextOption.to_json())

# convert the object into a dict
create_product_option_text_option_dict = create_product_option_text_option_instance.to_dict()
# create an instance of CreateProductOptionTextOption from a dict
create_product_option_text_option_from_dict = CreateProductOptionTextOption.from_dict(create_product_option_text_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


