# AssignProductsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_ids** | **List[str]** |  | 

## Example

```python
from keap_core_v2_client.models.assign_products_request import AssignProductsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssignProductsRequest from a JSON string
assign_products_request_instance = AssignProductsRequest.from_json(json)
# print the JSON string representation of the object
print(AssignProductsRequest.to_json())

# convert the object into a dict
assign_products_request_dict = assign_products_request_instance.to_dict()
# create an instance of AssignProductsRequest from a dict
assign_products_request_from_dict = AssignProductsRequest.from_dict(assign_products_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


