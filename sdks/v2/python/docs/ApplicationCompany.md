# ApplicationCompany


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caller_id_number** | **str** |  | [optional] 
**city** | **str** |  | [optional] 
**country** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**phone** | **str** |  | [optional] 
**phone_ext** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**street_address_1** | **str** |  | [optional] 
**street_address_2** | **str** |  | [optional] 
**web_logo_url** | **str** |  | [optional] 
**website** | **str** |  | [optional] 
**zip** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.application_company import ApplicationCompany

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationCompany from a JSON string
application_company_instance = ApplicationCompany.from_json(json)
# print the JSON string representation of the object
print(ApplicationCompany.to_json())

# convert the object into a dict
application_company_dict = application_company_instance.to_dict()
# create an instance of ApplicationCompany from a dict
application_company_from_dict = ApplicationCompany.from_dict(application_company_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


