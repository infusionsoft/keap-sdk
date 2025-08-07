# KeapCoreServiceV2Sdk.Subscription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | If the subscription is active or not. | [optional] 
**allowTax** | **Boolean** | If the subscription allows tax. | [optional] 
**autoCharge** | **Boolean** | If the subscription should auto charge on the next billing date. | [optional] 
**billingAmount** | **Number** | The billing amount. | [optional] 
**billingCycle** | **String** | The billing cycle of the subscription. | [optional] 
**billingFrequency** | **Number** | The billing frequency in days. | [optional] 
**contactId** | **String** | Id of the contact to create the subscription for. | [optional] 
**daysBetweenRetries** | **Number** | Number of days between charge attempts. | [optional] 
**endDate** | **String** | The last date the subscription will bill. | [optional] 
**id** | **String** | Id of the subscription. | [optional] 
**lastBillDate** | **String** | The last date the subscription was billed. | [optional] 
**leadAffiliateId** | **String** | The affiliate id for the lead of the subscription. | [optional] 
**maxChargeAttempts** | **Number** | Maximum number of charge attempts. | [optional] 
**merchantAccountId** | **String** | The merchant account id associated with the subscription. | [optional] 
**nextBillDate** | **String** | The next date the subscription will bill. | [optional] 
**paymentMethodId** | **String** | Id associated with the payment method. | [optional] 
**productId** | **String** | Id of the product associated with the subscription. | [optional] 
**quantity** | **Number** | The subscription quantity. | [optional] 
**saleAffiliateId** | **String** | The affiliate id for the sale of the subscription. | [optional] 
**shippingAddress** | [**Address**](Address.md) |  | [optional] 
**startDate** | **String** | The first day the subscription will bill. | [optional] 
**subscriptionPlanId** | **String** | Id of the product subscription plan. | [optional] 



## Enum: BillingCycleEnum


* `YEAR` (value: `"YEAR"`)

* `MONTH` (value: `"MONTH"`)

* `WEEK` (value: `"WEEK"`)

* `DAY` (value: `"DAY"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




