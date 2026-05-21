# ListAssignedProductsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_product_categories** | [**List[AssignedProducts]**](AssignedProducts.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_assigned_products_response import ListAssignedProductsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAssignedProductsResponse from a JSON string
list_assigned_products_response_instance = ListAssignedProductsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAssignedProductsResponse.to_json())

# convert the object into a dict
list_assigned_products_response_dict = list_assigned_products_response_instance.to_dict()
# create an instance of ListAssignedProductsResponse from a dict
list_assigned_products_response_from_dict = ListAssignedProductsResponse.from_dict(list_assigned_products_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


