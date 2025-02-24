# ListRestMerchantResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_merchant_account_id** | **str** |  | [optional] 
**merchant_accounts** | [**List[ListRestMerchantAccountResponse]**](ListRestMerchantAccountResponse.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_rest_merchant_response import ListRestMerchantResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListRestMerchantResponse from a JSON string
list_rest_merchant_response_instance = ListRestMerchantResponse.from_json(json)
# print the JSON string representation of the object
print(ListRestMerchantResponse.to_json())

# convert the object into a dict
list_rest_merchant_response_dict = list_rest_merchant_response_instance.to_dict()
# create an instance of ListRestMerchantResponse from a dict
list_rest_merchant_response_from_dict = ListRestMerchantResponse.from_dict(list_rest_merchant_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


