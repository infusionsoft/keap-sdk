# ReportEntryValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_name** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.report_entry_value import ReportEntryValue

# TODO update the JSON string below
json = "{}"
# create an instance of ReportEntryValue from a JSON string
report_entry_value_instance = ReportEntryValue.from_json(json)
# print the JSON string representation of the object
print(ReportEntryValue.to_json())

# convert the object into a dict
report_entry_value_dict = report_entry_value_instance.to_dict()
# create an instance of ReportEntryValue from a dict
report_entry_value_from_dict = ReportEntryValue.from_dict(report_entry_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


