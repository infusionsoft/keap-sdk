

# UpdateProductInventoryRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**quantity** | **Integer** | The amount to increment or decrement by. Must be greater than or equal to 0. |  |
|**type** | [**TypeEnum**](#TypeEnum) | The direction to alter the quantity in |  |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| INCREASE | &quot;INCREASE&quot; |
| DECREASE | &quot;DECREASE&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

