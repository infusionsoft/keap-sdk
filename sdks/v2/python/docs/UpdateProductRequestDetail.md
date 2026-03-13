# UpdateProductRequestDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Product name | [optional] 
**sku** | **str** | Product SKU | [optional] 
**price** | **int** | The product price. The value is in the currency&#39;s smallest unit. e.g. $12.50 is 1250. Must be greater than or equal to 0. | [optional] 
**active** | **bool** | True means active, False means inactive | [optional] 
**description** | **str** | Product long description | [optional] 
**shippable** | **bool** | If the product requires shipping | [optional] 
**weight** | **float** | The product weight. Must be greater than or equal to 0. | [optional] 
**taxable** | **bool** | Whether or not the product should be taxed | [optional] 
**short_description** | **str** | Product short description | [optional] 
**subscription_only** | **bool** | If the product is a subscription-only product | [optional] 
**storefront_hidden** | **bool** | If the product should not be shown in the storefront | [optional] 
**country_taxable** | **bool** | If country-based taxes should be applied to this product | [optional] 
**state_taxable** | **bool** | If state-based taxes should be applied to this product | [optional] 
**city_taxable** | **bool** | If city-based taxes should be applied to this product | [optional] 
**inventory_limit** | **int** | The inventory limit for this product. Must be greater than or equal to 0. | [optional] 
**out_of_stock_enabled** | **bool** | The flag to enable out of stock inventory | [optional] 
**email_for_inventory_notifications** | **str** | The email address for notifications about inventory | [optional] 

## Example

```python
from keap_core_v2_client.models.update_product_request_detail import UpdateProductRequestDetail

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateProductRequestDetail from a JSON string
update_product_request_detail_instance = UpdateProductRequestDetail.from_json(json)
# print the JSON string representation of the object
print(UpdateProductRequestDetail.to_json())

# convert the object into a dict
update_product_request_detail_dict = update_product_request_detail_instance.to_dict()
# create an instance of UpdateProductRequestDetail from a dict
update_product_request_detail_from_dict = UpdateProductRequestDetail.from_dict(update_product_request_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


