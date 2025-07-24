# EmailSent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clicked_time** | **str** |  | [optional] 
**contact_id** | **str** |  | [optional] 
**headers** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**opened_time** | **str** |  | [optional] 
**original_provider** | **str** |  | [optional] 
**original_provider_id** | **str** |  | [optional] 
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
from keap_core_v2_client.models.email_sent import EmailSent

# TODO update the JSON string below
json = "{}"
# create an instance of EmailSent from a JSON string
email_sent_instance = EmailSent.from_json(json)
# print the JSON string representation of the object
print(EmailSent.to_json())

# convert the object into a dict
email_sent_dict = email_sent_instance.to_dict()
# create an instance of EmailSent from a dict
email_sent_from_dict = EmailSent.from_dict(email_sent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


