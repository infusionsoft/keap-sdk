# ListRestMerchantAccountResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**is_test** | **bool** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_rest_merchant_account_response import ListRestMerchantAccountResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListRestMerchantAccountResponse from a JSON string
list_rest_merchant_account_response_instance = ListRestMerchantAccountResponse.from_json(json)
# print the JSON string representation of the object
print(ListRestMerchantAccountResponse.to_json())

# convert the object into a dict
list_rest_merchant_account_response_dict = list_rest_merchant_account_response_instance.to_dict()
# create an instance of ListRestMerchantAccountResponse from a dict
list_rest_merchant_account_response_from_dict = ListRestMerchantAccountResponse.from_dict(list_rest_merchant_account_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


