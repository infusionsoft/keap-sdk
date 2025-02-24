# CancelSubscriptionsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.cancel_subscriptions_request import CancelSubscriptionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CancelSubscriptionsRequest from a JSON string
cancel_subscriptions_request_instance = CancelSubscriptionsRequest.from_json(json)
# print the JSON string representation of the object
print(CancelSubscriptionsRequest.to_json())

# convert the object into a dict
cancel_subscriptions_request_dict = cancel_subscriptions_request_instance.to_dict()
# create an instance of CancelSubscriptionsRequest from a dict
cancel_subscriptions_request_from_dict = CancelSubscriptionsRequest.from_dict(cancel_subscriptions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


