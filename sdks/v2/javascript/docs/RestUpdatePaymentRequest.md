# KeapCoreServiceV2Sdk.RestUpdatePaymentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalSource** | **String** | The external source type of this payment. | [optional] 
**externalSourceValue** | **String** | The external source value of this payment. | [optional] 
**externalStatusValue** | **String** | The external status value of this payment. | [optional] 
**externalCreateTime** | **Date** | The external creation timestamp of this payment. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**externalUpdateTime** | **Date** | The external update timestamp of this payment. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**externalCreateUser** | **String** | The user who created this payment externally. | [optional] 
**notes** | **String** | Notes or description for the payment. | [optional] 
**paymentTime** | **Date** | The date and time of payment. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z). Can only be modified for manually recorded payments. | [optional] 
**paymentAmount** | **Number** | The payment amount. Can only be modified for manually recorded payments. | [optional] 


