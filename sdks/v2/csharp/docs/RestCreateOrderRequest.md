# Keap.Core.V2.Model.RestCreateOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContactId** | **string** |  | 
**LeadAffiliateId** | **string** |  | [optional] 
**Notes** | **string** |  | [optional] 
**OrderItems** | [**List&lt;CreateOrderItemRequest&gt;**](CreateOrderItemRequest.md) |  | [optional] 
**OrderTime** | **string** | The date and time of the order. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**OrderTitle** | **string** |  | 
**OrderType** | **string** | The order type. Valid values are: ONLINE, OFFLINE. | [optional] 
**PromoCodes** | **List&lt;string&gt;** | Uses multiple strings as promo codes. The corresponding discount will be applied to the order. | [optional] 
**SalesAffiliateId** | **string** |  | [optional] 
**ShippingAddress** | [**AddressInformation**](AddressInformation.md) |  | [optional] 
**Terms** | **string** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

