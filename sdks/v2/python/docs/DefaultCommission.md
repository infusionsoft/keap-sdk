# DefaultCommission


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payout_type** | **str** | The payout type for this commission. | [optional] [default to 'UPFRONT']
**dollar_amount** | **float** | Level 1 fixed dollar amount to be paid for commission. This will be set for the Sale. This is deprecated for &#x60;level_1&#x60; | [optional] 
**percentage** | **float** | Level 1 percentage to be paid for commission (0-100). This will be set for the Sale. This is deprecated for &#x60;level_1&#x60; | [optional] 
**unused** | [**CommissionItem**](CommissionItem.md) | Payout rules for any unused commissions. | [optional] 
**level_1** | [**CommissionItem**](CommissionItem.md) | Payout rules for Level 1 recipients of the commission. | [optional] 
**level_2** | [**CommissionItem**](CommissionItem.md) | Payout rules for Level 2 recipients of the commission. | [optional] 

## Example

```python
from keap_core_v2_client.models.default_commission import DefaultCommission

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultCommission from a JSON string
default_commission_instance = DefaultCommission.from_json(json)
# print the JSON string representation of the object
print(DefaultCommission.to_json())

# convert the object into a dict
default_commission_dict = default_commission_instance.to_dict()
# create an instance of DefaultCommission from a dict
default_commission_from_dict = DefaultCommission.from_dict(default_commission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


