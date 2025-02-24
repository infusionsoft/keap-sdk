# EmailSentWithContent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clicked_time** | **str** |  | [optional] 
**contact_id** | **str** |  | [optional] 
**headers** | **str** |  | [optional] 
**html_content** | **str** | Base64 encoded HTML | [optional] 
**id** | **str** |  | [optional] 
**opened_time** | **str** |  | [optional] 
**original_provider** | **str** |  | [optional] 
**original_provider_id** | **str** |  | [optional] 
**plain_content** | **str** | Base64 encoded plain text | [optional] 
**provider_source_id** | **str** |  | [optional] 
**received_time** | **str** |  | [optional] 
**sent_from_address** | **str** |  | [optional] 
**sent_from_reply_address** | **str** |  | [optional] 
**sent_time** | **str** |  | [optional] 
**sent_to_address** | **str** |  | [optional] 
**sent_to_bcc_address_list** | **List[str]** |  | [optional] 
**sent_to_cc_address_list** | **List[str]** |  | [optional] 
**subject** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.email_sent_with_content import EmailSentWithContent

# TODO update the JSON string below
json = "{}"
# create an instance of EmailSentWithContent from a JSON string
email_sent_with_content_instance = EmailSentWithContent.from_json(json)
# print the JSON string representation of the object
print(EmailSentWithContent.to_json())

# convert the object into a dict
email_sent_with_content_dict = email_sent_with_content_instance.to_dict()
# create an instance of EmailSentWithContent from a dict
email_sent_with_content_from_dict = EmailSentWithContent.from_dict(email_sent_with_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


