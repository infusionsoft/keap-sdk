# Keap.Core.V2.Model.CustomFieldMetaData
Metadata describing a custom field, including its type and options

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique identifier of the custom field | [optional] 
**Label** | **string** | The display label of the custom field | [optional] 
**Options** | [**List&lt;CustomFieldOption&gt;**](CustomFieldOption.md) | The list of available options for select/radio/multiselect/drilldown field types | [optional] 
**RecordType** | **string** | The entity type this custom field belongs to (e.g. CONTACT, COMPANY) | [optional] 
**FieldType** | **string** | The data type of the custom field (e.g. Text, Number, Date, Select) | [optional] 
**DefaultValue** | **string** | The default value for this custom field, if any | [optional] 
**GroupId** | **string** | The ID of the group this custom field belongs to | [optional] 
**GroupName** | **string** | The name of the group this custom field belongs to | [optional] 
**FieldName** | **string** | The database column name for this custom field. Use this value when filtering contacts (e.g. for field_name &#39;firstName1&#39;, filter with &#39;firstName1&#x3D;&#x3D;John&#39;). | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

