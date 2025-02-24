

# CreateSubscriptionV2


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**allowDuplicate** | **Boolean** | If true, it will disable the check to see if there is already an identical subscription for the contact. Default is false. |  [optional] |
|**allowTax** | **Boolean** | Only works if the product the product subscription is for is taxable. Default is false. |  [optional] |
|**autoCharge** | **Boolean** | Defaults to true. |  [optional] |
|**billingAmount** | **Double** | Must be 0 or greater. Default is the price in the product subscription. |  [optional] |
|**contactId** | **String** |  |  |
|**firstBillDate** | **LocalDate** | The first day the subscription will bill, in EST. Must not be in the past. Default is today. |  [optional] |
|**paymentMethodId** | **String** | Default is the contact&#39;s most recently used card, if auto charge is true. Default is 0 otherwise. |  [optional] |
|**quantity** | **Integer** | Must be greater than 0. Default is 1. |  [optional] |
|**saleAffiliateId** | **String** |  |  [optional] |
|**subscriptionPlanId** | **String** | Id of the product subscription. |  [optional] |


## Implemented Interfaces

* Serializable

