

# RestV2Order


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**allowPayment** | **Boolean** |  |  [optional] |
|**allowPaypal** | **Boolean** |  |  [optional] |
|**contact** | [**BasicContact**](BasicContact.md) |  |  [optional] |
|**creationTime** | **String** |  |  [optional] |
|**id** | **String** |  |  [optional] |
|**invoiceNumber** | **String** |  |  [optional] |
|**leadAffiliateId** | **String** |  |  [optional] |
|**modificationTime** | **String** |  |  [optional] |
|**notes** | **String** |  |  [optional] |
|**orderItems** | [**List&lt;RestV2OrderItem&gt;**](RestV2OrderItem.md) |  |  [optional] |
|**orderTime** | **String** |  |  [optional] |
|**orderType** | **String** |  |  [optional] |
|**paymentPlan** | [**PaymentPlan**](PaymentPlan.md) |  |  [optional] |
|**recurring** | **Boolean** |  |  [optional] |
|**refundTotal** | **Double** |  |  [optional] |
|**salesAffiliateId** | **String** |  |  [optional] |
|**shippingInformation** | [**ShippingInformation**](ShippingInformation.md) |  |  [optional] |
|**sourceType** | [**SourceTypeEnum**](#SourceTypeEnum) |  |  [optional] |
|**status** | **String** |  |  [optional] |
|**terms** | **String** |  |  [optional] |
|**title** | **String** |  |  [optional] |
|**total** | **Double** |  |  [optional] |
|**totalDue** | **Double** |  |  [optional] |
|**totalPaid** | **Double** |  |  [optional] |



## Enum: SourceTypeEnum

| Name | Value |
|---- | -----|
| INVOICE | &quot;INVOICE&quot; |
| API | &quot;API&quot; |
| CHECKOUT_FORM | &quot;CHECKOUT_FORM&quot; |
| MANUAL_PAYMENT | &quot;MANUAL_PAYMENT&quot; |
| UNKNOWN | &quot;UNKNOWN&quot; |
| QBO_SYNC | &quot;QBO_SYNC&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

