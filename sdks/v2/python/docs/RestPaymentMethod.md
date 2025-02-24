# RestPaymentMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_info** | [**CardInfo**](CardInfo.md) |  | [optional] 
**date_created** | **datetime** |  | [optional] 
**id** | **str** |  | [optional] 
**payment_method_type** | **str** |  | [optional] 
**processor_id** | **str** |  | [optional] 
**processor_type** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.rest_payment_method import RestPaymentMethod

# TODO update the JSON string below
json = "{}"
# create an instance of RestPaymentMethod from a JSON string
rest_payment_method_instance = RestPaymentMethod.from_json(json)
# print the JSON string representation of the object
print(RestPaymentMethod.to_json())

# convert the object into a dict
rest_payment_method_dict = rest_payment_method_instance.to_dict()
# create an instance of RestPaymentMethod from a dict
rest_payment_method_from_dict = RestPaymentMethod.from_dict(rest_payment_method_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


