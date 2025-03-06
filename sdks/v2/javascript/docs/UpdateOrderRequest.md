# KeapCoreServiceV2Sdk.UpdateOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contactId** | **String** |  | [optional] 
**leadAffiliateId** | **String** |  | [optional] 
**notes** | **String** |  | [optional] 
**orderTime** | **String** |  | [optional] 
**orderTitle** | **String** |  | [optional] 
**orderType** | **String** |  | [optional] 
**promoCodes** | **[String]** | Uses multiple strings as promo codes. The corresponding discount will be applied to the order. | [optional] 
**salesAffiliateId** | **String** |  | [optional] 
**shippingAddress** | [**AddressInformation**](AddressInformation.md) |  | [optional] 
**terms** | **String** |  | [optional] 



## Enum: OrderTypeEnum


* `OFFLINE` (value: `"OFFLINE"`)

* `ONLINE` (value: `"ONLINE"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




