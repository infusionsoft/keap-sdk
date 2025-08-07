# ListAffiliatePaymentsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliate_payments** | [**List[RestAffiliatePayment]**](RestAffiliatePayment.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_affiliate_payments_response import ListAffiliatePaymentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAffiliatePaymentsResponse from a JSON string
list_affiliate_payments_response_instance = ListAffiliatePaymentsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAffiliatePaymentsResponse.to_json())

# convert the object into a dict
list_affiliate_payments_response_dict = list_affiliate_payments_response_instance.to_dict()
# create an instance of ListAffiliatePaymentsResponse from a dict
list_affiliate_payments_response_from_dict = ListAffiliatePaymentsResponse.from_dict(list_affiliate_payments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


