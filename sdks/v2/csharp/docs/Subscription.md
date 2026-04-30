# Keap.Core.V2.Model.Subscription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Id of the subscription. | [optional] 
**Quantity** | **long** | The subscription quantity. | [optional] 
**Active** | **bool** | If the subscription is active or not. | [optional] 
**ContactId** | **string** | Id of the contact associated with the subscription. | [optional] 
**ProductId** | **string** | Id of the product associated with the subscription. | [optional] 
**SubscriptionPlanId** | **string** | Id of the product subscription plan. | [optional] 
**BillingAmount** | **double** | The billing amount. | [optional] 
**AutoCharge** | **bool** | If the subscription should auto charge on the next billing date. | [optional] 
**BillingFrequency** | **int** | The billing frequency in days. | [optional] 
**BillingCycle** | **string** | The billing cycle of the subscription. | [optional] 
**StartDate** | **DateOnly** | The first day the subscription will bill. | [optional] 
**LastBillDate** | **DateOnly** | The last date the subscription was billed. | [optional] 
**NextBillDate** | **DateOnly** | The next date the subscription will bill. | [optional] 
**EndDate** | **DateOnly** | The last date the subscription will bill. | [optional] 
**MerchantAccountId** | **string** | The merchant account id associated with the subscription. | [optional] 
**PaymentMethodId** | **string** | Id associated with the payment method. | [optional] 
**AllowTax** | **bool** | If the subscription allows tax. | [optional] 
**MaxChargeAttempts** | **int** | Maximum number of charge attempts. | [optional] 
**DaysBetweenRetries** | **int** | Number of days between charge attempts. | [optional] 
**LeadAffiliateId** | **string** | The affiliate id for the lead of the subscription. | [optional] 
**SaleAffiliateId** | **string** | The affiliate id for the sale of the subscription. | [optional] 
**ShippingAddress** | [**Address**](Address.md) | The shipping address for the subscription. | [optional] 
**PromoCode** | **string** | The promo code for the subscription. | [optional] 
**ShippingOptionId** | **string** | The shipping option ID for the subscription. | [optional] 
**ReasonStopped** | **string** | The reason the subscription is no longer active. | [optional] 
**ModificationTime** | **DateTime** | The date and time the subscription was last modified. | [optional] 
**CustomFields** | [**List&lt;CustomFieldValue&gt;**](CustomFieldValue.md) | List of custom field values applied to this subscription | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

