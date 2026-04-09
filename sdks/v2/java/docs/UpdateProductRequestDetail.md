

# UpdateProductRequestDetail


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**name** | **String** | Product name |  [optional] |
|**sku** | **String** | Product SKU |  [optional] |
|**price** | **Long** | The product price. The value is in the currency&#39;s smallest unit. e.g. $12.50 is 1250. Must be greater than or equal to 0. |  [optional] |
|**active** | **Boolean** | True means active, False means inactive |  [optional] |
|**description** | **String** | Product long description |  [optional] |
|**shippable** | **Boolean** | If the product requires shipping |  [optional] |
|**weight** | **Double** | The product weight. Must be greater than or equal to 0. |  [optional] |
|**taxable** | **Boolean** | Whether or not the product should be taxed |  [optional] |
|**shortDescription** | **String** | Product short description |  [optional] |
|**subscriptionOnly** | **Boolean** | If the product is a subscription-only product |  [optional] |
|**storefrontHidden** | **Boolean** | If the product should not be shown in the storefront |  [optional] |
|**countryTaxable** | **Boolean** | If country-based taxes should be applied to this product |  [optional] |
|**stateTaxable** | **Boolean** | If state-based taxes should be applied to this product |  [optional] |
|**cityTaxable** | **Boolean** | If city-based taxes should be applied to this product |  [optional] |
|**inventoryLimit** | **Integer** | The inventory limit for this product. Must be greater than or equal to 0. |  [optional] |
|**outOfStockEnabled** | **Boolean** | The flag to enable out of stock inventory |  [optional] |
|**emailForInventoryNotifications** | **String** | The email address for notifications about inventory |  [optional] |
|**topHtml** | **String** |  |  [optional] |
|**bottomHtml** | **String** |  |  [optional] |
|**isPackage** | **Boolean** |  |  [optional] |
|**needsDigitalDelivery** | **Boolean** |  |  [optional] |
|**deliveryDescription** | **String** |  |  [optional] |


## Implemented Interfaces

* Serializable

