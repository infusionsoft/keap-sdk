# Keap.Core.V2.Model.CreateProductRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | **bool** | True means active, False means inactive | [optional] 
**CityTaxable** | **bool** | If city-based taxes should be applied to this product | [optional] 
**CountryTaxable** | **bool** | If country-based taxes should be applied to this product | [optional] 
**Description** | **string** | Product long description | [optional] 
**Inventory** | [**ProductInventory**](ProductInventory.md) |  | [optional] 
**Name** | **string** | Product name | 
**Price** | **long** | The product price. The value is in the currency’s smallest unit. e.g. $12.50 is 1250. Must be greater than or equal to 0. | 
**Shippable** | **bool** | If the product requires shipping | [optional] 
**ShortDescription** | **string** | Product short description | 
**Sku** | **string** | Product SKU | [optional] 
**StateTaxable** | **bool** | If state-based taxes should be applied to this product | [optional] 
**StorefrontHidden** | **bool** | If the product should not be shown in the storefront | [optional] 
**SubscriptionOnly** | **bool** | If the product is a subscription-only product | [optional] 
**Taxable** | **bool** | Whether or not the product should be taxed | [optional] 
**Weight** | **double** | The product weight. Must be greater than or equal to 0. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

