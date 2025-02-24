# ContactUtmResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_created** | **datetime** |  | [optional] 
**first_touch** | **bool** |  | [optional] 
**id** | **int** |  | [optional] 
**keap_source_id** | **str** |  | [optional] 
**last_touch** | **bool** |  | [optional] 
**utm_campaign** | **str** |  | [optional] 
**utm_content** | **str** |  | [optional] 
**utm_medium** | **str** |  | [optional] 
**utm_source** | **str** |  | [optional] 
**utm_term** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.contact_utm_response import ContactUtmResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ContactUtmResponse from a JSON string
contact_utm_response_instance = ContactUtmResponse.from_json(json)
# print the JSON string representation of the object
print(ContactUtmResponse.to_json())

# convert the object into a dict
contact_utm_response_dict = contact_utm_response_instance.to_dict()
# create an instance of ContactUtmResponse from a dict
contact_utm_response_from_dict = ContactUtmResponse.from_dict(contact_utm_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


