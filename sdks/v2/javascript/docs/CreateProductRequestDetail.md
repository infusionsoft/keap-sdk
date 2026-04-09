# KeapCoreServiceV2Sdk.CreateProductRequestDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Product name | 
**sku** | **String** | Product SKU | [optional] 
**price** | **Number** | The product price. The value is in the currency&#39;s smallest unit. e.g. $12.50 is 1250.  Must be greater than or equal to 0. | 
**active** | **Boolean** | True means active, False means inactive | [optional] 
**description** | **String** | Product long description | [optional] 
**shippable** | **Boolean** | If the product requires shipping | [optional] 
**weight** | **Number** | The product weight. Must be greater than or equal to 0. | [optional] 
**taxable** | **Boolean** | Whether or not the product should be taxed | [optional] 
**inventory** | [**ProductInventoryDetail**](ProductInventoryDetail.md) | The inventory details for this product | [optional] 
**shortDescription** | **String** | Product short description | 
**subscriptionOnly** | **Boolean** | If the product is a subscription-only product | [optional] 
**storefrontHidden** | **Boolean** | If the product should not be shown in the storefront | [optional] 
**countryTaxable** | **Boolean** | If country-based taxes should be applied to this product | [optional] 
**stateTaxable** | **Boolean** | If state-based taxes should be applied to this product | [optional] 
**cityTaxable** | **Boolean** | If city-based taxes should be applied to this product | [optional] 
**topHtml** | **String** |  | [optional] 
**bottomHtml** | **String** |  | [optional] 
**isPackage** | **Boolean** |  | [optional] 
**needsDigitalDelivery** | **Boolean** |  | [optional] 
**deliveryDescription** | **String** |  | [optional] 


