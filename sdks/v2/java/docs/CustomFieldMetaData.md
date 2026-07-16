

# CustomFieldMetaData

Metadata describing a custom field, including its type and options

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | The unique identifier of the custom field |  [optional] |
|**label** | **String** | The display label of the custom field |  [optional] |
|**options** | [**List&lt;CustomFieldOption&gt;**](CustomFieldOption.md) | The list of available options for select/radio/multiselect/drilldown field types |  [optional] |
|**recordType** | [**RecordTypeEnum**](#RecordTypeEnum) | The entity type this custom field belongs to (e.g. CONTACT, COMPANY) |  [optional] |
|**fieldType** | [**FieldTypeEnum**](#FieldTypeEnum) | The data type of the custom field (e.g. Text, Number, Date, Select) |  [optional] |
|**defaultValue** | **String** | The default value for this custom field, if any |  [optional] |
|**groupId** | **String** | The ID of the group this custom field belongs to |  [optional] |
|**groupName** | **String** | The name of the group this custom field belongs to |  [optional] |
|**fieldName** | **String** | The database column name for this custom field. Use this value when filtering contacts (e.g. for field_name &#39;firstName1&#39;, filter with &#39;firstName1&#x3D;&#x3D;John&#39;). |  [optional] |



## Enum: RecordTypeEnum

| Name | Value |
|---- | -----|
| CONTACT | &quot;CONTACT&quot; |
| REFERRAL_PARTNER | &quot;REFERRAL_PARTNER&quot; |
| OPPORTUNITY | &quot;OPPORTUNITY&quot; |
| TASK_NOTE_APPOINTMENT | &quot;TASK_NOTE_APPOINTMENT&quot; |
| COMPANY | &quot;COMPANY&quot; |
| ORDER | &quot;ORDER&quot; |
| SUBSCRIPTION | &quot;SUBSCRIPTION&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |



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

