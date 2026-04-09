# RestV2ProductDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The product ID | [optional] 
**name** | **str** | Product name | [optional] 
**price** | [**CurrencyValueDetail**](CurrencyValueDetail.md) | The product price | [optional] 
**active** | **bool** | True means active, False means inactive | [optional] 
**description** | **str** | Product long description | [optional] 
**sku** | **str** | Product SKU | [optional] 
**shippable** | **bool** | If the product requires shipping | [optional] 
**weight** | **float** | Product weight | [optional] 
**taxable** | **bool** | Whether or not the product should be taxed | [optional] 
**categories** | **List[str]** | List of category ids to indicate which categories this product will belong to. Can be empty. | [optional] 
**options** | [**List[ProductOptionsDetail]**](ProductOptionsDetail.md) | List of product options. Can be empty. | [optional] 
**inventory** | [**ProductInventoryDetail**](ProductInventoryDetail.md) | The inventory details for this product | [optional] 
**short_description** | **str** | Product short description | [optional] 
**subscription_only** | **bool** | If the product is a subscription-only product | [optional] 
**storefront_hidden** | **bool** | If the product should not be shown in the storefront | [optional] 
**country_taxable** | **bool** | If country-based taxes should be applied to this product | [optional] 
**state_taxable** | **bool** | If state-based taxes should be applied to this product | [optional] 
**city_taxable** | **bool** | If city-based taxes should be applied to this product | [optional] 
**subscription_plans** | [**List[SubscriptionPlanDetail]**](SubscriptionPlanDetail.md) | List of subscription plans associated with the product. Can be empty. | [optional] 
**top_html** | **str** |  | [optional] 
**bottom_html** | **str** |  | [optional] 
**is_package** | **bool** |  | [optional] 
**needs_digital_delivery** | **bool** |  | [optional] 
**has_legacy_image** | **bool** |  | [optional] 
**delivery_description** | **str** |  | [optional] 
**create_time** | **str** |  | [optional] 
**update_time** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.rest_v2_product_detail import RestV2ProductDetail

# TODO update the JSON string below
json = "{}"
# create an instance of RestV2ProductDetail from a JSON string
rest_v2_product_detail_instance = RestV2ProductDetail.from_json(json)
# print the JSON string representation of the object
print(RestV2ProductDetail.to_json())

# convert the object into a dict
rest_v2_product_detail_dict = rest_v2_product_detail_instance.to_dict()
# create an instance of RestV2ProductDetail from a dict
rest_v2_product_detail_from_dict = RestV2ProductDetail.from_dict(rest_v2_product_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


