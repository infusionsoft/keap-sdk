# KeapCoreServiceV2Sdk.RestCreatePaymentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notes** | **String** | The notes for this payment. | [optional] 
**paymentMethodId** | **String** | The payment method id to charge immediately against this order. At least one of payment_method_id or payment_method_type is required. If payment_method_id is provided, payment_method_type is ignored. Omit if you want to add a payment record instead. | [optional] 
**paymentMethodType** | **String** | The manual payment method type for manually recording a payment. At least one of payment_method_id or payment_method_type is required. Ignored if payment_method_id is provided. Value must exactly match one of the Manual Payment Types configured for your application under Ecommerce Settings &gt; Orders (e.g. &#39;Credit Card (Manual)&#39;, &#39;Check&#39;, &#39;Cash&#39;, &#39;Money Order&#39;, &#39;Adjustment&#39;); unrecognized values will be rejected. Add custom types there if the one you need isn&#39;t listed. | [optional] 
**paymentTime** | **Date** | The date and time of payment. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**paymentAmount** | **Number** | The amount to pay. Must not exceed the current balance of the order. Must be greater than 0 if charging with a payment_method_id | 
**applyToCommissions** | **Boolean** | Whether to apply this payment to commissions. | 
**externalSource** | **String** | The external source type of this payment. | [optional] 
**externalSourceValue** | **String** | The external source value of this payment. | [optional] 
**externalStatusValue** | **String** | The external status value of this payment. | [optional] 
**externalCreateTime** | **Date** | The external creation timestamp of this payment. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**externalUpdateTime** | **Date** | The external update timestamp of this payment. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**externalCreateUser** | **String** | The user who created this payment externally. | [optional] 


