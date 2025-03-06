

# AddProductInterestRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**discountPercent** | **Integer** |  |  [optional] |
|**entityId** | **String** | The &#x60;product_id&#x60; (when the &#x60;type&#x60; is set to &#x60;PRODUCT&#x60;)  or the &#x60;subscription_id&#x60; (when the &#x60;type&#x60; is set to &#x60;SUBSCRIPTION_PLAN&#x60;).  |  |
|**price** | **Double** |  |  |
|**quantity** | **Integer** |  |  [optional] |
|**type** | [**TypeEnum**](#TypeEnum) |  |  |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| PRODUCT | &quot;PRODUCT&quot; |
| SUBSCRIPTION_PLAN | &quot;SUBSCRIPTION_PLAN&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

