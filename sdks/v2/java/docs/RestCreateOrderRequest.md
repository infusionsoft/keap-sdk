

# RestCreateOrderRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**notes** | **String** | Internal notes |  [optional] |
|**terms** | **String** | Order terms |  [optional] |
|**title** | **String** | A title for the invoice |  [optional] |
|**contactId** | **String** | ID of the contact for this order |  |
|**orderItems** | [**List&lt;CreateOrderItemRequest&gt;**](CreateOrderItemRequest.md) | List of items to include in the order |  [optional] |
|**orderTitle** | **String** | Title for the order |  |
|**orderTime** | **ZonedDateTime** | The date and time of the order. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) |  |
|**orderType** | [**OrderTypeEnum**](#OrderTypeEnum) | The order type. |  |
|**promoCodes** | **List&lt;String&gt;** | Uses multiple strings as promo codes. The corresponding discount will be applied to the order. |  [optional] |
|**leadAffiliateId** | **String** | Lead affiliate ID |  [optional] |
|**salesAffiliateId** | **String** | Sales affiliate ID |  [optional] |
|**shippingAddress** | [**AddressInformation**](AddressInformation.md) | Shipping address for the order |  [optional] |
|**customFields** | [**List&lt;CustomFieldValue&gt;**](CustomFieldValue.md) | List of custom field values to apply to this order |  [optional] |
|**sentTime** | **ZonedDateTime** | The date and time the invoice was sent. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) |  [optional] |
|**dueTime** | **ZonedDateTime** | The date and time the invoice is due. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) |  [optional] |
|**invoiceNumber** | **String** | Invoice number |  [optional] |
|**externalCreateUser** | **String** | The external system user that created this order. |  [optional] |
|**externalCreateTime** | **ZonedDateTime** | The date and time the order was created in the external system. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) |  [optional] |
|**externalUpdateTime** | **ZonedDateTime** | The date and time the order was last updated in the external system. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) |  [optional] |



## Enum: OrderTypeEnum

| Name | Value |
|---- | -----|
| ONLINE | &quot;ONLINE&quot; |
| OFFLINE | &quot;OFFLINE&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

