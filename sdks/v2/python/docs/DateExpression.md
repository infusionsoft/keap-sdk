# DateExpression


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **str** |  | 
**parse_start** | **int** | Where in the expression this date exists (start) | 
**parse_end** | **int** | Where in the expression this date exists | 
**date_inferred** | **bool** | Whether the date portion of the results has been inferred (and can be ignored) | 
**time_inferred** | **bool** | Whether the time portion of the results has been inferred (and can be ignored) | 
**result** | [**LogicalDate**](LogicalDate.md) |  | 
**recurring** | **bool** | Whether the results are recurring | 
**recurse_until** | [**LogicalDate**](LogicalDate.md) | If recurring, when the recurrence ends | 
**complete_match** | **bool** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.date_expression import DateExpression

# TODO update the JSON string below
json = "{}"
# create an instance of DateExpression from a JSON string
date_expression_instance = DateExpression.from_json(json)
# print the JSON string representation of the object
print(DateExpression.to_json())

# convert the object into a dict
date_expression_dict = date_expression_instance.to_dict()
# create an instance of DateExpression from a dict
date_expression_from_dict = DateExpression.from_dict(date_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


