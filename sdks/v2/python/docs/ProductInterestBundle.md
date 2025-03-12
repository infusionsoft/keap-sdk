# ProductInterestBundle


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Product interest bundle description | [optional] 
**id** | **str** | The product interest bundle ID | [optional] 
**name** | **str** | Product interest bundle name | [optional] 
**product_interests** | [**List[ProductInterest]**](ProductInterest.md) | Product interests | [optional] 
**subscription_plan_interests** | [**List[ProductInterest]**](ProductInterest.md) | Subscription plan interests | [optional] 

## Example

```python
from keap_core_v2_client.models.product_interest_bundle import ProductInterestBundle

# TODO update the JSON string below
json = "{}"
# create an instance of ProductInterestBundle from a JSON string
product_interest_bundle_instance = ProductInterestBundle.from_json(json)
# print the JSON string representation of the object
print(ProductInterestBundle.to_json())

# convert the object into a dict
product_interest_bundle_dict = product_interest_bundle_instance.to_dict()
# create an instance of ProductInterestBundle from a dict
product_interest_bundle_from_dict = ProductInterestBundle.from_dict(product_interest_bundle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


