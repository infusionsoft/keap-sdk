# Keap.Core.V2.Model.UpdateSubscriptionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Quantity** | **int** | The subscription quantity. Must be 1 or greater. | [optional] 
**Active** | **bool** | If the subscription is active or not. | [optional] 
**ContactId** | **string** | Id of the contact associated with the subscription. | [optional] 
**SubscriptionPlanId** | **string** | Id of the product subscription plan. | [optional] 
**BillingAmount** | **double** | The billing amount. Must be 0 or greater. | [optional] 
**AutoCharge** | **bool** | If the subscription should auto charge on the next billing date. | [optional] 
**MaxChargeAttempts** | **int** | Maximum number of charge attempts. Must be 1 or greater. | [optional] 
**DaysBetweenRetries** | **int** | Number of days between charge attempts. Must be 1 or greater. | [optional] 
**BillingFrequency** | **int** | The number of days between billing cycles. Must be 1 or greater. | [optional] 
**BillingCycle** | **string** | The billing cycle for the subscription. | [optional] 
**NextBillDate** | **DateOnly** | The next date the subscription will bill. Must not be in the past. | [optional] 
**EndDate** | **DateOnly** | The date the subscription will end. Must not be in the past. | [optional] 
**PaymentMethodId** | **string** | Id associated with the payment method. | [optional] 
**AllowTax** | **bool** | Only works if the product associated with the product subscription is taxable. | [optional] 
**LeadAffiliateId** | **string** | The affiliate id for the lead of the subscription. | [optional] 
**SaleAffiliateId** | **string** | The affiliate id for the sale of the subscription. | [optional] 
**ShippingAddress** | [**AddressRequest**](AddressRequest.md) | The shipping address for the subscription. | [optional] 
**PromoCode** | **string** | The promo code for the subscription. | [optional] 
**ShippingOptionId** | **string** | The shipping option ID for the subscription. | [optional] 
**ReasonStopped** | **string** | The reason the subscription is no longer active. | [optional] 
**CustomFields** | [**List&lt;CustomFieldValue&gt;**](CustomFieldValue.md) | List of custom field values to apply to this subscription | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

