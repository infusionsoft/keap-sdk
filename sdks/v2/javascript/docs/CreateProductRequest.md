# KeapCoreServiceV2Sdk.CreateProductRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | True means active, False means inactive | [optional] 
**cityTaxable** | **Boolean** | If city-based taxes should be applied to this product | [optional] 
**countryTaxable** | **Boolean** | If country-based taxes should be applied to this product | [optional] 
**description** | **String** | Product long description | [optional] 
**inventory** | [**ProductInventory**](ProductInventory.md) |  | [optional] 
**name** | **String** | Product name | 
**price** | **Number** | The product price. The value is in the currency’s smallest unit. e.g. $12.50 is 1250. Must be greater than or equal to 0. | 
**shippable** | **Boolean** | If the product requires shipping | [optional] 
**shortDescription** | **String** | Product short description | 
**sku** | **String** | Product SKU | [optional] 
**stateTaxable** | **Boolean** | If state-based taxes should be applied to this product | [optional] 
**storefrontHidden** | **Boolean** | If the product should not be shown in the storefront | [optional] 
**subscriptionOnly** | **Boolean** | If the product is a subscription-only product | [optional] 
**taxable** | **Boolean** | Whether or not the product should be taxed | [optional] 
**weight** | **Number** | The product weight. Must be greater than or equal to 0. | [optional] 


