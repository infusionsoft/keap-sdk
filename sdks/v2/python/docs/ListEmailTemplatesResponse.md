# ListEmailTemplatesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_templates** | [**List[EmailTemplateSummary]**](EmailTemplateSummary.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_email_templates_response import ListEmailTemplatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListEmailTemplatesResponse from a JSON string
list_email_templates_response_instance = ListEmailTemplatesResponse.from_json(json)
# print the JSON string representation of the object
print(ListEmailTemplatesResponse.to_json())

# convert the object into a dict
list_email_templates_response_dict = list_email_templates_response_instance.to_dict()
# create an instance of ListEmailTemplatesResponse from a dict
list_email_templates_response_from_dict = ListEmailTemplatesResponse.from_dict(list_email_templates_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


