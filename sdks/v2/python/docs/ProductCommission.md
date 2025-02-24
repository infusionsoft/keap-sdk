# ProductCommission


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dollar_amount** | **float** |  | [optional] 
**percentage** | **float** |  | [optional] 
**product_id** | **str** |  | [optional] 
**product_name** | **str** |  | [optional] 
**product_price** | **float** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.product_commission import ProductCommission

# TODO update the JSON string below
json = "{}"
# create an instance of ProductCommission from a JSON string
product_commission_instance = ProductCommission.from_json(json)
# print the JSON string representation of the object
print(ProductCommission.to_json())

# convert the object into a dict
product_commission_dict = product_commission_instance.to_dict()
# create an instance of ProductCommission from a dict
product_commission_from_dict = ProductCommission.from_dict(product_commission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


