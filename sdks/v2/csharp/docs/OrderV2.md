# Keap.Core.V2.Model.OrderV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Unique identifier for the order | [optional] 
**Title** | **string** | Title of the order | [optional] 
**Status** | **string** | The order status. | [optional] 
**Total** | [**CurrencyValue**](CurrencyValue.md) | The total amount of the order. | [optional] 
**Contact** | [**BasicContact**](BasicContact.md) | Contact associated with this order | [optional] 
**Notes** | **string** | Internal notes for the order | [optional] 
**Terms** | **string** | Order terms and conditions | [optional] 
**OrderType** | **string** | The order type. | [optional] 
**SourceType** | **string** | The source where the order was created. | [optional] 
**CreationTime** | **DateTime** | When this order was originally created. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**ModificationTime** | **DateTime** | When this order was changed. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**OrderTime** | **DateTime** | A user-defined date and time of the order. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**LeadAffiliateId** | **string** | ID of the lead affiliate | [optional] 
**SalesAffiliateId** | **string** | ID of the sales affiliate | [optional] 
**TotalPaid** | [**CurrencyValue**](CurrencyValue.md) | The total amount paid to the order. | [optional] 
**TotalDue** | [**CurrencyValue**](CurrencyValue.md) | The total amount of the order that is due. This is not current balance. | [optional] 
**ShippingInformation** | [**ShippingInformation**](ShippingInformation.md) | Shipping details for the order | [optional] 
**RefundTotal** | [**CurrencyValue**](CurrencyValue.md) | Total amount refunded | [optional] 
**AllowPayment** | **bool** | Whether or not card-related payments should be allowed on this order. Applies only to Keap Pro/Max edition. | [optional] 
**AllowPaypal** | **bool** | Whether or not PayPal payments should be allowed on this order. Applies only to Keap Pro/Max edition. | [optional] 
**OrderItems** | [**List&lt;OrderItem&gt;**](OrderItem.md) | List of items in the order | [optional] 
**PaymentPlan** | [**PaymentPlan**](PaymentPlan.md) | Payment plan details if applicable | [optional] 
**InvoiceNumber** | **string** | The associated invoice identifier. Applies only to Keap Pro/Max edition. Feature not yet supported. | [optional] 
**Files** | [**List&lt;InvoiceFile&gt;**](InvoiceFile.md) | A list of attached files to this order. Applies only to Keap Pro/Max edition. | [optional] 
**CreditStatus** | **string** | Credit status of the order | [optional] 
**PromoCode** | **string** | Promotional code applied | [optional] 
**RefundStatus** | **string** | Refund status | [optional] 
**Synced** | **bool** | Whether order is synced with external systems | [optional] 
**InvoiceId** | **string** | Associated invoice ID | [optional] 
**CustomFields** | [**List&lt;CustomFieldValue&gt;**](CustomFieldValue.md) | List of custom field values applied to this order | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

