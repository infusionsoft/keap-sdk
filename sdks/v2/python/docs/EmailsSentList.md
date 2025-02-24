# EmailsSentList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | [**List[EmailSentWithContent]**](EmailSentWithContent.md) |  | [optional] 
**errors** | [**List[EmailSentCreateError]**](EmailSentCreateError.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.emails_sent_list import EmailsSentList

# TODO update the JSON string below
json = "{}"
# create an instance of EmailsSentList from a JSON string
emails_sent_list_instance = EmailsSentList.from_json(json)
# print the JSON string representation of the object
print(EmailsSentList.to_json())

# convert the object into a dict
emails_sent_list_dict = emails_sent_list_instance.to_dict()
# create an instance of EmailsSentList from a dict
emails_sent_list_from_dict = EmailsSentList.from_dict(emails_sent_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


