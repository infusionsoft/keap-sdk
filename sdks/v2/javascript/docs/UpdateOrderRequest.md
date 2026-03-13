# KeapCoreServiceV2Sdk.UpdateOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notes** | **String** | Internal notes | [optional] 
**terms** | **String** | Order terms | [optional] 
**contactId** | **String** | ID of the contact for this order | [optional] 
**orderTitle** | **String** | Title for the order | [optional] 
**orderTime** | **Date** | The date and time of the order. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**orderType** | **String** | The order type. | [optional] 
**promoCodes** | **[String]** | Uses multiple strings as promo codes. The corresponding discount will be applied to the order. | [optional] 
**leadAffiliateId** | **String** | Lead affiliate ID | [optional] 
**salesAffiliateId** | **String** | Sales affiliate ID | [optional] 
**shippingAddress** | [**AddressInformation**](AddressInformation.md) | Shipping address for the order | [optional] 
**paymentPlan** | [**UpdatedPaymentPlan**](UpdatedPaymentPlan.md) | Payment plan details | [optional] 



## Enum: OrderTypeEnum


* `ONLINE` (value: `"ONLINE"`)

* `OFFLINE` (value: `"OFFLINE"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




