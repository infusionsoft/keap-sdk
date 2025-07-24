# ListRestShippingMethodsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipping_methods** | [**List[ShippingMethod]**](ShippingMethod.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_rest_shipping_methods_response import ListRestShippingMethodsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListRestShippingMethodsResponse from a JSON string
list_rest_shipping_methods_response_instance = ListRestShippingMethodsResponse.from_json(json)
# print the JSON string representation of the object
print(ListRestShippingMethodsResponse.to_json())

# convert the object into a dict
list_rest_shipping_methods_response_dict = list_rest_shipping_methods_response_instance.to_dict()
# create an instance of ListRestShippingMethodsResponse from a dict
list_rest_shipping_methods_response_from_dict = ListRestShippingMethodsResponse.from_dict(list_rest_shipping_methods_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


