

# AchieveGoalRequest

Request to achieve a goal in an automation. You must provide EITHER (integration + call_name) OR (automation_id + goal_id), along with contact_id.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**integration** | **String** | The integration name of the goal. Required when using integration/call_name approach. Use together with &#39;call_name&#39;. Mutually exclusive with automation_id/goal_id. |  [optional] |
|**callName** | **String** | The call name of the goal. Required when using integration/call_name approach. Use together with &#39;integration&#39;. Mutually exclusive with automation_id/goal_id. |  [optional] |
|**automationId** | **Long** | The automation ID. Required when using automation_id/goal_id approach. Use together with &#39;goal_id&#39;. Mutually exclusive with integration/call_name. |  [optional] |
|**goalId** | **Long** | The goal ID within the automation. Required when using automation_id/goal_id approach. Use together with &#39;automation_id&#39;. Mutually exclusive with integration/call_name. |  [optional] |
|**contactId** | **Long** | The contact ID for whom to achieve the goal |  |


## Implemented Interfaces

* Serializable

