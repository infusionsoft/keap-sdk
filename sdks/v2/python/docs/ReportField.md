# ReportField


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The field name as accepted by the report execution &#x60;fields&#x60; parameter | [optional] 
**label** | **str** | The human-readable label for the field | [optional] 

## Example

```python
from keap_core_v2_client.models.report_field import ReportField

# TODO update the JSON string below
json = "{}"
# create an instance of ReportField from a JSON string
report_field_instance = ReportField.from_json(json)
# print the JSON string representation of the object
print(ReportField.to_json())

# convert the object into a dict
report_field_dict = report_field_instance.to_dict()
# create an instance of ReportField from a dict
report_field_from_dict = ReportField.from_dict(report_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


