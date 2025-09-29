# KeapCoreServiceV2Sdk.UpdateOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contactId** | **String** |  | [optional] 
**leadAffiliateId** | **String** |  | [optional] 
**notes** | **String** |  | [optional] 
**orderTime** | **String** | The date and time of the order. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**orderTitle** | **String** |  | [optional] 
**orderType** | **String** | The order type. Valid values are: ONLINE, OFFLINE. | [optional] 
**paymentPlan** | [**UpdatedPaymentPlan**](UpdatedPaymentPlan.md) |  | [optional] 
**promoCodes** | **[String]** | Uses multiple strings as promo codes. The corresponding discount will be applied to the order. | [optional] 
**salesAffiliateId** | **String** |  | [optional] 
**shippingAddress** | [**AddressInformation**](AddressInformation.md) |  | [optional] 
**terms** | **String** |  | [optional] 



## Enum: OrderTypeEnum


* `OFFLINE` (value: `"OFFLINE"`)

* `ONLINE` (value: `"ONLINE"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




