

# UpdateOrderRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**contactId** | **String** |  |  [optional] |
|**leadAffiliateId** | **String** |  |  [optional] |
|**orderTime** | **String** |  |  [optional] |
|**orderTitle** | **String** |  |  [optional] |
|**orderType** | [**OrderTypeEnum**](#OrderTypeEnum) |  |  [optional] |
|**promoCodes** | **List&lt;String&gt;** | Uses multiple strings as promo codes. The corresponding discount will be applied to the order. |  [optional] |
|**salesAffiliateId** | **String** |  |  [optional] |
|**shippingAddress** | [**AddressInformation**](AddressInformation.md) |  |  [optional] |



## Enum: OrderTypeEnum

| Name | Value |
|---- | -----|
| OFFLINE | &quot;OFFLINE&quot; |
| ONLINE | &quot;ONLINE&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

