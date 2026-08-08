# EmailTemplateSummary

Email template metadata returned by the list endpoint. Does not include body content; use GET /v2/emails/templates/{id} for full detail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The id of the template | [optional] 
**piece_title** | **str** | The title of the template | [optional] 
**categories** | **List[str]** | The categories associated with the email | [optional] 
**from_address** | **str** | The from address of the email | [optional] 
**to_address** | **str** | The to address of the email | [optional] 
**cc_address** | **str** | The cc address of the email | [optional] 
**bcc_address** | **str** | The bcc address of the email | [optional] 
**subject** | **str** | The subject of the email | [optional] 
**content_type** | **str** | The content type of the email | [optional] 
**merge_context** | **str** | The merge context of the email | [optional] 

## Example

```python
from keap_core_v2_client.models.email_template_summary import EmailTemplateSummary

# TODO update the JSON string below
json = "{}"
# create an instance of EmailTemplateSummary from a JSON string
email_template_summary_instance = EmailTemplateSummary.from_json(json)
# print the JSON string representation of the object
print(EmailTemplateSummary.to_json())

# convert the object into a dict
email_template_summary_dict = email_template_summary_instance.to_dict()
# create an instance of EmailTemplateSummary from a dict
email_template_summary_from_dict = EmailTemplateSummary.from_dict(email_template_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


