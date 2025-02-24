# AffiliateSummaryRecord


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliate_id** | **int** |  | [optional] 
**amount_earned** | **float** |  | [optional] 
**balance** | **float** |  | [optional] 
**clawbacks** | **float** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.affiliate_summary_record import AffiliateSummaryRecord

# TODO update the JSON string below
json = "{}"
# create an instance of AffiliateSummaryRecord from a JSON string
affiliate_summary_record_instance = AffiliateSummaryRecord.from_json(json)
# print the JSON string representation of the object
print(AffiliateSummaryRecord.to_json())

# convert the object into a dict
affiliate_summary_record_dict = affiliate_summary_record_instance.to_dict()
# create an instance of AffiliateSummaryRecord from a dict
affiliate_summary_record_from_dict = AffiliateSummaryRecord.from_dict(affiliate_summary_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


