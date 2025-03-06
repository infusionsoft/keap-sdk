# EmailSendTemplateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_field** | **str** | Email field of each Contact record to address the email to, such as &#39;Email&#39;, &#39;EmailAddress2&#39;, &#39;EmailAddress3&#39; or &#39;_CustomFieldName&#39;, defaulting to the contact&#39;s primary email | [optional] 
**contact_ids** | **List[str]** | List of contacts to send | [optional] 
**template_id** | **str** | Template ID | [optional] 
**user_id** | **str** | user id sending the email | [optional] 

## Example

```python
from keap_core_v2_client.models.email_send_template_request import EmailSendTemplateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EmailSendTemplateRequest from a JSON string
email_send_template_request_instance = EmailSendTemplateRequest.from_json(json)
# print the JSON string representation of the object
print(EmailSendTemplateRequest.to_json())

# convert the object into a dict
email_send_template_request_dict = email_send_template_request_instance.to_dict()
# create an instance of EmailSendTemplateRequest from a dict
email_send_template_request_from_dict = EmailSendTemplateRequest.from_dict(email_send_template_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


