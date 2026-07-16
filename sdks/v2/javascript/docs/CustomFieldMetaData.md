# KeapCoreServiceV2Sdk.CustomFieldMetaData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique identifier of the custom field | [optional] 
**label** | **String** | The display label of the custom field | [optional] 
**options** | [**[CustomFieldOption]**](CustomFieldOption.md) | The list of available options for select/radio/multiselect/drilldown field types | [optional] 
**recordType** | **String** | The entity type this custom field belongs to (e.g. CONTACT, COMPANY) | [optional] 
**fieldType** | **String** | The data type of the custom field (e.g. Text, Number, Date, Select) | [optional] 
**defaultValue** | **String** | The default value for this custom field, if any | [optional] 
**groupId** | **String** | The ID of the group this custom field belongs to | [optional] 
**groupName** | **String** | The name of the group this custom field belongs to | [optional] 
**fieldName** | **String** | The database column name for this custom field. Use this value when filtering contacts (e.g. for field_name &#39;firstName1&#39;, filter with &#39;firstName1&#x3D;&#x3D;John&#39;). | [optional] 



## Enum: RecordTypeEnum


* `CONTACT` (value: `"CONTACT"`)

* `REFERRAL_PARTNER` (value: `"REFERRAL_PARTNER"`)

* `OPPORTUNITY` (value: `"OPPORTUNITY"`)

* `TASK_NOTE_APPOINTMENT` (value: `"TASK_NOTE_APPOINTMENT"`)

* `COMPANY` (value: `"COMPANY"`)

* `ORDER` (value: `"ORDER"`)

* `SUBSCRIPTION` (value: `"SUBSCRIPTION"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)





## Enum: FieldTypeEnum


* `CURRENCY` (value: `"CURRENCY"`)

* `DATE` (value: `"DATE"`)

* `DATE_TIME` (value: `"DATE_TIME"`)

* `DAY_OF_WEEK` (value: `"DAY_OF_WEEK"`)

* `DECIMAL_NUMBER` (value: `"DECIMAL_NUMBER"`)

* `DRILLDOWN` (value: `"DRILLDOWN"`)

* `DROPDOWN` (value: `"DROPDOWN"`)

* `EMAIL` (value: `"EMAIL"`)

* `LIST_BOX` (value: `"LIST_BOX"`)

* `MONTH` (value: `"MONTH"`)

* `NAME` (value: `"NAME"`)

* `PERCENT` (value: `"PERCENT"`)

* `PHONE_NUMBER` (value: `"PHONE_NUMBER"`)

* `RADIO` (value: `"RADIO"`)

* `SOCIAL_SECURITY_NUMBER` (value: `"SOCIAL_SECURITY_NUMBER"`)

* `STATE` (value: `"STATE"`)

* `TEXT` (value: `"TEXT"`)

* `TEXT_AREA` (value: `"TEXT_AREA"`)

* `USER` (value: `"USER"`)

* `USER_LIST_BOX` (value: `"USER_LIST_BOX"`)

* `WEBSITE` (value: `"WEBSITE"`)

* `WHOLE_NUMBER` (value: `"WHOLE_NUMBER"`)

* `YEAR` (value: `"YEAR"`)

* `YES_NO` (value: `"YES_NO"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




