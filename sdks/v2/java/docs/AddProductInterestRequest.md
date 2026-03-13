

# AddProductInterestRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**type** | [**TypeEnum**](#TypeEnum) | The product interest type. |  |
|**entityId** | **String** | The &#x60;product_id&#x60; (when the &#x60;type&#x60; is set to &#x60;PRODUCT&#x60;)  or the &#x60;subscription_plan_id&#x60; (when the &#x60;type&#x60; is set to &#x60;SUBSCRIPTION_PLAN&#x60;).  |  |
|**price** | **Double** | The price per unit of the product. |  |
|**quantity** | **Integer** | Defaults to &#x60;1&#x60;. |  [optional] |
|**discountPercent** | **Integer** | Defaults to &#x60;0&#x60;. |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| PRODUCT | &quot;PRODUCT&quot; |
| SUBSCRIPTION_PLAN | &quot;SUBSCRIPTION_PLAN&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

