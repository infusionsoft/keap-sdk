# KeapCoreServiceV2Sdk.SubscriptionDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Id of the subscription. | [optional] 
**quantity** | **Number** | The subscription quantity. | [optional] 
**active** | **Boolean** | If the subscription is active or not. | [optional] 
**contactId** | **String** | Id of the contact associated with the subscription. | [optional] 
**productId** | **String** | Id of the product associated with the subscription. | [optional] 
**subscriptionPlanId** | **String** | Id of the product subscription plan. | [optional] 
**billingAmount** | **Number** | The billing amount. | [optional] 
**autoCharge** | **Boolean** | If the subscription should auto charge on the next billing date. | [optional] 
**billingFrequency** | **Number** | The billing frequency in days. | [optional] 
**billingCycle** | **String** | The billing cycle of the subscription. | [optional] 
**startDate** | **Date** | The first day the subscription will bill. | [optional] 
**lastBillDate** | **Date** | The last date the subscription was billed. | [optional] 
**nextBillDate** | **Date** | The next date the subscription will bill. | [optional] 
**endDate** | **Date** | The last date the subscription will bill. | [optional] 
**merchantAccountId** | **String** | The merchant account id associated with the subscription. | [optional] 
**paymentMethodId** | **String** | Id associated with the payment method. | [optional] 
**allowTax** | **Boolean** | If the subscription allows tax. | [optional] 
**maxChargeAttempts** | **Number** | Maximum number of charge attempts. | [optional] 
**daysBetweenRetries** | **Number** | Number of days between charge attempts. | [optional] 
**leadAffiliateId** | **String** | The affiliate id for the lead of the subscription. | [optional] 
**saleAffiliateId** | **String** | The affiliate id for the sale of the subscription. | [optional] 
**shippingAddress** | [**AddressDetail**](AddressDetail.md) | The shipping address for the subscription. This field is omitted in List responses. | [optional] 
**promoCode** | **String** | The promo code for the subscription. | [optional] 
**shippingOptionId** | **String** | The shipping option ID for the subscription. | [optional] 
**reasonStopped** | **String** | The reason the subscription is no longer active. | [optional] 



## Enum: BillingCycleEnum


* `YEAR` (value: `"YEAR"`)

* `MONTH` (value: `"MONTH"`)

* `WEEK` (value: `"WEEK"`)

* `DAY` (value: `"DAY"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




