# ApplicationConfigurationModuleAffiliate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**choose_affiliate** | **bool** |  | [optional] 
**commission** | [**ApplicationConfigurationModuleAffiliateCommission**](ApplicationConfigurationModuleAffiliateCommission.md) |  | [optional] 
**custom_affiliate_url** | **str** |  | [optional] 
**display_affiliate_ip_address** | **bool** |  | [optional] 
**do_not_notify_affiliate** | **bool** |  | [optional] 
**skip_pay_if_unused** | **bool** |  | [optional] 
**use_referral_history_if_no_tracking_cookie** | **bool** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.application_configuration_module_affiliate import ApplicationConfigurationModuleAffiliate

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationConfigurationModuleAffiliate from a JSON string
application_configuration_module_affiliate_instance = ApplicationConfigurationModuleAffiliate.from_json(json)
# print the JSON string representation of the object
print(ApplicationConfigurationModuleAffiliate.to_json())

# convert the object into a dict
application_configuration_module_affiliate_dict = application_configuration_module_affiliate_instance.to_dict()
# create an instance of ApplicationConfigurationModuleAffiliate from a dict
application_configuration_module_affiliate_from_dict = ApplicationConfigurationModuleAffiliate.from_dict(application_configuration_module_affiliate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


