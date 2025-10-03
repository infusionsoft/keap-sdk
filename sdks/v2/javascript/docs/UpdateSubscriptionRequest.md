# KeapCoreServiceV2Sdk.UpdateSubscriptionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | If the subscription is active or not. | [optional] 
**allowTax** | **Boolean** | Only works if the product associated with the product subscription is taxable. | [optional] 
**autoCharge** | **Boolean** | If the subscription should auto charge on the next billing date. | [optional] 
**billingAmount** | **Number** | The billing amount. Must be 0 or greater. | [optional] 
**billingCycle** | **String** | The billing cycle for the subscription. | [optional] 
**billingFrequency** | **Number** | The number of days between billing cycles. Must be 1 or greater. | [optional] 
**contactId** | **String** | Id of the contact to create the subscription for. | 
**daysBetweenRetries** | **Number** | Number of days between charge attempts. Must be 1 or greater. | [optional] 
**endDate** | **String** | The date the subscription will end. Must not be in the past. | [optional] 
**leadAffiliateId** | **String** | The affiliate id for the lead of the subscription. | [optional] 
**maxChargeAttempts** | **Number** | Maximum number of charge attempts. Must be 1 or greater. | [optional] 
**nextBillDate** | **String** | The next date the subscription will bill. Must not be in the past. | [optional] 
**paymentMethodId** | **String** | Id associated with the payment method. | [optional] 
**quantity** | **Number** | The subscription quantity. Must be 1 or greater. | [optional] 
**saleAffiliateId** | **String** | The affiliate id for the sale of the subscription. | [optional] 
**shippingAddress** | [**AddressRequest**](AddressRequest.md) |  | [optional] 
**subscriptionPlanId** | **String** | Id of the product subscription plan. | [optional] 



## Enum: BillingCycleEnum


* `YEAR` (value: `"YEAR"`)

* `MONTH` (value: `"MONTH"`)

* `WEEK` (value: `"WEEK"`)

* `DAY` (value: `"DAY"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




