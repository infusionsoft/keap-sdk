# PaymentMethodConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**session_key** | **str** | A temporary session key required for rendering Keap&#39;s payment component. | [optional] 

## Example

```python
from keap_core_v2_client.models.payment_method_config import PaymentMethodConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentMethodConfig from a JSON string
payment_method_config_instance = PaymentMethodConfig.from_json(json)
# print the JSON string representation of the object
print(PaymentMethodConfig.to_json())

# convert the object into a dict
payment_method_config_dict = payment_method_config_instance.to_dict()
# create an instance of PaymentMethodConfig from a dict
payment_method_config_from_dict = PaymentMethodConfig.from_dict(payment_method_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


