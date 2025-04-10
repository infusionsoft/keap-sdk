# CreateUpdateLeadSourceCategoryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the category | [optional] 
**name** | **str** | The name of the category, must be unique | [optional] 

## Example

```python
from keap_core_v2_client.models.create_update_lead_source_category_request import CreateUpdateLeadSourceCategoryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateUpdateLeadSourceCategoryRequest from a JSON string
create_update_lead_source_category_request_instance = CreateUpdateLeadSourceCategoryRequest.from_json(json)
# print the JSON string representation of the object
print(CreateUpdateLeadSourceCategoryRequest.to_json())

# convert the object into a dict
create_update_lead_source_category_request_dict = create_update_lead_source_category_request_instance.to_dict()
# create an instance of CreateUpdateLeadSourceCategoryRequest from a dict
create_update_lead_source_category_request_from_dict = CreateUpdateLeadSourceCategoryRequest.from_dict(create_update_lead_source_category_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


