# HistoricalCounts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_24_hours** | **int** |  | [optional] 
**var_30_days** | **int** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.historical_counts import HistoricalCounts

# TODO update the JSON string below
json = "{}"
# create an instance of HistoricalCounts from a JSON string
historical_counts_instance = HistoricalCounts.from_json(json)
# print the JSON string representation of the object
print(HistoricalCounts.to_json())

# convert the object into a dict
historical_counts_dict = historical_counts_instance.to_dict()
# create an instance of HistoricalCounts from a dict
historical_counts_from_dict = HistoricalCounts.from_dict(historical_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


