

# RestCreatePaymentRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**notes** | **String** | The notes for this payment. |  [optional] |
|**paymentMethodId** | **String** | The payment method id to charge immediately against this order. Omit if you want to add a payment record instead. |  [optional] |
|**paymentMethodType** | **String** | The manual payment method type for manually recording a payment. Value must match against the list of types defined under your application&#39;s Order Settings. Ignored if payment_method_id is provided. |  [optional] |
|**paymentTime** | **ZonedDateTime** | The date and time of payment. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) |  [optional] |
|**paymentAmount** | **Double** | The amount to pay. Must not exceed the current balance of the order. Must be greater than 0 if charging with a payment_method_id |  |
|**applyToCommissions** | **Boolean** | Whether to apply this payment to commissions. |  |
|**externalSource** | **String** | The external source type of this payment. |  [optional] |
|**externalSourceValue** | **String** | The external source value of this payment. |  [optional] |
|**externalStatusValue** | **String** | The external status value of this payment. |  [optional] |
|**externalCreateTime** | **ZonedDateTime** | The external creation timestamp of this payment. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) |  [optional] |
|**externalUpdateTime** | **ZonedDateTime** | The external update timestamp of this payment. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) |  [optional] |
|**externalCreateUser** | **String** | The user who created this payment externally. |  [optional] |


## Implemented Interfaces

* Serializable

