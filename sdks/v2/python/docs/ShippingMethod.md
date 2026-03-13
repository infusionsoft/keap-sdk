# ShippingMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**international** | **bool** |  | [optional] 
**settings** | **object** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.shipping_method import ShippingMethod

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingMethod from a JSON string
shipping_method_instance = ShippingMethod.from_json(json)
# print the JSON string representation of the object
print(ShippingMethod.to_json())

# convert the object into a dict
shipping_method_dict = shipping_method_instance.to_dict()
# create an instance of ShippingMethod from a dict
shipping_method_from_dict = ShippingMethod.from_dict(shipping_method_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


