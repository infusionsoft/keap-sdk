# ListPayments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payments** | [**List[Payment]**](Payment.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_payments import ListPayments

# TODO update the JSON string below
json = "{}"
# create an instance of ListPayments from a JSON string
list_payments_instance = ListPayments.from_json(json)
# print the JSON string representation of the object
print(ListPayments.to_json())

# convert the object into a dict
list_payments_dict = list_payments_instance.to_dict()
# create an instance of ListPayments from a dict
list_payments_from_dict = ListPayments.from_dict(list_payments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


