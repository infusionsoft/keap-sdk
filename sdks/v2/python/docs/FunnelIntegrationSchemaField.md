# FunnelIntegrationSchemaField


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | The label that will be used to show the name of the field in the UI. | [optional] 
**name** | **str** | The name of the schema field. Will be the defauly label, if no label is provided. | [optional] 
**type** | **str** | The data type of the field. | [optional] 

## Example

```python
from keap_core_v2_client.models.funnel_integration_schema_field import FunnelIntegrationSchemaField

# TODO update the JSON string below
json = "{}"
# create an instance of FunnelIntegrationSchemaField from a JSON string
funnel_integration_schema_field_instance = FunnelIntegrationSchemaField.from_json(json)
# print the JSON string representation of the object
print(FunnelIntegrationSchemaField.to_json())

# convert the object into a dict
funnel_integration_schema_field_dict = funnel_integration_schema_field_instance.to_dict()
# create an instance of FunnelIntegrationSchemaField from a dict
funnel_integration_schema_field_from_dict = FunnelIntegrationSchemaField.from_dict(funnel_integration_schema_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


