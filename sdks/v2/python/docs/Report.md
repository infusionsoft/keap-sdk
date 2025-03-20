# Report


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_time** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**updated_time** | **str** |  | [optional] 
**user_ids** | **List[str]** | A list of Users who have access to this Saved Search, or ALL_USERS if visible to all | [optional] 

## Example

```python
from keap_core_v2_client.models.report import Report

# TODO update the JSON string below
json = "{}"
# create an instance of Report from a JSON string
report_instance = Report.from_json(json)
# print the JSON string representation of the object
print(Report.to_json())

# convert the object into a dict
report_dict = report_instance.to_dict()
# create an instance of Report from a dict
report_from_dict = Report.from_dict(report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


