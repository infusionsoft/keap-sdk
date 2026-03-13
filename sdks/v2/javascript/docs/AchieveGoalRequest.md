# KeapCoreServiceV2Sdk.AchieveGoalRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration** | **String** | The integration name of the goal. Required when using integration/call_name approach. Use together with &#39;call_name&#39;. Mutually exclusive with automation_id/goal_id. | [optional] 
**callName** | **String** | The call name of the goal. Required when using integration/call_name approach. Use together with &#39;integration&#39;. Mutually exclusive with automation_id/goal_id. | [optional] 
**automationId** | **Number** | The automation ID. Required when using automation_id/goal_id approach. Use together with &#39;goal_id&#39;. Mutually exclusive with integration/call_name. | [optional] 
**goalId** | **Number** | The goal ID within the automation. Required when using automation_id/goal_id approach. Use together with &#39;automation_id&#39;. Mutually exclusive with integration/call_name. | [optional] 
**contactId** | **Number** | The contact ID for whom to achieve the goal | 


