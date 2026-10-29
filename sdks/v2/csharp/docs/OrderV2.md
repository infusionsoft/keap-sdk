# Keap.Core.V2.Model.OrderV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Unique identifier for the order | [optional] 
**Title** | **string** | Title of the order | [optional] 
**Status** | **string** | The order status. | [optional] 
**Total** | [**CurrencyValue**](CurrencyValue.md) | The full amount of the order (the sum of all order items, including any discounts, taxes and shipping). This value does not change as payments are made or as payment plan installments come due. The remaining balance of the order can be calculated as total - total_paid. | [optional] 
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
**TotalPaid** | [**CurrencyValue**](CurrencyValue.md) | The sum of all payments applied to the order, regardless of whether the order has a payment plan. | [optional] 
**TotalDue** | [**CurrencyValue**](CurrencyValue.md) | The portion of the order total that has come due, before any payments are subtracted. This is not the current balance. Without a payment plan, this is equal to total. With a payment plan, this is the sum of the payment plan installments whose due date has passed (never more than total), as of the last time the order amounts were recalculated. The amount currently owed (past due) can be calculated as total_due - total_paid. Omitted when zero. | [optional] 
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
**SentTime** | **DateTime** | The date and time the invoice was sent. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**DueTime** | **DateTime** | The date and time the invoice is due. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**ExternalCreateUser** | **string** | The external system user that created this order. | [optional] 
**ExternalCreateTime** | **DateTime** | The date and time the order was created in the external system. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**ExternalUpdateTime** | **DateTime** | The date and time the order was last updated in the external system. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

