# Keap.Core.V2.Model.RestV2ProductList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The product ID | [optional] 
**Name** | **string** | Product name | [optional] 
**Price** | [**CurrencyValueList**](CurrencyValueList.md) | The product price | [optional] 
**Active** | **bool** | True means active, False means inactive | [optional] 
**Description** | **string** | Product long description | [optional] 
**Sku** | **string** | Product SKU | [optional] 
**Shippable** | **bool** | If the product requires shipping | [optional] 
**Weight** | **double** | Product weight | [optional] 
**Taxable** | **bool** | Whether or not the product should be taxed | [optional] 
**Categories** | **List&lt;string&gt;** | List of category ids to indicate which categories this product will belong to. Can be empty. | [optional] 
**Options** | [**List&lt;ProductOptionsList&gt;**](ProductOptionsList.md) | List of product options. Can be empty. | [optional] 
**Inventory** | [**ProductInventoryList**](ProductInventoryList.md) | The inventory details for this product | [optional] 
**ShortDescription** | **string** | Product short description | [optional] 
**SubscriptionOnly** | **bool** | If the product is a subscription-only product | [optional] 
**StorefrontHidden** | **bool** | If the product should not be shown in the storefront | [optional] 
**CountryTaxable** | **bool** | If country-based taxes should be applied to this product | [optional] 
**StateTaxable** | **bool** | If state-based taxes should be applied to this product | [optional] 
**CityTaxable** | **bool** | If city-based taxes should be applied to this product | [optional] 
**SubscriptionPlans** | [**List&lt;SubscriptionPlanList&gt;**](SubscriptionPlanList.md) | List of subscription plans associated with the product. Can be empty. | [optional] 
**TopHtml** | **string** |  | [optional] 
**BottomHtml** | **string** |  | [optional] 
**IsPackage** | **bool** |  | [optional] 
**NeedsDigitalDelivery** | **bool** |  | [optional] 
**HasLegacyImage** | **bool** |  | [optional] 
**DeliveryDescription** | **string** |  | [optional] 
**CreateTime** | **string** |  | [optional] 
**UpdateTime** | **string** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

