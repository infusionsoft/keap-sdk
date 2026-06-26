# ReportModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**List[ReportField]**](ReportField.md) | The list of fields available for this Report (Saved Search) | [optional] 

## Example

```python
from keap_core_v2_client.models.report_model import ReportModel

# TODO update the JSON string below
json = "{}"
# create an instance of ReportModel from a JSON string
report_model_instance = ReportModel.from_json(json)
# print the JSON string representation of the object
print(ReportModel.to_json())

# convert the object into a dict
report_model_dict = report_model_instance.to_dict()
# create an instance of ReportModel from a dict
report_model_from_dict = ReportModel.from_dict(report_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


