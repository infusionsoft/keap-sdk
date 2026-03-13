

# CreateSubscriptionRequestDetail


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**quantity** | **Integer** | The subscription quantity. Must be 1 or greater. Default is 1. |  [optional] |
|**active** | **Boolean** | If the subscription is active or not. Default is true |  [optional] |
|**contactId** | **String** | Id of the contact to create the subscription for. |  |
|**subscriptionPlanId** | **String** | Id of the product subscription plan. |  |
|**billingAmount** | **Double** | The billing amount. Must be 0 or greater. Default is the price in the product subscription plan. |  [optional] |
|**autoCharge** | **Boolean** | If the subscription should auto charge on the next billing date. Default is true. |  [optional] |
|**maxChargeAttempts** | **Integer** | Maximum number of charge attempts. Must be 1 or greater. Default is the configured [Max Retries] value. |  [optional] |
|**daysBetweenRetries** | **Integer** | Number of days between charge attempts. Must be 1 or greater. Default is the configured [Num Days Between Retries] value. |  [optional] |
|**startDate** | **LocalDate** | The first day the subscription will bill. Must not be in the past. Default is today. |  [optional] |
|**paymentMethodId** | **String** | Id associated with the payment method. Default is the contact&#39;s most recently used card, if auto charge is true. Default is 0 otherwise. |  [optional] |
|**allowTax** | **Boolean** | Only works if the product associated with the product subscription is taxable. Default is false. |  [optional] |
|**allowDuplicate** | **Boolean** | If true, it will disable the check to see if there is already an identical subscription for the contact. Default is false. |  [optional] |
|**leadAffiliateId** | **String** | The affiliate id for the lead of the subscription. Default is 0. |  [optional] |
|**saleAffiliateId** | **String** | The affiliate id for the sale of the subscription. Default is 0. |  [optional] |
|**shippingAddress** | [**AddressRequestDetail**](AddressRequestDetail.md) | The shipping address for the subscription. |  [optional] |
|**promoCode** | **String** | The promo code for the subscription. |  [optional] |
|**shippingOptionId** | **String** | The shipping option ID for the subscription. |  [optional] |
|**reasonStopped** | **String** | The reason the subscription is no longer active. |  [optional] |


## Implemented Interfaces

* Serializable

