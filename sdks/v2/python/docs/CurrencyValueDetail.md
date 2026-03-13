# CurrencyValueDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | The price amount in the smallest currency unit | [optional] 
**currency_code** | **str** | Three-letter ISO currency code | [optional] 
**formatted_amount** | **str** | The product amount formatted using the tenant&#39;s currency locale | [optional] 

## Example

```python
from keap_core_v2_client.models.currency_value_detail import CurrencyValueDetail

# TODO update the JSON string below
json = "{}"
# create an instance of CurrencyValueDetail from a JSON string
currency_value_detail_instance = CurrencyValueDetail.from_json(json)
# print the JSON string representation of the object
print(CurrencyValueDetail.to_json())

# convert the object into a dict
currency_value_detail_dict = currency_value_detail_instance.to_dict()
# create an instance of CurrencyValueDetail from a dict
currency_value_detail_from_dict = CurrencyValueDetail.from_dict(currency_value_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


