

# CreateCustomFieldRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**fieldType** | [**FieldTypeEnum**](#FieldTypeEnum) |  |  |
|**groupId** | **String** | An optional tab group to place the field under in the interface.  If not specified, will default to the &#39;Custom Fields&#39; tab. |  [optional] |
|**label** | **String** |  |  |
|**options** | [**List&lt;CreateCustomFieldOptionRequest&gt;**](CreateCustomFieldOptionRequest.md) |  |  [optional] |
|**userGroupId** | **String** | An optional user group to choose from when selecting values for User or UserListBox fields. |  [optional] |



## Enum: FieldTypeEnum

| Name | Value |
|---- | -----|
| CURRENCY | &quot;CURRENCY&quot; |
| DATE | &quot;DATE&quot; |
| DATE_TIME | &quot;DATE_TIME&quot; |
| DAY_OF_WEEK | &quot;DAY_OF_WEEK&quot; |
| DECIMAL_NUMBER | &quot;DECIMAL_NUMBER&quot; |
| DRILLDOWN | &quot;DRILLDOWN&quot; |
| DROPDOWN | &quot;DROPDOWN&quot; |
| EMAIL | &quot;EMAIL&quot; |
| LIST_BOX | &quot;LIST_BOX&quot; |
| MONTH | &quot;MONTH&quot; |
| NAME | &quot;NAME&quot; |
| PERCENT | &quot;PERCENT&quot; |
| PHONE_NUMBER | &quot;PHONE_NUMBER&quot; |
| RADIO | &quot;RADIO&quot; |
| SOCIAL_SECURITY_NUMBER | &quot;SOCIAL_SECURITY_NUMBER&quot; |
| STATE | &quot;STATE&quot; |
| TEXT | &quot;TEXT&quot; |
| TEXT_AREA | &quot;TEXT_AREA&quot; |
| USER | &quot;USER&quot; |
| USER_LIST_BOX | &quot;USER_LIST_BOX&quot; |
| WEBSITE | &quot;WEBSITE&quot; |
| WHOLE_NUMBER | &quot;WHOLE_NUMBER&quot; |
| YEAR | &quot;YEAR&quot; |
| YES_NO | &quot;YES_NO&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

