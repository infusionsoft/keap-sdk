

# RestV2ProductList


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | The product ID |  [optional] |
|**name** | **String** | Product name |  [optional] |
|**price** | [**CurrencyValueList**](CurrencyValueList.md) | The product price |  [optional] |
|**active** | **Boolean** | True means active, False means inactive |  [optional] |
|**description** | **String** | Product long description |  [optional] |
|**sku** | **String** | Product SKU |  [optional] |
|**shippable** | **Boolean** | If the product requires shipping |  [optional] |
|**weight** | **Double** | Product weight |  [optional] |
|**taxable** | **Boolean** | Whether or not the product should be taxed |  [optional] |
|**categories** | **List&lt;String&gt;** | List of category ids to indicate which categories this product will belong to. Can be empty. |  [optional] |
|**options** | [**List&lt;ProductOptionsList&gt;**](ProductOptionsList.md) | List of product options. Can be empty. |  [optional] |
|**inventory** | [**ProductInventoryList**](ProductInventoryList.md) | The inventory details for this product |  [optional] |
|**shortDescription** | **String** | Product short description |  [optional] |
|**subscriptionOnly** | **Boolean** | If the product is a subscription-only product |  [optional] |
|**storefrontHidden** | **Boolean** | If the product should not be shown in the storefront |  [optional] |
|**countryTaxable** | **Boolean** | If country-based taxes should be applied to this product |  [optional] |
|**stateTaxable** | **Boolean** | If state-based taxes should be applied to this product |  [optional] |
|**cityTaxable** | **Boolean** | If city-based taxes should be applied to this product |  [optional] |
|**subscriptionPlans** | [**List&lt;SubscriptionPlanList&gt;**](SubscriptionPlanList.md) | List of subscription plans associated with the product. Can be empty. |  [optional] |
|**topHtml** | **String** |  |  [optional] |
|**bottomHtml** | **String** |  |  [optional] |
|**isPackage** | **Boolean** |  |  [optional] |
|**needsDigitalDelivery** | **Boolean** |  |  [optional] |
|**hasLegacyImage** | **Boolean** |  |  [optional] |
|**deliveryDescription** | **String** |  |  [optional] |
|**createTime** | **String** |  |  [optional] |
|**updateTime** | **String** |  |  [optional] |


## Implemented Interfaces

* Serializable

