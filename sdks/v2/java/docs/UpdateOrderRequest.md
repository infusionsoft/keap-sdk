

# UpdateOrderRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**contactId** | **String** |  |  [optional] |
|**leadAffiliateId** | **String** |  |  [optional] |
|**notes** | **String** |  |  [optional] |
|**orderTime** | **String** | The date and time of the order. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) |  [optional] |
|**orderTitle** | **String** |  |  [optional] |
|**orderType** | [**OrderTypeEnum**](#OrderTypeEnum) | The order type. Valid values are: ONLINE, OFFLINE. |  [optional] |
|**paymentPlan** | [**UpdatedPaymentPlan**](UpdatedPaymentPlan.md) |  |  [optional] |
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

