# ListSubscriptionsResponseList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscriptions** | [**List[SubscriptionList]**](SubscriptionList.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_subscriptions_response_list import ListSubscriptionsResponseList

# TODO update the JSON string below
json = "{}"
# create an instance of ListSubscriptionsResponseList from a JSON string
list_subscriptions_response_list_instance = ListSubscriptionsResponseList.from_json(json)
# print the JSON string representation of the object
print(ListSubscriptionsResponseList.to_json())

# convert the object into a dict
list_subscriptions_response_list_dict = list_subscriptions_response_list_instance.to_dict()
# create an instance of ListSubscriptionsResponseList from a dict
list_subscriptions_response_list_from_dict = ListSubscriptionsResponseList.from_dict(list_subscriptions_response_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


