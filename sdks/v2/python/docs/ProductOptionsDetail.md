# ProductOptionsDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The option name | [optional] 
**type** | **str** | The option type. If FIXED, then fixed_options will be returned. If VARIABLE, then variable_setting will be returned. | [optional] 
**required** | **bool** | If the user is required to select/fill in an option for the product | [optional] 
**fixed_options** | [**List[ProductFixedOptionDetail]**](ProductFixedOptionDetail.md) | List of option values for the fixed option | [optional] 
**variable_setting** | [**ProductVariableSettingDetail**](ProductVariableSettingDetail.md) | The option is a user-defined free-form field. The settings define the restrictions on what can be entered. | [optional] 

## Example

```python
from keap_core_v2_client.models.product_options_detail import ProductOptionsDetail

# TODO update the JSON string below
json = "{}"
# create an instance of ProductOptionsDetail from a JSON string
product_options_detail_instance = ProductOptionsDetail.from_json(json)
# print the JSON string representation of the object
print(ProductOptionsDetail.to_json())

# convert the object into a dict
product_options_detail_dict = product_options_detail_instance.to_dict()
# create an instance of ProductOptionsDetail from a dict
product_options_detail_from_dict = ProductOptionsDetail.from_dict(product_options_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


