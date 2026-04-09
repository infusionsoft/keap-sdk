# Keap.Core.V2.Model.UpdateAffiliateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | **string** | The Affiliate code which have some validations. 1. The code should not have white spaces 2. The code should starts with letters 3. The code minimum 2 characters length | [optional] 
**Name** | **string** | The Affiliate name. | [optional] 
**Status** | **string** | The Affiliate Status | [optional] 
**ContactId** | **string** | The contactId identifier. Must be a positive number | [optional] 
**ParentAffiliateId** | **string** | The Parent Affiliate Id | [optional] 
**NotifyOnSale** | **bool** | Whether to notify on sale events | [optional] 
**NotifyOnLead** | **bool** | Whether to notify on lead events | [optional] 
**TrackLeadsDays** | **int** | Number of days to track leads | [optional] 
**Password** | **string** | Affiliate portal password. | [optional] 
**CustomFields** | [**List&lt;CustomFieldValue&gt;**](CustomFieldValue.md) | List of custom field values to apply to this affiliate | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

