# ListOrders


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** |  | [optional] 
**orders** | [**List[RestV2Order]**](RestV2Order.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_orders import ListOrders

# TODO update the JSON string below
json = "{}"
# create an instance of ListOrders from a JSON string
list_orders_instance = ListOrders.from_json(json)
# print the JSON string representation of the object
print(ListOrders.to_json())

# convert the object into a dict
list_orders_dict = list_orders_instance.to_dict()
# create an instance of ListOrders from a dict
list_orders_from_dict = ListOrders.from_dict(list_orders_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


