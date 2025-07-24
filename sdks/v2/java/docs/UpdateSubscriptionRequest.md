

# UpdateSubscriptionRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**active** | **Boolean** | If the subscription is active or not. |  [optional] |
|**allowTax** | **Boolean** | Only works if the product associated with the product subscription is taxable. |  [optional] |
|**autoCharge** | **Boolean** | If the subscription should auto charge on the next billing date. |  [optional] |
|**billingAmount** | **Double** | The billing amount. Must be 0 or greater. |  [optional] |
|**billingCycle** | [**BillingCycleEnum**](#BillingCycleEnum) | The billing cycle for the subscription. |  [optional] |
|**billingFrequency** | **Integer** | The number of days between billing cycles. Must be 1 or greater. |  [optional] |
|**contactId** | **String** | Id of the contact to create the subscription for. |  |
|**daysBetweenRetries** | **Integer** | Number of days between charge attempts. Must be 1 or greater. |  [optional] |
|**endDate** | **String** | The date the subscription will end. Must not be in the past. |  [optional] |
|**leadAffiliateId** | **String** | The affiliate id for the lead of the subscription. |  [optional] |
|**maxChargeAttempts** | **Integer** | Maximum number of charge attempts. Must be 1 or greater. |  [optional] |
|**nextBillDate** | **String** | The next date the subscription will bill. Must not be in the past. |  [optional] |
|**paymentMethodId** | **String** | Id associated with the payment method. |  [optional] |
|**productId** | **String** |  |  [optional] |
|**quantity** | **Integer** | The subscription quantity. Must be 1 or greater. |  [optional] |
|**saleAffiliateId** | **String** | The affiliate id for the sale of the subscription. |  [optional] |
|**shippingAddress** | [**Address**](Address.md) |  |  [optional] |
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

