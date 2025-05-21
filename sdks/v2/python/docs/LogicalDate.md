# LogicalDate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dates** | **List[datetime]** |  | [optional] 
**chain** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.logical_date import LogicalDate

# TODO update the JSON string below
json = "{}"
# create an instance of LogicalDate from a JSON string
logical_date_instance = LogicalDate.from_json(json)
# print the JSON string representation of the object
print(LogicalDate.to_json())

# convert the object into a dict
logical_date_dict = logical_date_instance.to_dict()
# create an instance of LogicalDate from a dict
logical_date_from_dict = LogicalDate.from_dict(logical_date_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


