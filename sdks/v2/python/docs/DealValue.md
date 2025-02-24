# DealValue

The monetary value of the deal. This field is required and must be valid.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | The amount of money. This field is required. | 
**currency** | **str** | The currency of the money. This field is required. | 

## Example

```python
from keap_core_v2_client.models.deal_value import DealValue

# TODO update the JSON string below
json = "{}"
# create an instance of DealValue from a JSON string
deal_value_instance = DealValue.from_json(json)
# print the JSON string representation of the object
print(DealValue.to_json())

# convert the object into a dict
deal_value_dict = deal_value_instance.to_dict()
# create an instance of DealValue from a dict
deal_value_from_dict = DealValue.from_dict(deal_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


