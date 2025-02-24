

# UpdateSubscriptionRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**active** | **Boolean** |  |  [optional] |
|**allowTax** | **Boolean** |  |  [optional] |
|**autoCharge** | **Boolean** |  |  [optional] |
|**billingAmount** | **Double** |  |  [optional] |
|**billingCycle** | [**BillingCycleEnum**](#BillingCycleEnum) |  |  [optional] |
|**billingFrequency** | **Integer** |  |  [optional] |
|**contactId** | **String** |  |  [optional] |
|**daysBetweenRetries** | **Integer** |  |  [optional] |
|**endBillDate** | **String** |  |  [optional] |
|**leadAffiliateId** | **String** |  |  [optional] |
|**maxChargeAttempts** | **Integer** |  |  [optional] |
|**nextBillDate** | **String** |  |  [optional] |
|**paymentMethodId** | **String** |  |  [optional] |
|**previousBillDate** | **String** |  |  [optional] |
|**productId** | **String** |  |  [optional] |
|**quantity** | **Integer** |  |  [optional] |
|**saleAffiliateId** | **String** |  |  [optional] |
|**shippingAddress** | [**Address**](Address.md) |  |  [optional] |
|**startDate** | **String** |  |  [optional] |
|**subscriptionPlanId** | **String** |  |  [optional] |



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

