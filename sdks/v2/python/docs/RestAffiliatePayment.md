# RestAffiliatePayment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**pay_amount** | **float** |  | [optional] 
**pay_date** | **str** |  | [optional] 
**pay_notes** | **str** |  | [optional] 
**pay_type** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.rest_affiliate_payment import RestAffiliatePayment

# TODO update the JSON string below
json = "{}"
# create an instance of RestAffiliatePayment from a JSON string
rest_affiliate_payment_instance = RestAffiliatePayment.from_json(json)
# print the JSON string representation of the object
print(RestAffiliatePayment.to_json())

# convert the object into a dict
rest_affiliate_payment_dict = rest_affiliate_payment_instance.to_dict()
# create an instance of RestAffiliatePayment from a dict
rest_affiliate_payment_from_dict = RestAffiliatePayment.from_dict(rest_affiliate_payment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


