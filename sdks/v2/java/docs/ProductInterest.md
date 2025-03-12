

# ProductInterest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**discountPercent** | **Integer** | The percent to discount the product. Percent represented in a whole number, for example 10 is 10% |  [optional] |
|**id** | **String** | The product interest ID |  [optional] |
|**interestId** | **String** | The interest ID |  [optional] |
|**price** | [**CurrencyValue**](CurrencyValue.md) |  |  [optional] |
|**quantity** | **Integer** | The quantity of product. |  [optional] |
|**type** | [**TypeEnum**](#TypeEnum) | The product interest type |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| PRODUCT | &quot;PRODUCT&quot; |
| SUBSCRIPTION_PLAN | &quot;SUBSCRIPTION_PLAN&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

