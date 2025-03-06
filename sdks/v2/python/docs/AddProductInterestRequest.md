# AddProductInterestRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discount_percent** | **int** |  | [optional] 
**entity_id** | **str** | The &#x60;product_id&#x60; (when the &#x60;type&#x60; is set to &#x60;PRODUCT&#x60;)  or the &#x60;subscription_id&#x60; (when the &#x60;type&#x60; is set to &#x60;SUBSCRIPTION_PLAN&#x60;).  | 
**price** | **float** |  | 
**quantity** | **int** |  | [optional] 
**type** | **str** |  | 

## Example

```python
from keap_core_v2_client.models.add_product_interest_request import AddProductInterestRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddProductInterestRequest from a JSON string
add_product_interest_request_instance = AddProductInterestRequest.from_json(json)
# print the JSON string representation of the object
print(AddProductInterestRequest.to_json())

# convert the object into a dict
add_product_interest_request_dict = add_product_interest_request_instance.to_dict()
# create an instance of AddProductInterestRequest from a dict
add_product_interest_request_from_dict = AddProductInterestRequest.from_dict(add_product_interest_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


