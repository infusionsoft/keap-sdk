# ListEmailsSentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | [**List[EmailSent]**](EmailSent.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_emails_sent_response import ListEmailsSentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListEmailsSentResponse from a JSON string
list_emails_sent_response_instance = ListEmailsSentResponse.from_json(json)
# print the JSON string representation of the object
print(ListEmailsSentResponse.to_json())

# convert the object into a dict
list_emails_sent_response_dict = list_emails_sent_response_instance.to_dict()
# create an instance of ListEmailsSentResponse from a dict
list_emails_sent_response_from_dict = ListEmailsSentResponse.from_dict(list_emails_sent_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


