# CreateProductInterestBundleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Product interest bundle description | 
**name** | **str** | Product interest bundle name | 

## Example

```python
from keap_core_v2_client.models.create_product_interest_bundle_request import CreateProductInterestBundleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateProductInterestBundleRequest from a JSON string
create_product_interest_bundle_request_instance = CreateProductInterestBundleRequest.from_json(json)
# print the JSON string representation of the object
print(CreateProductInterestBundleRequest.to_json())

# convert the object into a dict
create_product_interest_bundle_request_dict = create_product_interest_bundle_request_instance.to_dict()
# create an instance of CreateProductInterestBundleRequest from a dict
create_product_interest_bundle_request_from_dict = CreateProductInterestBundleRequest.from_dict(create_product_interest_bundle_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


