# RestProductOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_spaces** | **bool** |  | [optional] 
**can_contain_character** | **bool** |  | [optional] 
**can_contain_number** | **bool** |  | [optional] 
**can_end_with_character** | **bool** |  | [optional] 
**can_end_with_number** | **bool** |  | [optional] 
**can_start_with_character** | **bool** |  | [optional] 
**can_start_with_number** | **bool** |  | [optional] 
**display_index** | **int** |  | [optional] 
**id** | **str** |  | [optional] 
**label** | **str** |  | [optional] 
**max_chars** | **int** |  | [optional] 
**min_chars** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**required** | **bool** |  | [optional] 
**text_message** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**values** | [**List[RestProductOptionValue]**](RestProductOptionValue.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.rest_product_option import RestProductOption

# TODO update the JSON string below
json = "{}"
# create an instance of RestProductOption from a JSON string
rest_product_option_instance = RestProductOption.from_json(json)
# print the JSON string representation of the object
print(RestProductOption.to_json())

# convert the object into a dict
rest_product_option_dict = rest_product_option_instance.to_dict()
# create an instance of RestProductOption from a dict
rest_product_option_from_dict = RestProductOption.from_dict(rest_product_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


