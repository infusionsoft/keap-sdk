# AffiliateProgramV2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Commission program ID | [optional] 
**name** | **str** | The affiliate commission program name | [optional] 
**priority** | **str** | The Affiliate commission program priority | [optional] 
**notes** | **str** | The affiliate commission program notes | [optional] 
**create_time** | **str** | The created time of affiliate commission program | [optional] 
**affiliate_ids** | **List[str]** | The list of affiliate_ids using this commission program | [optional] 

## Example

```python
from keap_core_v2_client.models.affiliate_program_v2 import AffiliateProgramV2

# TODO update the JSON string below
json = "{}"
# create an instance of AffiliateProgramV2 from a JSON string
affiliate_program_v2_instance = AffiliateProgramV2.from_json(json)
# print the JSON string representation of the object
print(AffiliateProgramV2.to_json())

# convert the object into a dict
affiliate_program_v2_dict = affiliate_program_v2_instance.to_dict()
# create an instance of AffiliateProgramV2 from a dict
affiliate_program_v2_from_dict = AffiliateProgramV2.from_dict(affiliate_program_v2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


