# Keap.Core.V2.Model.DateExpression

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | **string** |  | 
**ParseStart** | **int** | Where in the expression this date exists (start) | 
**ParseEnd** | **int** | Where in the expression this date exists | 
**DateInferred** | **bool** | Whether the date portion of the results has been inferred (and can be ignored) | 
**TimeInferred** | **bool** | Whether the time portion of the results has been inferred (and can be ignored) | 
**Result** | [**LogicalDate**](LogicalDate.md) |  | 
**Recurring** | **bool** | Whether the results are recurring | 
**RecurseUntil** | [**LogicalDate**](LogicalDate.md) | If recurring, when the recurrence ends | 
**CompleteMatch** | **bool?** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

