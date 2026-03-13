

# ProductInterest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | The product interest ID |  [optional] |
|**type** | [**TypeEnum**](#TypeEnum) | The product interest type |  [optional] |
|**quantity** | **Integer** | The quantity of product. |  [optional] |
|**price** | [**CurrencyValue**](CurrencyValue.md) | The price per unit of the product. |  [optional] |
|**interestId** | **String** | The interest ID |  [optional] |
|**discountPercent** | **Integer** | The percent to discount the product. Percent represented in a whole number, for example 10 is 10% |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| PRODUCT | &quot;PRODUCT&quot; |
| SUBSCRIPTION_PLAN | &quot;SUBSCRIPTION_PLAN&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

