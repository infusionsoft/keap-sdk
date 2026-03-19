# Keap.Core.V2.Model.UpdateOrderRequest
order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Notes** | **string** | Internal notes | [optional] 
**Terms** | **string** | Order terms | [optional] 
**ContactId** | **string** | ID of the contact for this order | [optional] 
**OrderTitle** | **string** | Title for the order | [optional] 
**OrderTime** | **DateTime** | The date and time of the order. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**OrderType** | **string** | The order type. | [optional] 
**PromoCodes** | **List&lt;string&gt;** | Uses multiple strings as promo codes. The corresponding discount will be applied to the order. | [optional] 
**LeadAffiliateId** | **string** | Lead affiliate ID | [optional] 
**SalesAffiliateId** | **string** | Sales affiliate ID | [optional] 
**ShippingAddress** | [**AddressInformation**](AddressInformation.md) | Shipping address for the order | [optional] 
**PaymentPlan** | [**UpdatedPaymentPlan**](UpdatedPaymentPlan.md) | Payment plan details | [optional] 
**CustomFields** | [**List&lt;CustomFieldValue&gt;**](CustomFieldValue.md) | List of custom field values to apply to this order | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

