

# Subscription


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Id of the subscription. |  [optional] |
|**quantity** | **Long** | The subscription quantity. |  [optional] |
|**active** | **Boolean** | If the subscription is active or not. |  [optional] |
|**contactId** | **String** | Id of the contact associated with the subscription. |  [optional] |
|**productId** | **String** | Id of the product associated with the subscription. |  [optional] |
|**subscriptionPlanId** | **String** | Id of the product subscription plan. |  [optional] |
|**billingAmount** | **Double** | The billing amount. |  [optional] |
|**autoCharge** | **Boolean** | If the subscription should auto charge on the next billing date. |  [optional] |
|**billingFrequency** | **Integer** | The billing frequency in days. |  [optional] |
|**billingCycle** | [**BillingCycleEnum**](#BillingCycleEnum) | The billing cycle of the subscription. |  [optional] |
|**startDate** | **LocalDate** | The first day the subscription will bill. |  [optional] |
|**lastBillDate** | **LocalDate** | The last date the subscription was billed. |  [optional] |
|**nextBillDate** | **LocalDate** | The next date the subscription will bill. |  [optional] |
|**endDate** | **LocalDate** | The last date the subscription will bill. |  [optional] |
|**merchantAccountId** | **String** | The merchant account id associated with the subscription. |  [optional] |
|**paymentMethodId** | **String** | Id associated with the payment method. |  [optional] |
|**allowTax** | **Boolean** | If the subscription allows tax. |  [optional] |
|**maxChargeAttempts** | **Integer** | Maximum number of charge attempts. |  [optional] |
|**daysBetweenRetries** | **Integer** | Number of days between charge attempts. |  [optional] |
|**leadAffiliateId** | **String** | The affiliate id for the lead of the subscription. |  [optional] |
|**saleAffiliateId** | **String** | The affiliate id for the sale of the subscription. |  [optional] |
|**shippingAddress** | [**Address**](Address.md) | The shipping address for the subscription. |  [optional] |
|**promoCode** | **String** | The promo code for the subscription. |  [optional] |
|**shippingOptionId** | **String** | The shipping option ID for the subscription. |  [optional] |
|**reasonStopped** | **String** | The reason the subscription is no longer active. |  [optional] |
|**modificationTime** | **ZonedDateTime** | The date and time the subscription was last modified. |  [optional] |
|**customFields** | [**List&lt;CustomFieldValue&gt;**](CustomFieldValue.md) | List of custom field values applied to this subscription |  [optional] |



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

