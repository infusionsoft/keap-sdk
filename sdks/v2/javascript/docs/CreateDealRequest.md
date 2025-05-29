# KeapCoreServiceV2Sdk.CreateDealRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the deal. This field is required and must have at least one character. | 
**value** | [**Money**](Money.md) | The monetary value of the deal. This field is required and must be valid. | 
**contacts** | [**[DealContact]**](DealContact.md) | The list of contacts associated with the deal. This field is required. | 
**stage** | [**Stage**](Stage.md) | The stage of the deal. This field is required and must be valid. | 
**owners** | [**[Owner]**](Owner.md) | The list of owners of the deal. This field is required. | 
**ownerId** | **String** | The ID of the owner of the deal. This field is optional. | [optional] 
**taskIds** | **[String]** | The list of task IDs associated with the deal. This field is required. | 
**status** | **String** | The status of the deal. This field is required. | 
**estimatedCloseTime** | **Date** | The estimated close time of the deal. This field is optional. | [optional] 
**customFields** | **{String: Object}** | The custom fields associated with the deal. This field is optional. | [optional] 


