# ApplicationConfigurationModuleEcommerce


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_card_types** | **str** |  | [optional] 
**currency** | **str** |  | [optional] 
**default_charge_max_retry_attempts** | **int** |  | [optional] 
**default_country** | **str** |  | [optional] 
**default_merchant** | **str** |  | [optional] 
**default_number_of_days_between_charge_attempts** | **int** |  | [optional] 
**default_tax** | **str** |  | [optional] 
**default_to_auto_charge** | **bool** |  | [optional] 
**merchant_account_max_retry_attempts** | **int** |  | [optional] 
**payment_types** | **str** |  | [optional] 
**promo_codes** | **str** |  | [optional] 
**track_cost_per_unit** | **bool** |  | [optional] 
**track_inventory** | **bool** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.application_configuration_module_ecommerce import ApplicationConfigurationModuleEcommerce

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationConfigurationModuleEcommerce from a JSON string
application_configuration_module_ecommerce_instance = ApplicationConfigurationModuleEcommerce.from_json(json)
# print the JSON string representation of the object
print(ApplicationConfigurationModuleEcommerce.to_json())

# convert the object into a dict
application_configuration_module_ecommerce_dict = application_configuration_module_ecommerce_instance.to_dict()
# create an instance of ApplicationConfigurationModuleEcommerce from a dict
application_configuration_module_ecommerce_from_dict = ApplicationConfigurationModuleEcommerce.from_dict(application_configuration_module_ecommerce_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


