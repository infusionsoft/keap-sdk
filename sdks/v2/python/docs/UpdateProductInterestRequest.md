# UpdateProductInterestRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discount_percent** | **int** |  | [optional] 
**price** | **float** |  | [optional] 
**quantity** | **int** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.update_product_interest_request import UpdateProductInterestRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateProductInterestRequest from a JSON string
update_product_interest_request_instance = UpdateProductInterestRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateProductInterestRequest.to_json())

# convert the object into a dict
update_product_interest_request_dict = update_product_interest_request_instance.to_dict()
# create an instance of UpdateProductInterestRequest from a dict
update_product_interest_request_from_dict = UpdateProductInterestRequest.from_dict(update_product_interest_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


