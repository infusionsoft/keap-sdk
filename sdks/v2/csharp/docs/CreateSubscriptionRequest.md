# Keap.Core.V2.Model.CreateSubscriptionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | **bool** | If the subscription is active or not. Default is true | [optional] 
**AllowDuplicate** | **bool** | If true, it will disable the check to see if there is already an identical subscription for the contact. Default is false. | [optional] 
**AllowTax** | **bool** | Only works if the product associated with the product subscription is taxable. Default is false. | [optional] 
**AutoCharge** | **bool** | If the subscription should auto charge on the next billing date. Default is true. | [optional] 
**BillingAmount** | **double** | The billing amount. Must be 0 or greater. Default is the price in the product subscription plan. | [optional] 
**ContactId** | **string** | Id of the contact to create the subscription for. | 
**DaysBetweenRetries** | **int** | Number of days between charge attempts. Must be 1 or greater. Default is the configured [Num Days Between Retries] value. | [optional] 
**LeadAffiliateId** | **string** | The affiliate id for the lead of the subscription. Default is 0. | [optional] 
**MaxChargeAttempts** | **int** | Maximum number of charge attempts. Must be 1 or greater. Default is the configured [Max Retries] value. | [optional] 
**PaymentMethodId** | **string** | Id associated with the payment method. Default is the contact&#39;s most recently used card, if auto charge is true. Default is 0 otherwise. | [optional] 
**Quantity** | **int** | The subscription quantity. Must be 1 or greater. Default is 1. | [optional] 
**SaleAffiliateId** | **string** | The affiliate id for the sale of the subscription. Default is 0. | [optional] 
**ShippingAddress** | [**AddressRequest**](AddressRequest.md) |  | [optional] 
**StartDate** | **string** | The first day the subscription will bill. Must not be in the past. Default is today. | [optional] 
**SubscriptionPlanId** | **string** | Id of the product subscription plan. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

