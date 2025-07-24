# KeapCoreServiceV2Sdk.UpdateProductRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | True means active, False means inactive | [optional] 
**cityTaxable** | **Boolean** | If city-based taxes should be applied to this product | [optional] 
**countryTaxable** | **Boolean** | If country-based taxes should be applied to this product | [optional] 
**description** | **String** | Product long description | [optional] 
**emailForInventoryNotifications** | **String** | The email address for notifications about inventory | [optional] 
**inventoryLimit** | **Number** | The inventory limit for this product. Must be greater than or equal to 0. | [optional] 
**name** | **String** | Product name | [optional] 
**outOfStockEnabled** | **Boolean** | The flag to enable out of stock inventory | [optional] 
**price** | **Number** | The product price. The value is in the currency’s smallest unit. e.g. $12.50 is 1250. Must be greater than or equal to 0. | [optional] 
**shippable** | **Boolean** | If the product requires shipping | [optional] 
**shortDescription** | **String** | Product short description | [optional] 
**sku** | **String** | Product SKU | [optional] 
**stateTaxable** | **Boolean** | If state-based taxes should be applied to this product | [optional] 
**storefrontHidden** | **Boolean** | If the product should not be shown in the storefront | [optional] 
**subscriptionOnly** | **Boolean** | If the product is a subscription-only product | [optional] 
**taxable** | **Boolean** | Whether or not the product should be taxed | [optional] 
**weight** | **Number** | The product weight. Must be greater than or equal to 0. | [optional] 


