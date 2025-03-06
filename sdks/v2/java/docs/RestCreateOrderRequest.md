

# RestCreateOrderRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**contactId** | **String** |  |  |
|**leadAffiliateId** | **String** |  |  [optional] |
|**notes** | **String** |  |  [optional] |
|**orderItems** | [**List&lt;CreateRestOrderItemRequest&gt;**](CreateRestOrderItemRequest.md) |  |  |
|**orderTime** | **String** |  |  |
|**orderTitle** | **String** |  |  |
|**orderType** | [**OrderTypeEnum**](#OrderTypeEnum) |  |  |
|**promoCodes** | **List&lt;String&gt;** | Uses multiple strings as promo codes. The corresponding discount will be applied to the order. |  [optional] |
|**salesAffiliateId** | **String** |  |  [optional] |
|**shippingAddress** | [**AddressInformation**](AddressInformation.md) |  |  [optional] |
|**terms** | **String** |  |  [optional] |



## Enum: OrderTypeEnum

| Name | Value |
|---- | -----|
| OFFLINE | &quot;OFFLINE&quot; |
| ONLINE | &quot;ONLINE&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

