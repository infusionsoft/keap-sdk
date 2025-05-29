# KeapCoreServiceV2Sdk.DateExpression

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **String** |  | 
**parseStart** | **Number** | Where in the expression this date exists (start) | 
**parseEnd** | **Number** | Where in the expression this date exists | 
**dateInferred** | **Boolean** | Whether the date portion of the results has been inferred (and can be ignored) | 
**timeInferred** | **Boolean** | Whether the time portion of the results has been inferred (and can be ignored) | 
**result** | [**LogicalDate**](LogicalDate.md) |  | 
**recurring** | **Boolean** | Whether the results are recurring | 
**recurseUntil** | [**LogicalDate**](LogicalDate.md) | If recurring, when the recurrence ends | 
**completeMatch** | **Boolean** |  | [optional] 


