# KeapCoreServiceV2Sdk.UpdateSubscriptionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantity** | **Number** | The subscription quantity. Must be 1 or greater. | [optional] 
**active** | **Boolean** | If the subscription is active or not. | [optional] 
**contactId** | **String** | Id of the contact associated with the subscription. | [optional] 
**subscriptionPlanId** | **String** | Id of the product subscription plan. | [optional] 
**billingAmount** | **Number** | The billing amount. Must be 0 or greater. | [optional] 
**autoCharge** | **Boolean** | If the subscription should auto charge on the next billing date. | [optional] 
**maxChargeAttempts** | **Number** | Maximum number of charge attempts. Must be 1 or greater. | [optional] 
**daysBetweenRetries** | **Number** | Number of days between charge attempts. Must be 1 or greater. | [optional] 
**billingFrequency** | **Number** | The number of days between billing cycles. Must be 1 or greater. | [optional] 
**billingCycle** | **String** | The billing cycle for the subscription. | [optional] 
**nextBillDate** | **Date** | The next date the subscription will bill. Must not be in the past. | [optional] 
**endDate** | **Date** | The date the subscription will end. Must not be in the past. | [optional] 
**paymentMethodId** | **String** | Id associated with the payment method. | [optional] 
**allowTax** | **Boolean** | Only works if the product associated with the product subscription is taxable. | [optional] 
**leadAffiliateId** | **String** | The affiliate id for the lead of the subscription. | [optional] 
**saleAffiliateId** | **String** | The affiliate id for the sale of the subscription. | [optional] 
**shippingAddress** | [**AddressRequest**](AddressRequest.md) | The shipping address for the subscription. | [optional] 
**promoCode** | **String** | The promo code for the subscription. | [optional] 
**shippingOptionId** | **String** | The shipping option ID for the subscription. | [optional] 
**reasonStopped** | **String** | The reason the subscription is no longer active. | [optional] 
**customFields** | [**[CustomFieldValue]**](CustomFieldValue.md) | List of custom field values to apply to this subscription | [optional] 



## Enum: BillingCycleEnum


* `YEAR` (value: `"YEAR"`)

* `MONTH` (value: `"MONTH"`)

* `WEEK` (value: `"WEEK"`)

* `DAY` (value: `"DAY"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




