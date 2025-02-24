# UpdateProductRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | True means active, False means inactive | [optional] 
**city_taxable** | **bool** | If city-based taxes should be applied to this product | [optional] 
**country_taxable** | **bool** | If country-based taxes should be applied to this product | [optional] 
**description** | **str** | Product long description | [optional] 
**name** | **str** | Product name | [optional] 
**price** | **int** | The product price. The value is in the currency’s smallest unit. e.g. $12.50 is 1250. | [optional] 
**short_description** | **str** | Product short description | [optional] 
**sku** | **str** | Product SKU | [optional] 
**state_taxable** | **bool** | If state-based taxes should be applied to this product | [optional] 
**storefront_hidden** | **bool** | If the product should not be shown in the storefront | [optional] 
**subscription_only** | **bool** | If the product is a subscription-only product | [optional] 
**taxable** | **bool** | Whether or not the product should be taxed | [optional] 
**weight** | **float** | Product weight | [optional] 

## Example

```python
from keap_core_v2_client.models.update_product_request import UpdateProductRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateProductRequest from a JSON string
update_product_request_instance = UpdateProductRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateProductRequest.to_json())

# convert the object into a dict
update_product_request_dict = update_product_request_instance.to_dict()
# create an instance of UpdateProductRequest from a dict
update_product_request_from_dict = UpdateProductRequest.from_dict(update_product_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


