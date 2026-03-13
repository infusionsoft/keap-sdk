# UpdateProductInventoryRequestDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] 
**quantity** | **int** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.update_product_inventory_request_detail import UpdateProductInventoryRequestDetail

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateProductInventoryRequestDetail from a JSON string
update_product_inventory_request_detail_instance = UpdateProductInventoryRequestDetail.from_json(json)
# print the JSON string representation of the object
print(UpdateProductInventoryRequestDetail.to_json())

# convert the object into a dict
update_product_inventory_request_detail_dict = update_product_inventory_request_detail_instance.to_dict()
# create an instance of UpdateProductInventoryRequestDetail from a dict
update_product_inventory_request_detail_from_dict = UpdateProductInventoryRequestDetail.from_dict(update_product_inventory_request_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


