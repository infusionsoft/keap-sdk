# Keap.Core.V2.Model.Order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowPayment** | **bool** | Whether or not card-related payments should be allowed on this order. Applies only to Keap Pro/Max edition. | [optional] 
**AllowPaypal** | **bool** | Whether or not PayPal payments should be allowed on this order. Applies only to Keap Pro/Max edition. | [optional] 
**Contact** | [**BasicContact**](BasicContact.md) |  | [optional] 
**CreationTime** | **string** | When this order was originally created. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**Files** | [**List&lt;InvoiceFile&gt;**](InvoiceFile.md) | A list of attached files to this order. Applies only to Keap Pro/Max edition. | [optional] 
**Id** | **string** |  | [optional] 
**InvoiceNumber** | **string** | The associated invoice identifier. Applies only to Keap Pro/Max edition. Feature not yet supported. | [optional] 
**LeadAffiliateId** | **string** |  | [optional] 
**ModificationTime** | **string** | When this order was changed. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**Notes** | **string** |  | [optional] 
**OrderItems** | [**List&lt;OrderItem&gt;**](OrderItem.md) |  | [optional] 
**OrderTime** | **string** | A user-defined date and time of the order. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**OrderType** | **string** | The order type. Valid values are: ONLINE, OFFLINE. | [optional] 
**PaymentPlan** | [**PaymentPlan**](PaymentPlan.md) |  | [optional] 
**RefundTotal** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**SalesAffiliateId** | **string** |  | [optional] 
**ShippingInformation** | [**ShippingInformation**](ShippingInformation.md) |  | [optional] 
**SourceType** | **string** | The source where the order was created. Valid values include: API, CHECKOUT_FORM, INVOICE, MANUAL_PAYMENT, QUICKBOOKS, UNKNOWN. | [optional] 
**Status** | **string** | The order status. Valid values are: DRAFT, SENT, VIEWED, PAID. | [optional] 
**Terms** | **string** |  | [optional] 
**Title** | **string** |  | [optional] 
**Total** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**TotalDue** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**TotalPaid** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

