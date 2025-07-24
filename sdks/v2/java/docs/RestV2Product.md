

# RestV2Product


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**active** | **Boolean** | True means active, False means inactive |  [optional] |
|**categories** | **List&lt;String&gt;** | List of category ids to indicate which categories this product will belong to. Can be empty. |  [optional] |
|**cityTaxable** | **Boolean** | If city-based taxes should be applied to this product |  [optional] |
|**countryTaxable** | **Boolean** | If country-based taxes should be applied to this product |  [optional] |
|**description** | **String** | Product long description |  [optional] |
|**id** | **String** | The product ID |  [optional] |
|**inventory** | [**ProductInventory**](ProductInventory.md) |  |  [optional] |
|**name** | **String** | Product name |  [optional] |
|**options** | [**List&lt;ProductOptions&gt;**](ProductOptions.md) | List of product options. Can be empty. |  [optional] |
|**price** | [**CurrencyValue**](CurrencyValue.md) |  |  [optional] |
|**shippable** | **Boolean** | If the product requires shipping |  [optional] |
|**shortDescription** | **String** | Product short description |  [optional] |
|**sku** | **String** | Product SKU |  [optional] |
|**stateTaxable** | **Boolean** | If state-based taxes should be applied to this product |  [optional] |
|**storefrontHidden** | **Boolean** | If the product should not be shown in the storefront |  [optional] |
|**subscriptionOnly** | **Boolean** | If the product is a subscription-only product |  [optional] |
|**subscriptionPlans** | [**List&lt;SubscriptionPlan&gt;**](SubscriptionPlan.md) | List of subscription plans associated with the product. Can be empty. |  [optional] |
|**taxable** | **Boolean** | Whether or not the product should be taxed |  [optional] |
|**weight** | **Double** | Product weight |  [optional] |


## Implemented Interfaces

* Serializable

