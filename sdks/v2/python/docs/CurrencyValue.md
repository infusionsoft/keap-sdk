# CurrencyValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | The price amount in the smallest currency unit | [optional] 
**currency_code** | **str** | Three-letter ISO currency code | [optional] 
**formatted_amount** | **str** | The product amount formatted using the tenant&#39;s currency locale | [optional] 

## Example

```python
from keap_core_v2_client.models.currency_value import CurrencyValue

# TODO update the JSON string below
json = "{}"
# create an instance of CurrencyValue from a JSON string
currency_value_instance = CurrencyValue.from_json(json)
# print the JSON string representation of the object
print(CurrencyValue.to_json())

# convert the object into a dict
currency_value_dict = currency_value_instance.to_dict()
# create an instance of CurrencyValue from a dict
currency_value_from_dict = CurrencyValue.from_dict(currency_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


