# RestV2ProductList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The product ID | [optional] 
**name** | **str** | Product name | [optional] 
**price** | [**CurrencyValueList**](CurrencyValueList.md) | The product price | [optional] 
**active** | **bool** | True means active, False means inactive | [optional] 
**description** | **str** | Product long description | [optional] 
**sku** | **str** | Product SKU | [optional] 
**shippable** | **bool** | If the product requires shipping | [optional] 
**weight** | **float** | Product weight | [optional] 
**taxable** | **bool** | Whether or not the product should be taxed | [optional] 
**categories** | **List[str]** | List of category ids to indicate which categories this product will belong to. Can be empty. | [optional] 
**options** | [**List[ProductOptionsList]**](ProductOptionsList.md) | List of product options. Can be empty. | [optional] 
**inventory** | [**ProductInventoryList**](ProductInventoryList.md) | The inventory details for this product | [optional] 
**short_description** | **str** | Product short description | [optional] 
**subscription_only** | **bool** | If the product is a subscription-only product | [optional] 
**storefront_hidden** | **bool** | If the product should not be shown in the storefront | [optional] 
**country_taxable** | **bool** | If country-based taxes should be applied to this product | [optional] 
**state_taxable** | **bool** | If state-based taxes should be applied to this product | [optional] 
**city_taxable** | **bool** | If city-based taxes should be applied to this product | [optional] 
**subscription_plans** | [**List[SubscriptionPlanList]**](SubscriptionPlanList.md) | List of subscription plans associated with the product. Can be empty. | [optional] 

## Example

```python
from keap_core_v2_client.models.rest_v2_product_list import RestV2ProductList

# TODO update the JSON string below
json = "{}"
# create an instance of RestV2ProductList from a JSON string
rest_v2_product_list_instance = RestV2ProductList.from_json(json)
# print the JSON string representation of the object
print(RestV2ProductList.to_json())

# convert the object into a dict
rest_v2_product_list_dict = rest_v2_product_list_instance.to_dict()
# create an instance of RestV2ProductList from a dict
rest_v2_product_list_from_dict = RestV2ProductList.from_dict(rest_v2_product_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


