# ListProductsResponseList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**products** | [**List[RestV2ProductList]**](RestV2ProductList.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_products_response_list import ListProductsResponseList

# TODO update the JSON string below
json = "{}"
# create an instance of ListProductsResponseList from a JSON string
list_products_response_list_instance = ListProductsResponseList.from_json(json)
# print the JSON string representation of the object
print(ListProductsResponseList.to_json())

# convert the object into a dict
list_products_response_list_dict = list_products_response_list_instance.to_dict()
# create an instance of ListProductsResponseList from a dict
list_products_response_list_from_dict = ListProductsResponseList.from_dict(list_products_response_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


