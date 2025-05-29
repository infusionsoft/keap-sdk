# DisplayForm

A display form for a sales pipeline

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | [**List[DisplayGroup]**](DisplayGroup.md) | Groups of properties to display on the form. | [optional] 

## Example

```python
from keap_core_v2_client.models.display_form import DisplayForm

# TODO update the JSON string below
json = "{}"
# create an instance of DisplayForm from a JSON string
display_form_instance = DisplayForm.from_json(json)
# print the JSON string representation of the object
print(DisplayForm.to_json())

# convert the object into a dict
display_form_dict = display_form_instance.to_dict()
# create an instance of DisplayForm from a dict
display_form_from_dict = DisplayForm.from_dict(display_form_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


