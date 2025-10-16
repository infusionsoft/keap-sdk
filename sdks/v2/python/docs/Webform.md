# Webform


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | When the webform was created | [optional] 
**custom_slug** | **str** | The custom slug of the webform. Used in pretty webform URLs | [optional] 
**duplicate_check_option** | **str** | The option that determines if the lead submitted through the form is a duplicate or not. If it&#39;s a duplicate, then the lead will be merged with the existing contact record | [optional] 
**exit_option** | **str** | The option that determines what happens after the form is submitted | [optional] 
**funnel_id** | **str** | The id of the funnel this webform belongs to, if any | [optional] 
**id** | **str** | The unique identifier for this webform | [optional] 
**name** | **str** | The name of this webform | [optional] 
**pretty_webform_url** | **str** | The URL for this webform that uses the custom slug to identify it | [optional] 
**thank_you_page_url** | **str** | The URL of the thank you page for this webform | [optional] 
**update_time** | **str** | When the webform was last updated | [optional] 
**webform_type** | **str** | The type of webform this is | [optional] 
**webform_url** | **str** | The URL for this webform that uses the xid to identify it | [optional] 
**xid** | **str** | The public unique identifier for this tag, used in webform URLs | [optional] 

## Example

```python
from keap_core_v2_client.models.webform import Webform

# TODO update the JSON string below
json = "{}"
# create an instance of Webform from a JSON string
webform_instance = Webform.from_json(json)
# print the JSON string representation of the object
print(Webform.to_json())

# convert the object into a dict
webform_dict = webform_instance.to_dict()
# create an instance of Webform from a dict
webform_from_dict = Webform.from_dict(webform_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


