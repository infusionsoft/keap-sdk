# TaggedCompany


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_time** | **str** | The time the tag was applied to the company, in ISO 8601 format. | [optional] 
**company** | [**Company**](Company.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.tagged_company import TaggedCompany

# TODO update the JSON string below
json = "{}"
# create an instance of TaggedCompany from a JSON string
tagged_company_instance = TaggedCompany.from_json(json)
# print the JSON string representation of the object
print(TaggedCompany.to_json())

# convert the object into a dict
tagged_company_dict = tagged_company_instance.to_dict()
# create an instance of TaggedCompany from a dict
tagged_company_from_dict = TaggedCompany.from_dict(tagged_company_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


