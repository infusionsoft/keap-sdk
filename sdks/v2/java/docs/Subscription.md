

# Subscription


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**active** | **Boolean** | If the subscription is active or not. |  [optional] |
|**allowTax** | **Boolean** | If the subscription allows tax. |  [optional] |
|**autoCharge** | **Boolean** | If the subscription should auto charge on the next billing date. |  [optional] |
|**billingAmount** | **Double** | The billing amount. |  [optional] |
|**billingCycle** | [**BillingCycleEnum**](#BillingCycleEnum) | The billing cycle of the subscription. |  [optional] |
|**billingFrequency** | **Integer** | The billing frequency in days. |  [optional] |
|**contactId** | **String** | Id of the contact to create the subscription for. |  [optional] |
|**daysBetweenRetries** | **Integer** | Number of days between charge attempts. |  [optional] |
|**endDate** | **String** | The last date the subscription will bill. |  [optional] |
|**id** | **String** | Id of the subscription. |  [optional] |
|**lastBillDate** | **String** | The last date the subscription was billed. |  [optional] |
|**leadAffiliateId** | **String** | The affiliate id for the lead of the subscription. |  [optional] |
|**maxChargeAttempts** | **Integer** | Maximum number of charge attempts. |  [optional] |
|**merchantAccountId** | **String** | The merchant account id associated with the subscription. |  [optional] |
|**nextBillDate** | **String** | The next date the subscription will bill. |  [optional] |
|**paymentMethodId** | **String** | Id associated with the payment method. |  [optional] |
|**productId** | **String** | Id of the product associated with the subscription. |  [optional] |
|**quantity** | **Long** | The subscription quantity. |  [optional] |
|**saleAffiliateId** | **String** | The affiliate id for the sale of the subscription. |  [optional] |
|**shippingAddress** | [**Address**](Address.md) |  |  [optional] |
|**startDate** | **String** | The first day the subscription will bill. |  [optional] |
|**subscriptionPlanId** | **String** | Id of the product subscription plan. |  [optional] |



## Enum: BillingCycleEnum

| Name | Value |
|---- | -----|
| YEAR | &quot;YEAR&quot; |
| MONTH | &quot;MONTH&quot; |
| WEEK | &quot;WEEK&quot; |
| DAY | &quot;DAY&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

