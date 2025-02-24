# ReportEntryRecord


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**List[ReportEntryValue]**](ReportEntryValue.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.report_entry_record import ReportEntryRecord

# TODO update the JSON string below
json = "{}"
# create an instance of ReportEntryRecord from a JSON string
report_entry_record_instance = ReportEntryRecord.from_json(json)
# print the JSON string representation of the object
print(ReportEntryRecord.to_json())

# convert the object into a dict
report_entry_record_dict = report_entry_record_instance.to_dict()
# create an instance of ReportEntryRecord from a dict
report_entry_record_from_dict = ReportEntryRecord.from_dict(report_entry_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


