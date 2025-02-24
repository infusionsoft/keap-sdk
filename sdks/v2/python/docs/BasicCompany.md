# BasicCompany


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_name** | **str** |  | [optional] 
**id** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.basic_company import BasicCompany

# TODO update the JSON string below
json = "{}"
# create an instance of BasicCompany from a JSON string
basic_company_instance = BasicCompany.from_json(json)
# print the JSON string representation of the object
print(BasicCompany.to_json())

# convert the object into a dict
basic_company_dict = basic_company_instance.to_dict()
# create an instance of BasicCompany from a dict
basic_company_from_dict = BasicCompany.from_dict(basic_company_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


