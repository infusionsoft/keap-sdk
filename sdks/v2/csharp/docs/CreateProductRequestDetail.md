# Keap.Core.V2.Model.CreateProductRequestDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Product name | 
**Sku** | **string** | Product SKU | [optional] 
**Price** | **long** | The product price. The value is in the currency&#39;s smallest unit. e.g. $12.50 is 1250.  Must be greater than or equal to 0. | 
**Active** | **bool** | True means active, False means inactive | [optional] 
**Description** | **string** | Product long description | [optional] 
**Shippable** | **bool** | If the product requires shipping | [optional] 
**Weight** | **double** | The product weight. Must be greater than or equal to 0. | [optional] 
**Taxable** | **bool** | Whether or not the product should be taxed | [optional] 
**Inventory** | [**ProductInventoryDetail**](ProductInventoryDetail.md) | The inventory details for this product | [optional] 
**ShortDescription** | **string** | Product short description | 
**SubscriptionOnly** | **bool** | If the product is a subscription-only product | [optional] 
**StorefrontHidden** | **bool** | If the product should not be shown in the storefront | [optional] 
**CountryTaxable** | **bool** | If country-based taxes should be applied to this product | [optional] 
**StateTaxable** | **bool** | If state-based taxes should be applied to this product | [optional] 
**CityTaxable** | **bool** | If city-based taxes should be applied to this product | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

