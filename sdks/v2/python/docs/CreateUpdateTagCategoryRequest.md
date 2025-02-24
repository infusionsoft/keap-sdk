# CreateUpdateTagCategoryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.create_update_tag_category_request import CreateUpdateTagCategoryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateUpdateTagCategoryRequest from a JSON string
create_update_tag_category_request_instance = CreateUpdateTagCategoryRequest.from_json(json)
# print the JSON string representation of the object
print(CreateUpdateTagCategoryRequest.to_json())

# convert the object into a dict
create_update_tag_category_request_dict = create_update_tag_category_request_instance.to_dict()
# create an instance of CreateUpdateTagCategoryRequest from a dict
create_update_tag_category_request_from_dict = CreateUpdateTagCategoryRequest.from_dict(create_update_tag_category_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


