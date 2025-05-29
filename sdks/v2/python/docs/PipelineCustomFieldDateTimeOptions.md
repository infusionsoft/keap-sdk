# PipelineCustomFieldDateTimeOptions

Class representing options for date and time custom fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_past_dates** | **bool** | Indicates whether past dates are allowed. | [optional] 
**allow_future_dates** | **bool** | Indicates whether future dates are allowed. | [optional] 

## Example

```python
from keap_core_v2_client.models.pipeline_custom_field_date_time_options import PipelineCustomFieldDateTimeOptions

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineCustomFieldDateTimeOptions from a JSON string
pipeline_custom_field_date_time_options_instance = PipelineCustomFieldDateTimeOptions.from_json(json)
# print the JSON string representation of the object
print(PipelineCustomFieldDateTimeOptions.to_json())

# convert the object into a dict
pipeline_custom_field_date_time_options_dict = pipeline_custom_field_date_time_options_instance.to_dict()
# create an instance of PipelineCustomFieldDateTimeOptions from a dict
pipeline_custom_field_date_time_options_from_dict = PipelineCustomFieldDateTimeOptions.from_dict(pipeline_custom_field_date_time_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


