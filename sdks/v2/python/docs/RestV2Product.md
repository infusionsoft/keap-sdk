# RestV2Product


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | True means active, False means inactive | [optional] 
**categories** | **List[str]** | List of category ids to indicate which categories this product will belong to. Can be empty. | [optional] 
**city_taxable** | **bool** | If city-based taxes should be applied to this product | [optional] 
**country_taxable** | **bool** | If country-based taxes should be applied to this product | [optional] 
**description** | **str** | Product long description | [optional] 
**id** | **str** | The product ID | [optional] 
**inventory** | [**ProductInventory**](ProductInventory.md) |  | [optional] 
**name** | **str** | Product name | [optional] 
**options** | [**List[ProductOptions]**](ProductOptions.md) | List of product options. Can be empty. | [optional] 
**price** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**shippable** | **bool** | If the product requires shipping | [optional] 
**short_description** | **str** | Product short description | [optional] 
**sku** | **str** | Product SKU | [optional] 
**state_taxable** | **bool** | If state-based taxes should be applied to this product | [optional] 
**storefront_hidden** | **bool** | If the product should not be shown in the storefront | [optional] 
**subscription_only** | **bool** | If the product is a subscription-only product | [optional] 
**subscription_plans** | [**List[SubscriptionPlan]**](SubscriptionPlan.md) | List of subscription plans associated with the product. Can be empty. | [optional] 
**taxable** | **bool** | Whether or not the product should be taxed | [optional] 
**weight** | **float** | Product weight | [optional] 

## Example

```python
from keap_core_v2_client.models.rest_v2_product import RestV2Product

# TODO update the JSON string below
json = "{}"
# create an instance of RestV2Product from a JSON string
rest_v2_product_instance = RestV2Product.from_json(json)
# print the JSON string representation of the object
print(RestV2Product.to_json())

# convert the object into a dict
rest_v2_product_dict = rest_v2_product_instance.to_dict()
# create an instance of RestV2Product from a dict
rest_v2_product_from_dict = RestV2Product.from_dict(rest_v2_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


