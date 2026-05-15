# CommissionItemRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sale_percent** | **str** | The percentage to be paid for Sale. | [optional] 
**sale_amount** | **str** | The fixed dollar amount to be paid for Sale. | [optional] 
**lead_percent** | **str** | The percentage to be paid for Lead. | [optional] 
**lead_amount** | **str** | The fixed dollar amount to be paid for Lead. | [optional] 

## Example

```python
from keap_core_v2_client.models.commission_item_request import CommissionItemRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CommissionItemRequest from a JSON string
commission_item_request_instance = CommissionItemRequest.from_json(json)
# print the JSON string representation of the object
print(CommissionItemRequest.to_json())

# convert the object into a dict
commission_item_request_dict = commission_item_request_instance.to_dict()
# create an instance of CommissionItemRequest from a dict
commission_item_request_from_dict = CommissionItemRequest.from_dict(commission_item_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


