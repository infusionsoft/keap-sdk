# AffiliateProgramResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The program resource identifier | [optional] 
**title** | **str** | The program resource title | [optional] 
**type** | **str** | The type of resource | [optional] 
**notes** | **str** | The resource notes. | [optional] 
**url** | **str** | The URL to the resource. | [optional] 
**order** | **int** | The order which the resource to be displayed. Minimum value is 0. Lower values indicate higher priority. | [optional] 
**content_html** | **str** | The contents of the PAGE or EMAIL. In HTML format. | [optional] 
**page_width** | **int** | The width of the page for PAGE types, in pixels. | [optional] 
**page_height** | **int** | The height of the page for PAGE types, in pixels. | [optional] 
**commission_programs** | [**List[ResourceCommissionProgram]**](ResourceCommissionProgram.md) | A list of commission programs using this resource. | [optional] 

## Example

```python
from keap_core_v2_client.models.affiliate_program_resource import AffiliateProgramResource

# TODO update the JSON string below
json = "{}"
# create an instance of AffiliateProgramResource from a JSON string
affiliate_program_resource_instance = AffiliateProgramResource.from_json(json)
# print the JSON string representation of the object
print(AffiliateProgramResource.to_json())

# convert the object into a dict
affiliate_program_resource_dict = affiliate_program_resource_instance.to_dict()
# create an instance of AffiliateProgramResource from a dict
affiliate_program_resource_from_dict = AffiliateProgramResource.from_dict(affiliate_program_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


