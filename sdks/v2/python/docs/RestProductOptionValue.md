# RestProductOptionValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**index** | **int** |  | [optional] 
**is_default** | **bool** |  | [optional] 
**label** | **str** |  | [optional] 
**price_adjustment** | **float** |  | [optional] 
**sku** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.rest_product_option_value import RestProductOptionValue

# TODO update the JSON string below
json = "{}"
# create an instance of RestProductOptionValue from a JSON string
rest_product_option_value_instance = RestProductOptionValue.from_json(json)
# print the JSON string representation of the object
print(RestProductOptionValue.to_json())

# convert the object into a dict
rest_product_option_value_dict = rest_product_option_value_instance.to_dict()
# create an instance of RestProductOptionValue from a dict
rest_product_option_value_from_dict = RestProductOptionValue.from_dict(rest_product_option_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


