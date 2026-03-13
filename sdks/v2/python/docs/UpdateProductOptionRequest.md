# UpdateProductOptionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**required** | **bool** | Whether this option is required for product purchase. | [optional] 
**option_label** | **str** | The displayable name of the option (e.g. Size). Cannot be whitespace only. | [optional] 
**display_order** | **int** | The order in which this option will be displayed among other options. Minimum is 0. Lower values indicate higher priority in order. | [optional] 
**minimum_characters** | **int** | Used only for option_type of &#x60;TEXT&#x60;. Minimum allowable characters. Minimum is 0. | [optional] 
**maximum_characters** | **int** | Used only for option_type of &#x60;TEXT&#x60;. Maximum allowable characters. Minimum is 0. | [optional] 
**allow_spaces** | **bool** | Used only for option_type of &#x60;TEXT&#x60;. Whether or not to allow whitespace in the text. | [optional] 
**only_starts_with** | **str** | Used only for option_type of &#x60;TEXT&#x60;.  Restricts the text to start with certain character types. Valid values are NONE, LETTER, DIGIT, BOTH. | [optional] 
**only_ends_with** | **str** | Used only for option_type of &#x60;TEXT&#x60;. Restricts the text to end with certain character types. Valid values are NONE, LETTER, DIGIT, BOTH. | [optional] 
**only_contains** | **str** | Used only for option_type of &#x60;TEXT&#x60;. Restricts the text to contain certain character types. Valid values are NONE, LETTER, DIGIT, BOTH. | [optional] 
**error_message** | **str** | Used only for option_type of &#x60;TEXT&#x60;. An error message to display if any rules are broken. Cannot be whitespace only. | [optional] 

## Example

```python
from keap_core_v2_client.models.update_product_option_request import UpdateProductOptionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateProductOptionRequest from a JSON string
update_product_option_request_instance = UpdateProductOptionRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateProductOptionRequest.to_json())

# convert the object into a dict
update_product_option_request_dict = update_product_option_request_instance.to_dict()
# create an instance of UpdateProductOptionRequest from a dict
update_product_option_request_from_dict = UpdateProductOptionRequest.from_dict(update_product_option_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


