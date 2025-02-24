# ReportExecutionResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_token** | **str** |  | [optional] 
**results** | [**List[ReportEntryRecord]**](ReportEntryRecord.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.report_execution_result import ReportExecutionResult

# TODO update the JSON string below
json = "{}"
# create an instance of ReportExecutionResult from a JSON string
report_execution_result_instance = ReportExecutionResult.from_json(json)
# print the JSON string representation of the object
print(ReportExecutionResult.to_json())

# convert the object into a dict
report_execution_result_dict = report_execution_result_instance.to_dict()
# create an instance of ReportExecutionResult from a dict
report_execution_result_from_dict = ReportExecutionResult.from_dict(report_execution_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


