# AssignProductCategoriesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_category_ids** | **List[str]** |  | 

## Example

```python
from keap_core_v2_client.models.assign_product_categories_request import AssignProductCategoriesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssignProductCategoriesRequest from a JSON string
assign_product_categories_request_instance = AssignProductCategoriesRequest.from_json(json)
# print the JSON string representation of the object
print(AssignProductCategoriesRequest.to_json())

# convert the object into a dict
assign_product_categories_request_dict = assign_product_categories_request_instance.to_dict()
# create an instance of AssignProductCategoriesRequest from a dict
assign_product_categories_request_from_dict = AssignProductCategoriesRequest.from_dict(assign_product_categories_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


