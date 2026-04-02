# ListTransactions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactions** | [**List[TransactionV2]**](TransactionV2.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_transactions import ListTransactions

# TODO update the JSON string below
json = "{}"
# create an instance of ListTransactions from a JSON string
list_transactions_instance = ListTransactions.from_json(json)
# print the JSON string representation of the object
print(ListTransactions.to_json())

# convert the object into a dict
list_transactions_dict = list_transactions_instance.to_dict()
# create an instance of ListTransactions from a dict
list_transactions_from_dict = ListTransactions.from_dict(list_transactions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


