# Keap.Core.V2.Model.CreateSubscriptionV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowDuplicate** | **bool** | If true, it will disable the check to see if there is already an identical subscription for the contact. Default is false. | [optional] 
**AllowTax** | **bool** | Only works if the product the product subscription is for is taxable. Default is false. | [optional] 
**AutoCharge** | **bool** | Defaults to true. | [optional] 
**BillingAmount** | **double** | Must be 0 or greater. Default is the price in the product subscription. | [optional] 
**ContactId** | **string** |  | 
**FirstBillDate** | **DateOnly** | The first day the subscription will bill, in EST. Must not be in the past. Default is today. | [optional] 
**PaymentMethodId** | **string** | Default is the contact&#39;s most recently used card, if auto charge is true. Default is 0 otherwise. | [optional] 
**Quantity** | **int** | Must be greater than 0. Default is 1. | [optional] 
**SaleAffiliateId** | **string** |  | [optional] 
**SubscriptionPlanId** | **string** | Id of the product subscription. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

