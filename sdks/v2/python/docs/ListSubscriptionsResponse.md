# ListSubscriptionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** |  | [optional] 
**subscriptions** | [**List[RestSubscriptionV2]**](RestSubscriptionV2.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_subscriptions_response import ListSubscriptionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSubscriptionsResponse from a JSON string
list_subscriptions_response_instance = ListSubscriptionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListSubscriptionsResponse.to_json())

# convert the object into a dict
list_subscriptions_response_dict = list_subscriptions_response_instance.to_dict()
# create an instance of ListSubscriptionsResponse from a dict
list_subscriptions_response_from_dict = ListSubscriptionsResponse.from_dict(list_subscriptions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


