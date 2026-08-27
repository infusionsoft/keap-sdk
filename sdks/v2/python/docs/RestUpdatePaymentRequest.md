# RestUpdatePaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_source** | **str** | The external source type of this payment. | [optional] 
**external_source_value** | **str** | The external source value of this payment. | [optional] 
**external_status_value** | **str** | The external status value of this payment. | [optional] 
**external_create_time** | **datetime** | The external creation timestamp of this payment. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**external_update_time** | **datetime** | The external update timestamp of this payment. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**external_create_user** | **str** | The user who created this payment externally. | [optional] 
**notes** | **str** | Notes or description for the payment. | [optional] 
**payment_time** | **datetime** | The date and time of payment. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z). Can only be modified for manually recorded payments. | [optional] 
**payment_amount** | **float** | The payment amount. Can only be modified for manually recorded payments. | [optional] 

## Example

```python
from keap_core_v2_client.models.rest_update_payment_request import RestUpdatePaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RestUpdatePaymentRequest from a JSON string
rest_update_payment_request_instance = RestUpdatePaymentRequest.from_json(json)
# print the JSON string representation of the object
print(RestUpdatePaymentRequest.to_json())

# convert the object into a dict
rest_update_payment_request_dict = rest_update_payment_request_instance.to_dict()
# create an instance of RestUpdatePaymentRequest from a dict
rest_update_payment_request_from_dict = RestUpdatePaymentRequest.from_dict(rest_update_payment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


