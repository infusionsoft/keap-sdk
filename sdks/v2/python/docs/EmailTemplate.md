# EmailTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bcc_address** | **str** | The bcc address of the email | [optional] 
**categories** | **List[str]** | The categories associated with the email | [optional] 
**cc_address** | **str** | The cc address of the email | [optional] 
**content_type** | **str** | The content type of the email | [optional] 
**from_address** | **str** | The from address of the email | [optional] 
**html_body** | **str** | The HTML body of the email | [optional] 
**merge_context** | **str** | The merge context of the email | [optional] 
**piece_title** | **str** | The title of the piece | [optional] 
**subject** | **str** | The subject of the email | [optional] 
**text_body** | **str** | The text body of the email | [optional] 
**to_address** | **str** | The to address of the email | [optional] 

## Example

```python
from keap_core_v2_client.models.email_template import EmailTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of EmailTemplate from a JSON string
email_template_instance = EmailTemplate.from_json(json)
# print the JSON string representation of the object
print(EmailTemplate.to_json())

# convert the object into a dict
email_template_dict = email_template_instance.to_dict()
# create an instance of EmailTemplate from a dict
email_template_from_dict = EmailTemplate.from_dict(email_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


