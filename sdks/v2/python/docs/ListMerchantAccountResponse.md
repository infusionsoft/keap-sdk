# ListMerchantAccountResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**is_test** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_merchant_account_response import ListMerchantAccountResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListMerchantAccountResponse from a JSON string
list_merchant_account_response_instance = ListMerchantAccountResponse.from_json(json)
# print the JSON string representation of the object
print(ListMerchantAccountResponse.to_json())

# convert the object into a dict
list_merchant_account_response_dict = list_merchant_account_response_instance.to_dict()
# create an instance of ListMerchantAccountResponse from a dict
list_merchant_account_response_from_dict = ListMerchantAccountResponse.from_dict(list_merchant_account_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


