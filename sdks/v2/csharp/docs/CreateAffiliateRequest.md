# Keap.Core.V2.Model.CreateAffiliateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | **string** | The Affiliate code which have some validations. 1. The code should not have white spaces 2. The code should starts with letters 3. The code minimum 4 characters length | 
**Status** | **string** | The Affiliate Status | [optional] [default to StatusEnum.INACTIVE]
**Name** | **string** | The Affiliate name will be derived from the Contact, when not explicitly provided | [optional] 
**ContactId** | **string** | The contactId identifier , Must be a positive number | 
**ParentAffiliateId** | **string** | The Parent Affiliate Id | [optional] 
**NotifyOnSale** | **bool** | Whether to notify on sale events | [optional] 
**NotifyOnLead** | **bool** | Whether to notify on lead events | [optional] 
**TrackLeadsDays** | **int** | Number of days to track leads | [optional] 
**Password** | **string** | Affiliate portal password | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

