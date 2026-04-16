

# UpdateSubscriptionRequestDetail


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**quantity** | **Integer** | The subscription quantity. Must be 1 or greater. |  [optional] |
|**active** | **Boolean** | If the subscription is active or not. |  [optional] |
|**contactId** | **String** | Id of the contact associated with the subscription. |  [optional] |
|**subscriptionPlanId** | **String** | Id of the product subscription plan. |  [optional] |
|**billingAmount** | **Double** | The billing amount. Must be 0 or greater. |  [optional] |
|**autoCharge** | **Boolean** | If the subscription should auto charge on the next billing date. |  [optional] |
|**maxChargeAttempts** | **Integer** | Maximum number of charge attempts. Must be 1 or greater. |  [optional] |
|**daysBetweenRetries** | **Integer** | Number of days between charge attempts. Must be 1 or greater. |  [optional] |
|**billingFrequency** | **Integer** | The number of days between billing cycles. Must be 1 or greater. |  [optional] |
|**billingCycle** | [**BillingCycleEnum**](#BillingCycleEnum) | The billing cycle for the subscription. |  [optional] |
|**nextBillDate** | **LocalDate** | The next date the subscription will bill. Must not be in the past. |  [optional] |
|**endDate** | **LocalDate** | The date the subscription will end. Must not be in the past. |  [optional] |
|**paymentMethodId** | **String** | Id associated with the payment method. |  [optional] |
|**allowTax** | **Boolean** | Only works if the product associated with the product subscription is taxable. |  [optional] |
|**leadAffiliateId** | **String** | The affiliate id for the lead of the subscription. |  [optional] |
|**saleAffiliateId** | **String** | The affiliate id for the sale of the subscription. |  [optional] |
|**shippingAddress** | [**AddressRequestDetail**](AddressRequestDetail.md) | The shipping address for the subscription. |  [optional] |
|**promoCode** | **String** | The promo code for the subscription. |  [optional] |
|**shippingOptionId** | **String** | The shipping option ID for the subscription. |  [optional] |
|**reasonStopped** | **String** | The reason the subscription is no longer active. |  [optional] |



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

