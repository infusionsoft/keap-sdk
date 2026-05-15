# CreateDefaultCommissionProgramRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percentage** | **str** | Level 1 percentage to be paid for commission (0-100). This will be set for the Sale. This is deprecated for &#x60;level_1&#x60; | [optional] 
**unused** | [**CommissionItemRequest**](CommissionItemRequest.md) | Payout rules for any unused commissions. | [optional] 
**dollar_amount** | **str** | Level 1 fixed dollar amount to be paid for commission. This will be set for the Sale. This is deprecated for &#x60;level_1&#x60; | [optional] 
**level_1** | [**CommissionItemRequest**](CommissionItemRequest.md) | Payout rules for Level 1 recipients of the commission. | [optional] 
**level_2** | [**CommissionItemRequest**](CommissionItemRequest.md) | Payout rules for Level 2 recipients of the commission. | [optional] 
**payout_type** | **str** | The payout type for this commission. | [optional] [default to 'UPFRONT']

## Example

```python
from keap_core_v2_client.models.create_default_commission_program_request import CreateDefaultCommissionProgramRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDefaultCommissionProgramRequest from a JSON string
create_default_commission_program_request_instance = CreateDefaultCommissionProgramRequest.from_json(json)
# print the JSON string representation of the object
print(CreateDefaultCommissionProgramRequest.to_json())

# convert the object into a dict
create_default_commission_program_request_dict = create_default_commission_program_request_instance.to_dict()
# create an instance of CreateDefaultCommissionProgramRequest from a dict
create_default_commission_program_request_from_dict = CreateDefaultCommissionProgramRequest.from_dict(create_default_commission_program_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


