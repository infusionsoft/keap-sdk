# Keap.Core.V2.Model.UpdateSubscriptionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | **bool** | If the subscription is active or not. | [optional] 
**AllowTax** | **bool** | Only works if the product associated with the product subscription is taxable. | [optional] 
**AutoCharge** | **bool** | If the subscription should auto charge on the next billing date. | [optional] 
**BillingAmount** | **double** | The billing amount. Must be 0 or greater. | [optional] 
**BillingCycle** | **string** | The billing cycle for the subscription. | [optional] 
**BillingFrequency** | **int** | The number of days between billing cycles. Must be 1 or greater. | [optional] 
**ContactId** | **string** | Id of the contact to create the subscription for. | 
**DaysBetweenRetries** | **int** | Number of days between charge attempts. Must be 1 or greater. | [optional] 
**EndDate** | **string** | The date the subscription will end. Must not be in the past. | [optional] 
**LeadAffiliateId** | **string** | The affiliate id for the lead of the subscription. | [optional] 
**MaxChargeAttempts** | **int** | Maximum number of charge attempts. Must be 1 or greater. | [optional] 
**NextBillDate** | **string** | The next date the subscription will bill. Must not be in the past. | [optional] 
**PaymentMethodId** | **string** | Id associated with the payment method. | [optional] 
**Quantity** | **int** | The subscription quantity. Must be 1 or greater. | [optional] 
**SaleAffiliateId** | **string** | The affiliate id for the sale of the subscription. | [optional] 
**ShippingAddress** | [**AddressRequest**](AddressRequest.md) |  | [optional] 
**SubscriptionPlanId** | **string** | Id of the product subscription plan. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

