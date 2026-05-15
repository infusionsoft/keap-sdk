# CommissionItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sale_percent** | **float** | The percentage to be paid for Sale. | [optional] 
**sale_amount** | **float** | The fixed dollar amount to be paid for Sale. | [optional] 
**lead_percent** | **float** | The percentage to be paid for Lead. | [optional] 
**lead_amount** | **float** | The fixed dollar amount to be paid for Lead. | [optional] 

## Example

```python
from keap_core_v2_client.models.commission_item import CommissionItem

# TODO update the JSON string below
json = "{}"
# create an instance of CommissionItem from a JSON string
commission_item_instance = CommissionItem.from_json(json)
# print the JSON string representation of the object
print(CommissionItem.to_json())

# convert the object into a dict
commission_item_dict = commission_item_instance.to_dict()
# create an instance of CommissionItem from a dict
commission_item_from_dict = CommissionItem.from_dict(commission_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


