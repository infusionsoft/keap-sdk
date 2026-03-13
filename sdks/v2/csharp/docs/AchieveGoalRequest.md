# Keap.Core.V2.Model.AchieveGoalRequest
Request to achieve a goal in an automation. You must provide EITHER (integration + call_name) OR (automation_id + goal_id), along with contact_id.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Integration** | **string** | The integration name of the goal. Required when using integration/call_name approach. Use together with &#39;call_name&#39;. Mutually exclusive with automation_id/goal_id. | [optional] 
**CallName** | **string** | The call name of the goal. Required when using integration/call_name approach. Use together with &#39;integration&#39;. Mutually exclusive with automation_id/goal_id. | [optional] 
**AutomationId** | **long** | The automation ID. Required when using automation_id/goal_id approach. Use together with &#39;goal_id&#39;. Mutually exclusive with integration/call_name. | [optional] 
**GoalId** | **long** | The goal ID within the automation. Required when using automation_id/goal_id approach. Use together with &#39;automation_id&#39;. Mutually exclusive with integration/call_name. | [optional] 
**ContactId** | **long** | The contact ID for whom to achieve the goal | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

