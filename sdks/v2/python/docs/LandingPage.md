# LandingPage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**html_preview_url** | **str** |  | [optional] 
**html_url** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**template_group_status** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.landing_page import LandingPage

# TODO update the JSON string below
json = "{}"
# create an instance of LandingPage from a JSON string
landing_page_instance = LandingPage.from_json(json)
# print the JSON string representation of the object
print(LandingPage.to_json())

# convert the object into a dict
landing_page_dict = landing_page_instance.to_dict()
# create an instance of LandingPage from a dict
landing_page_from_dict = LandingPage.from_dict(landing_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


