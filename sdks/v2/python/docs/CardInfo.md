# CardInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand** | **str** |  | [optional] 
**card_type** | **str** | The card type. Valid values are: CREDIT, DEBIT, PREPAID. | [optional] 
**expiration_month** | **str** |  | [optional] 
**expiration_year** | **str** |  | [optional] 
**last_four** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.card_info import CardInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CardInfo from a JSON string
card_info_instance = CardInfo.from_json(json)
# print the JSON string representation of the object
print(CardInfo.to_json())

# convert the object into a dict
card_info_dict = card_info_instance.to_dict()
# create an instance of CardInfo from a dict
card_info_from_dict = CardInfo.from_dict(card_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


