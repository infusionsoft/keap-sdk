

# CreateRestOrderItemRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**description** | **String** |  |  [optional] |
|**price** | **Double** | Overridable price of the product. If not specified, the default will be used. Must be greater than or equal to 0. |  [optional] |
|**productId** | **String** | The id of the product to be added to the order. |  |
|**productType** | [**ProductTypeEnum**](#ProductTypeEnum) |  |  [optional] |
|**quantity** | **Integer** | Quantity must be greater than or equal to 1 |  |



## Enum: ProductTypeEnum

| Name | Value |
|---- | -----|
| PRODUCT | &quot;PRODUCT&quot; |
| DIGITAL | &quot;DIGITAL&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

