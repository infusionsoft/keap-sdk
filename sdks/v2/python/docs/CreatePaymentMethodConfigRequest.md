# CreatePaymentMethodConfigRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_id** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.create_payment_method_config_request import CreatePaymentMethodConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePaymentMethodConfigRequest from a JSON string
create_payment_method_config_request_instance = CreatePaymentMethodConfigRequest.from_json(json)
# print the JSON string representation of the object
print(CreatePaymentMethodConfigRequest.to_json())

# convert the object into a dict
create_payment_method_config_request_dict = create_payment_method_config_request_instance.to_dict()
# create an instance of CreatePaymentMethodConfigRequest from a dict
create_payment_method_config_request_from_dict = CreatePaymentMethodConfigRequest.from_dict(create_payment_method_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


