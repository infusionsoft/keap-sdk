# CreateContactUtmPropertiesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keap_source_id** | **str** | The formId | 
**utm_campaign** | **str** | UTM campaign information | [optional] 
**utm_content** | **str** | UTM content information | [optional] 
**utm_medium** | **str** | UTM medium information | [optional] 
**utm_source** | **str** | UTM source information | [optional] 
**utm_term** | **str** | UTM term information | [optional] 

## Example

```python
from keap_core_v2_client.models.create_contact_utm_properties_request import CreateContactUtmPropertiesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateContactUtmPropertiesRequest from a JSON string
create_contact_utm_properties_request_instance = CreateContactUtmPropertiesRequest.from_json(json)
# print the JSON string representation of the object
print(CreateContactUtmPropertiesRequest.to_json())

# convert the object into a dict
create_contact_utm_properties_request_dict = create_contact_utm_properties_request_instance.to_dict()
# create an instance of CreateContactUtmPropertiesRequest from a dict
create_contact_utm_properties_request_from_dict = CreateContactUtmPropertiesRequest.from_dict(create_contact_utm_properties_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


