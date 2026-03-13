# RunReportRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_token** | **str** |  | [optional] 
**order_by** | **str** |  | [optional] 
**page_size** | **int** |  | [optional] 
**fields** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.run_report_request import RunReportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RunReportRequest from a JSON string
run_report_request_instance = RunReportRequest.from_json(json)
# print the JSON string representation of the object
print(RunReportRequest.to_json())

# convert the object into a dict
run_report_request_dict = run_report_request_instance.to_dict()
# create an instance of RunReportRequest from a dict
run_report_request_from_dict = RunReportRequest.from_dict(run_report_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


